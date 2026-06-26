// Browser client: Cognito (USER_PASSWORD_AUTH) -> AgentCore InvokeAgentRuntime.
// Exposed as window.RestartAdviser.{configure, signIn, invoke}.
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import {
  BedrockAgentCoreClient,
  InvokeAgentRuntimeCommand,
} from "@aws-sdk/client-bedrock-agentcore";

let CONFIG = null;
let TOKEN = null;
let AGENT_CLIENT = null;

export function configure(cfg) {
  CONFIG = cfg;
}

export async function signIn(username, password) {
  if (!CONFIG) throw new Error("call configure() first");
  if (!username || !password) throw new Error("username and password required");
  const cog = new CognitoIdentityProviderClient({ region: CONFIG.region });
  const res = await cog.send(
    new InitiateAuthCommand({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: CONFIG.cognitoClientId,
      AuthParameters: { USERNAME: username, PASSWORD: password },
    })
  );
  TOKEN = res.AuthenticationResult?.AccessToken;
  if (!TOKEN) throw new Error("no token from Cognito");
  AGENT_CLIENT = new BedrockAgentCoreClient({
    region: CONFIG.region,
    // No sigv4 creds; we pass a bearer token instead.
    credentials: { accessKeyId: "anon", secretAccessKey: "anon" },
  });
  return true;
}

export function isSignedIn() {
  return !!TOKEN;
}

export function signOut() {
  TOKEN = null;
  AGENT_CLIENT = null;
}

function padSession(s) {
  // AgentCore requires runtimeSessionId length >= 33.
  if (!s) s = "rs-" + Math.random().toString(36).slice(2);
  while (s.length < 33) s += "0";
  return s.slice(0, 64);
}

export async function invoke(message, sessionId) {
  if (!TOKEN) throw new Error("not signed in");
  const cmd = new InvokeAgentRuntimeCommand({
    agentRuntimeArn: CONFIG.agentRuntimeArn,
    runtimeSessionId: padSession(sessionId),
    payload: new TextEncoder().encode(JSON.stringify({ message })),
    contentType: "application/json",
    accept: "application/json",
  });
  // Override AWS sigv4 with bearer Cognito JWT — pattern from reference_cognito_agentcore_browser.
  cmd.middlewareStack.add(
    (next) => async (args) => {
      args.request.headers["authorization"] = `Bearer ${TOKEN}`;
      delete args.request.headers["x-amz-content-sha256"];
      return next(args);
    },
    { step: "finalizeRequest", name: "bearerOverride", priority: "high" }
  );
  const res = await AGENT_CLIENT.send(cmd);
  const text = await new Response(res.response).text();
  try {
    return JSON.parse(text);
  } catch {
    return { reply: text };
  }
}
