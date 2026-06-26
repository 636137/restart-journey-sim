var RestartAdviser = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/@smithy/types/dist-es/abort.js
  var init_abort = __esm({
    "node_modules/@smithy/types/dist-es/abort.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/auth.js
  var HttpAuthLocation;
  var init_auth = __esm({
    "node_modules/@smithy/types/dist-es/auth/auth.js"() {
      (function(HttpAuthLocation2) {
        HttpAuthLocation2["HEADER"] = "header";
        HttpAuthLocation2["QUERY"] = "query";
      })(HttpAuthLocation || (HttpAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
  var HttpApiKeyAuthLocation;
  var init_HttpApiKeyAuth = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
      (function(HttpApiKeyAuthLocation2) {
        HttpApiKeyAuthLocation2["HEADER"] = "header";
        HttpApiKeyAuthLocation2["QUERY"] = "query";
      })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
  var init_HttpAuthScheme = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
  var init_HttpAuthSchemeProvider = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpSigner.js
  var init_HttpSigner = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
  var init_IdentityProviderConfig = __esm({
    "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/index.js
  var init_auth2 = __esm({
    "node_modules/@smithy/types/dist-es/auth/index.js"() {
      init_auth();
      init_HttpApiKeyAuth();
      init_HttpAuthScheme();
      init_HttpAuthSchemeProvider();
      init_HttpSigner();
      init_IdentityProviderConfig();
    }
  });

  // node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
  var init_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/checksum.js
  var init_checksum = __esm({
    "node_modules/@smithy/types/dist-es/checksum.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/client.js
  var init_client = __esm({
    "node_modules/@smithy/types/dist-es/client.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/command.js
  var init_command = __esm({
    "node_modules/@smithy/types/dist-es/command.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/config.js
  var init_config = __esm({
    "node_modules/@smithy/types/dist-es/connection/config.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/manager.js
  var init_manager = __esm({
    "node_modules/@smithy/types/dist-es/connection/manager.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/pool.js
  var init_pool = __esm({
    "node_modules/@smithy/types/dist-es/connection/pool.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/index.js
  var init_connection = __esm({
    "node_modules/@smithy/types/dist-es/connection/index.js"() {
      init_config();
      init_manager();
      init_pool();
    }
  });

  // node_modules/@smithy/types/dist-es/crypto.js
  var init_crypto = __esm({
    "node_modules/@smithy/types/dist-es/crypto.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/encode.js
  var init_encode = __esm({
    "node_modules/@smithy/types/dist-es/encode.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoint.js
  var EndpointURLScheme;
  var init_endpoint = __esm({
    "node_modules/@smithy/types/dist-es/endpoint.js"() {
      (function(EndpointURLScheme2) {
        EndpointURLScheme2["HTTP"] = "http";
        EndpointURLScheme2["HTTPS"] = "https";
      })(EndpointURLScheme || (EndpointURLScheme = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
  var init_EndpointRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
  var init_ErrorRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
  var init_RuleSetObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/shared.js
  var init_shared = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
  var init_TreeRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/index.js
  var init_endpoints = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
      init_EndpointRuleObject();
      init_ErrorRuleObject();
      init_RuleSetObject();
      init_shared();
      init_TreeRuleObject();
    }
  });

  // node_modules/@smithy/types/dist-es/eventStream.js
  var init_eventStream = __esm({
    "node_modules/@smithy/types/dist-es/eventStream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/checksum.js
  var AlgorithmId;
  var init_checksum2 = __esm({
    "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
      (function(AlgorithmId2) {
        AlgorithmId2["MD5"] = "md5";
        AlgorithmId2["CRC32"] = "crc32";
        AlgorithmId2["CRC32C"] = "crc32c";
        AlgorithmId2["SHA1"] = "sha1";
        AlgorithmId2["SHA256"] = "sha256";
      })(AlgorithmId || (AlgorithmId = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
  var init_defaultClientConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
  var init_defaultExtensionConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/index.js
  var init_extensions = __esm({
    "node_modules/@smithy/types/dist-es/extensions/index.js"() {
      init_defaultClientConfiguration();
      init_defaultExtensionConfiguration();
      init_checksum2();
    }
  });

  // node_modules/@smithy/types/dist-es/feature-ids.js
  var init_feature_ids = __esm({
    "node_modules/@smithy/types/dist-es/feature-ids.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/http.js
  var FieldPosition;
  var init_http = __esm({
    "node_modules/@smithy/types/dist-es/http.js"() {
      (function(FieldPosition2) {
        FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
        FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      })(FieldPosition || (FieldPosition = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
  var init_httpHandlerInitialization = __esm({
    "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
  var init_apiKeyIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
  var init_awsCredentialIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/identity.js
  var init_identity = __esm({
    "node_modules/@smithy/types/dist-es/identity/identity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
  var init_tokenIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/index.js
  var init_identity2 = __esm({
    "node_modules/@smithy/types/dist-es/identity/index.js"() {
      init_apiKeyIdentity();
      init_awsCredentialIdentity();
      init_identity();
      init_tokenIdentity();
    }
  });

  // node_modules/@smithy/types/dist-es/logger.js
  var init_logger = __esm({
    "node_modules/@smithy/types/dist-es/logger.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/middleware.js
  var SMITHY_CONTEXT_KEY;
  var init_middleware = __esm({
    "node_modules/@smithy/types/dist-es/middleware.js"() {
      SMITHY_CONTEXT_KEY = "__smithy_context";
    }
  });

  // node_modules/@smithy/types/dist-es/pagination.js
  var init_pagination = __esm({
    "node_modules/@smithy/types/dist-es/pagination.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/profile.js
  var IniSectionType;
  var init_profile = __esm({
    "node_modules/@smithy/types/dist-es/profile.js"() {
      (function(IniSectionType2) {
        IniSectionType2["PROFILE"] = "profile";
        IniSectionType2["SSO_SESSION"] = "sso-session";
        IniSectionType2["SERVICES"] = "services";
      })(IniSectionType || (IniSectionType = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/response.js
  var init_response = __esm({
    "node_modules/@smithy/types/dist-es/response.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/retry.js
  var init_retry = __esm({
    "node_modules/@smithy/types/dist-es/retry.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/schema/schema.js
  var init_schema = __esm({
    "node_modules/@smithy/types/dist-es/schema/schema.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/schema/traits.js
  var init_traits = __esm({
    "node_modules/@smithy/types/dist-es/schema/traits.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/schema/schema-deprecated.js
  var init_schema_deprecated = __esm({
    "node_modules/@smithy/types/dist-es/schema/schema-deprecated.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/schema/sentinels.js
  var init_sentinels = __esm({
    "node_modules/@smithy/types/dist-es/schema/sentinels.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/schema/static-schemas.js
  var init_static_schemas = __esm({
    "node_modules/@smithy/types/dist-es/schema/static-schemas.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/serde.js
  var init_serde = __esm({
    "node_modules/@smithy/types/dist-es/serde.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/shapes.js
  var init_shapes = __esm({
    "node_modules/@smithy/types/dist-es/shapes.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/signature.js
  var init_signature = __esm({
    "node_modules/@smithy/types/dist-es/signature.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/stream.js
  var init_stream = __esm({
    "node_modules/@smithy/types/dist-es/stream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
  var init_streaming_blob_common_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
  var init_streaming_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
  var init_streaming_blob_payload_output_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transfer.js
  var RequestHandlerProtocol;
  var init_transfer = __esm({
    "node_modules/@smithy/types/dist-es/transfer.js"() {
      (function(RequestHandlerProtocol2) {
        RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
        RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
        RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
  var init_client_payload_blob_type_narrow = __esm({
    "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/mutable.js
  var init_mutable = __esm({
    "node_modules/@smithy/types/dist-es/transform/mutable.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/no-undefined.js
  var init_no_undefined = __esm({
    "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/type-transform.js
  var init_type_transform = __esm({
    "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/uri.js
  var init_uri = __esm({
    "node_modules/@smithy/types/dist-es/uri.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/util.js
  var init_util = __esm({
    "node_modules/@smithy/types/dist-es/util.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/waiter.js
  var init_waiter = __esm({
    "node_modules/@smithy/types/dist-es/waiter.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/index.js
  var init_dist_es = __esm({
    "node_modules/@smithy/types/dist-es/index.js"() {
      init_abort();
      init_auth2();
      init_blob_payload_input_types();
      init_checksum();
      init_client();
      init_command();
      init_connection();
      init_crypto();
      init_encode();
      init_endpoint();
      init_endpoints();
      init_eventStream();
      init_extensions();
      init_feature_ids();
      init_http();
      init_httpHandlerInitialization();
      init_identity2();
      init_logger();
      init_middleware();
      init_pagination();
      init_profile();
      init_response();
      init_retry();
      init_schema();
      init_traits();
      init_schema_deprecated();
      init_sentinels();
      init_static_schemas();
      init_serde();
      init_shapes();
      init_signature();
      init_stream();
      init_streaming_blob_common_types();
      init_streaming_blob_payload_input_types();
      init_streaming_blob_payload_output_types();
      init_transfer();
      init_client_payload_blob_type_narrow();
      init_mutable();
      init_no_undefined();
      init_type_transform();
      init_uri();
      init_util();
      init_waiter();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js
  var getSmithyContext;
  var init_getSmithyContext = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js"() {
      init_dist_es();
      getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
  var HttpRequest;
  var init_httpRequest = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js"() {
      HttpRequest = class _HttpRequest {
        constructor(options) {
          __publicField(this, "method");
          __publicField(this, "protocol");
          __publicField(this, "hostname");
          __publicField(this, "port");
          __publicField(this, "path");
          __publicField(this, "query");
          __publicField(this, "headers");
          __publicField(this, "username");
          __publicField(this, "password");
          __publicField(this, "fragment");
          __publicField(this, "body");
          this.method = options.method || "GET";
          this.hostname = options.hostname || "localhost";
          this.port = options.port;
          this.query = options.query || {};
          this.headers = options.headers || {};
          this.body = options.body;
          this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
          this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
          this.username = options.username;
          this.password = options.password;
          this.fragment = options.fragment;
        }
        static clone(request) {
          const cloned = new _HttpRequest({
            ...request,
            headers: { ...request.headers }
          });
          if (cloned.query) {
            cloned.query = cloneQuery(cloned.query);
          }
          return cloned;
        }
        static isInstance(request) {
          if (!request) {
            return false;
          }
          const req = request;
          return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
        }
        clone() {
          return _HttpRequest.clone(this);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/httpResponse.js
  var HttpResponse;
  var init_httpResponse = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/httpResponse.js"() {
      HttpResponse = class {
        constructor(options) {
          __publicField(this, "statusCode");
          __publicField(this, "reason");
          __publicField(this, "headers");
          __publicField(this, "body");
          this.statusCode = options.statusCode;
          this.reason = options.reason;
          this.headers = options.headers || {};
          this.body = options.body;
        }
        static isInstance(response) {
          if (!response)
            return false;
          const resp = response;
          return typeof resp.statusCode === "number" && typeof resp.headers === "object";
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/isValidHostLabel.js
  var VALID_HOST_LABEL_REGEX, isValidHostLabel;
  var init_isValidHostLabel = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/isValidHostLabel.js"() {
      VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
      isValidHostLabel = (value, allowSubDomains = false) => {
        if (!allowSubDomains) {
          return VALID_HOST_LABEL_REGEX.test(value);
        }
        const labels = value.split(".");
        for (const label of labels) {
          if (!isValidHostLabel(label)) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js
  var normalizeProvider;
  var init_normalizeProvider = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js"() {
      normalizeProvider = (input) => {
        if (typeof input === "function")
          return input;
        const promisified = Promise.resolve(input);
        return () => promisified;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }
  var init_parseQueryString = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js
  var parseUrl;
  var init_parseUrl = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js"() {
      init_parseQueryString();
      parseUrl = (url) => {
        if (typeof url === "string") {
          return parseUrl(new URL(url));
        }
        const { hostname, pathname, port, protocol, search } = url;
        let query;
        if (search) {
          query = parseQueryString(search);
        }
        return {
          hostname,
          port: port ? parseInt(port) : void 0,
          protocol,
          path: pathname,
          query
        };
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js
  var toEndpointV1;
  var init_toEndpointV1 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js"() {
      init_parseUrl();
      toEndpointV1 = (endpoint) => {
        if (typeof endpoint === "object") {
          if ("url" in endpoint) {
            const v1Endpoint = parseUrl(endpoint.url);
            if (endpoint.headers) {
              v1Endpoint.headers = {};
              for (const name in endpoint.headers) {
                v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
              }
            }
            return v1Endpoint;
          }
          return endpoint;
        }
        return parseUrl(endpoint);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/transport/index.js
  var init_transport = __esm({
    "node_modules/@smithy/core/dist-es/submodules/transport/index.js"() {
      init_getSmithyContext();
      init_httpRequest();
      init_httpResponse();
      init_isValidHostLabel();
      init_normalizeProvider();
      init_parseUrl();
      init_toEndpointV1();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-base64/constants-for-browser.js
  var chars, alphabetByEncoding, alphabetByValue, bitsPerLetter, bitsPerByte, maxLetterValue;
  var init_constants_for_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/constants-for-browser.js"() {
      chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
      alphabetByEncoding = Object.entries(chars).reduce((acc, [i3, c3]) => {
        acc[c3] = Number(i3);
        return acc;
      }, {});
      alphabetByValue = chars.split("");
      bitsPerLetter = 6;
      bitsPerByte = 8;
      maxLetterValue = 63;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-base64/fromBase64.browser.js
  var fromBase64;
  var init_fromBase64_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/fromBase64.browser.js"() {
      init_constants_for_browser();
      fromBase64 = (input) => {
        let totalByteLength = input.length / 4 * 3;
        if (input.slice(-2) === "==") {
          totalByteLength -= 2;
        } else if (input.slice(-1) === "=") {
          totalByteLength--;
        }
        const out = new ArrayBuffer(totalByteLength);
        const dataView = new DataView(out);
        for (let i3 = 0; i3 < input.length; i3 += 4) {
          let bits = 0;
          let bitLength = 0;
          for (let j3 = i3, limit = i3 + 3; j3 <= limit; j3++) {
            if (input[j3] !== "=") {
              if (!(input[j3] in alphabetByEncoding)) {
                throw new TypeError(`Invalid character ${input[j3]} in base64 string.`);
              }
              bits |= alphabetByEncoding[input[j3]] << (limit - j3) * bitsPerLetter;
              bitLength += bitsPerLetter;
            } else {
              bits >>= bitsPerLetter;
            }
          }
          const chunkOffset = i3 / 4 * 3;
          bits >>= bitLength % bitsPerByte;
          const byteLength = Math.floor(bitLength / bitsPerByte);
          for (let k3 = 0; k3 < byteLength; k3++) {
            const offset = (byteLength - k3 - 1) * bitsPerByte;
            dataView.setUint8(chunkOffset + k3, (bits & 255 << offset) >> offset);
          }
        }
        return new Uint8Array(out);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.browser.js
  var fromUtf8;
  var init_fromUtf8_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.browser.js"() {
      fromUtf8 = (input) => new TextEncoder().encode(input);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-base64/toBase64.browser.js
  function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
      input = fromUtf8(_input);
    } else {
      input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
      throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i3 = 0; i3 < input.length; i3 += 3) {
      let bits = 0;
      let bitLength = 0;
      for (let j3 = i3, limit = Math.min(i3 + 3, input.length); j3 < limit; j3++) {
        bits |= input[j3] << (limit - j3 - 1) * bitsPerByte;
        bitLength += bitsPerByte;
      }
      const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
      bits <<= bitClusterCount * bitsPerLetter - bitLength;
      for (let k3 = 1; k3 <= bitClusterCount; k3++) {
        const offset = (bitClusterCount - k3) * bitsPerLetter;
        str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
      }
      str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
  }
  var init_toBase64_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/toBase64.browser.js"() {
      init_fromUtf8_browser();
      init_constants_for_browser();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-stream/blob/Uint8ArrayBlobAdapter.js
  function bindUint8ArrayBlobAdapter(toUtf82, fromUtf84, toBase642, fromBase642) {
    return class Uint8ArrayBlobAdapter2 extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        if (typeof source === "string") {
          if (encoding === "base64") {
            return Uint8ArrayBlobAdapter2.mutate(fromBase642(source));
          }
          return Uint8ArrayBlobAdapter2.mutate(fromUtf84(source));
        }
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
      static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter2.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        if (encoding === "base64") {
          return toBase642(this);
        }
        return toUtf82(this);
      }
    };
  }
  var init_Uint8ArrayBlobAdapter = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/blob/Uint8ArrayBlobAdapter.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUtf8.browser.js
  var toUtf8;
  var init_toUtf8_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUtf8.browser.js"() {
      toUtf8 = (input) => {
        if (typeof input === "string") {
          return input;
        }
        if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
          throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
        }
        return new TextDecoder("utf-8").decode(input);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/uuid/v4.js
  function bindV4(getRandomValues) {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return () => crypto.randomUUID();
    }
    return () => {
      const rnds = new Uint8Array(16);
      getRandomValues(rnds);
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
    };
  }
  var decimalToHex;
  var init_v4 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/uuid/v4.js"() {
      decimalToHex = Array.from({ length: 256 }, (_, i3) => i3.toString(16).padStart(2, "0"));
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
  var expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectShort, expectByte, expectSizedInt, castInt, strictParseDouble, strictParseFloat32, NUMBER_REGEX, parseNumber, strictParseShort, strictParseByte, stackTraceWarning, logger;
  var init_parse_utils = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
      expectNumber = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "string") {
          const parsed = parseFloat(value);
          if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
              logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
          }
        }
        if (typeof value === "number") {
          return value;
        }
        throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
      };
      MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
      expectFloat32 = (value) => {
        const expected = expectNumber(value);
        if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
          if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
          }
        }
        return expected;
      };
      expectLong = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (Number.isInteger(value) && !Number.isNaN(value)) {
          return value;
        }
        throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
      };
      expectShort = (value) => expectSizedInt(value, 16);
      expectByte = (value) => expectSizedInt(value, 8);
      expectSizedInt = (value, size) => {
        const expected = expectLong(value);
        if (expected !== void 0 && castInt(expected, size) !== expected) {
          throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
        }
        return expected;
      };
      castInt = (value, size) => {
        switch (size) {
          case 32:
            return Int32Array.of(value)[0];
          case 16:
            return Int16Array.of(value)[0];
          case 8:
            return Int8Array.of(value)[0];
        }
      };
      strictParseDouble = (value) => {
        if (typeof value == "string") {
          return expectNumber(parseNumber(value));
        }
        return expectNumber(value);
      };
      strictParseFloat32 = (value) => {
        if (typeof value == "string") {
          return expectFloat32(parseNumber(value));
        }
        return expectFloat32(value);
      };
      NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
      parseNumber = (value) => {
        const matches = value.match(NUMBER_REGEX);
        if (matches === null || matches[0].length !== value.length) {
          throw new TypeError(`Expected real number, got implicit NaN`);
        }
        return parseFloat(value);
      };
      strictParseShort = (value) => {
        if (typeof value === "string") {
          return expectShort(parseNumber(value));
        }
        return expectShort(value);
      };
      strictParseByte = (value) => {
        if (typeof value === "string") {
          return expectByte(parseNumber(value));
        }
        return expectByte(value);
      };
      stackTraceWarning = (message) => {
        return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
      };
      logger = {
        warn: console.warn
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
  function dateToUtcString(date2) {
    const year2 = date2.getUTCFullYear();
    const month = date2.getUTCMonth();
    const dayOfWeek = date2.getUTCDay();
    const dayOfMonthInt = date2.getUTCDate();
    const hoursInt = date2.getUTCHours();
    const minutesInt = date2.getUTCMinutes();
    const secondsInt = date2.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
  }
  var DAYS, MONTHS, RFC3339, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, parseEpochTimestamp, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
  var init_date_utils = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
      init_parse_utils();
      DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
      RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
      parseRfc3339DateTimeWithOffset = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value !== "string") {
          throw new TypeError("RFC-3339 date-times must be expressed as strings");
        }
        const match = RFC3339_WITH_OFFSET.exec(value);
        if (!match) {
          throw new TypeError("Invalid RFC-3339 date-time value");
        }
        const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
        const year2 = strictParseShort(stripLeadingZeroes(yearStr));
        const month = parseDateValue(monthStr, "month", 1, 12);
        const day = parseDateValue(dayStr, "day", 1, 31);
        const date2 = buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
        if (offsetStr.toUpperCase() != "Z") {
          date2.setTime(date2.getTime() - parseOffsetToMilliseconds(offsetStr));
        }
        return date2;
      };
      IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
      parseRfc7231DateTime = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value !== "string") {
          throw new TypeError("RFC-7231 date-times must be expressed as strings");
        }
        let match = IMF_FIXDATE.exec(value);
        if (match) {
          const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
          return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
        }
        match = RFC_850_DATE.exec(value);
        if (match) {
          const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
          return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
          }));
        }
        match = ASC_TIME.exec(value);
        if (match) {
          const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
          return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
        }
        throw new TypeError("Invalid RFC-7231 date-time value");
      };
      parseEpochTimestamp = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        let valueAsDouble;
        if (typeof value === "number") {
          valueAsDouble = value;
        } else if (typeof value === "string") {
          valueAsDouble = strictParseDouble(value);
        } else if (typeof value === "object" && value.tag === 1) {
          valueAsDouble = value.value;
        } else {
          throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        }
        if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
          throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
        }
        return new Date(Math.round(valueAsDouble * 1e3));
      };
      buildDate = (year2, month, day, time2) => {
        const adjustedMonth = month - 1;
        validateDayOfMonth(year2, adjustedMonth, day);
        return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
      };
      parseTwoDigitYear = (value) => {
        const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
        const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
        if (valueInThisCentury < thisYear) {
          return valueInThisCentury + 100;
        }
        return valueInThisCentury;
      };
      FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
      adjustRfc850Year = (input) => {
        if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
          return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
        }
        return input;
      };
      parseMonthByShortName = (value) => {
        const monthIdx = MONTHS.indexOf(value);
        if (monthIdx < 0) {
          throw new TypeError(`Invalid month: ${value}`);
        }
        return monthIdx + 1;
      };
      DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      validateDayOfMonth = (year2, month, day) => {
        let maxDays = DAYS_IN_MONTH[month];
        if (month === 1 && isLeapYear(year2)) {
          maxDays = 29;
        }
        if (day > maxDays) {
          throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
        }
      };
      isLeapYear = (year2) => {
        return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
      };
      parseDateValue = (value, type, lower, upper) => {
        const dateVal = strictParseByte(stripLeadingZeroes(value));
        if (dateVal < lower || dateVal > upper) {
          throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
        }
        return dateVal;
      };
      parseMilliseconds = (value) => {
        if (value === null || value === void 0) {
          return 0;
        }
        return strictParseFloat32("0." + value) * 1e3;
      };
      parseOffsetToMilliseconds = (value) => {
        const directionStr = value[0];
        let direction = 1;
        if (directionStr == "+") {
          direction = 1;
        } else if (directionStr == "-") {
          direction = -1;
        } else {
          throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
        }
        const hour = Number(value.substring(1, 3));
        const minute = Number(value.substring(4, 6));
        return direction * (hour * 60 + minute) * 60 * 1e3;
      };
      stripLeadingZeroes = (value) => {
        let idx = 0;
        while (idx < value.length - 1 && value.charAt(idx) === "0") {
          idx++;
        }
        if (idx === 0) {
          return value;
        }
        return value.slice(idx);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
  var LazyJsonString;
  var init_lazy_json = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
      LazyJsonString = function LazyJsonString2(val) {
        const str = Object.assign(new String(val), {
          deserializeJSON() {
            return JSON.parse(String(val));
          },
          toString() {
            return String(val);
          },
          toJSON() {
            return String(val);
          }
        });
        return str;
      };
      LazyJsonString.from = (object) => {
        if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
          return object;
        } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
          return LazyJsonString(String(object));
        }
        return LazyJsonString(JSON.stringify(object));
      };
      LazyJsonString.fromObject = LazyJsonString.from;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
  function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
      part = `"${part.replace(/"/g, '\\"')}"`;
    }
    return part;
  }
  var init_quote_header = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
  function range(v, min, max) {
    const _v2 = Number(v);
    if (_v2 < min || _v2 > max) {
      throw new Error(`Value ${_v2} out of range [${min}, ${max}]`);
    }
  }
  var ddd, mmm, time, date, year, RFC3339_WITH_OFFSET2, IMF_FIXDATE2, RFC_850_DATE2, ASC_TIME2, months, _parseEpochTimestamp, _parseRfc3339DateTimeWithOffset, _parseRfc7231DateTime;
  var init_schema_date_utils = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js"() {
      ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
      mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
      time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
      date = `(\\d?\\d)`;
      year = `(\\d{4})`;
      RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
      IMF_FIXDATE2 = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
      RFC_850_DATE2 = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
      ASC_TIME2 = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      _parseEpochTimestamp = (value) => {
        if (value == null) {
          return void 0;
        }
        let num = NaN;
        if (typeof value === "number") {
          num = value;
        } else if (typeof value === "string") {
          if (!/^-?\d*\.?\d+$/.test(value)) {
            throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
          }
          num = Number.parseFloat(value);
        } else if (typeof value === "object" && value.tag === 1) {
          num = value.value;
        }
        if (isNaN(num) || Math.abs(num) === Infinity) {
          throw new TypeError("Epoch timestamps must be valid finite numbers.");
        }
        return new Date(Math.round(num * 1e3));
      };
      _parseRfc3339DateTimeWithOffset = (value) => {
        if (value == null) {
          return void 0;
        }
        if (typeof value !== "string") {
          throw new TypeError("RFC3339 timestamps must be strings");
        }
        const matches = RFC3339_WITH_OFFSET2.exec(value);
        if (!matches) {
          throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
        }
        const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
        range(monthStr, 1, 12);
        range(dayStr, 1, 31);
        range(hours, 0, 23);
        range(minutes, 0, 59);
        range(seconds, 0, 60);
        const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
        date2.setUTCFullYear(Number(yearStr));
        if (offsetStr.toUpperCase() != "Z") {
          const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
          const scalar = sign === "-" ? 1 : -1;
          date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
        }
        return date2;
      };
      _parseRfc7231DateTime = (value) => {
        if (value == null) {
          return void 0;
        }
        if (typeof value !== "string") {
          throw new TypeError("RFC7231 timestamps must be strings.");
        }
        let day;
        let month;
        let year2;
        let hour;
        let minute;
        let second;
        let fraction;
        let matches;
        if (matches = IMF_FIXDATE2.exec(value)) {
          [, day, month, year2, hour, minute, second, fraction] = matches;
        } else if (matches = RFC_850_DATE2.exec(value)) {
          [, day, month, year2, hour, minute, second, fraction] = matches;
          year2 = (Number(year2) + 1900).toString();
        } else if (matches = ASC_TIME2.exec(value)) {
          [, month, day, hour, minute, second, fraction, year2] = matches;
        }
        if (year2 && second) {
          const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
          range(day, 1, 31);
          range(hour, 0, 23);
          range(minute, 0, 59);
          range(second, 0, 60);
          const date2 = new Date(timestamp);
          date2.setUTCFullYear(Number(year2));
          return date2;
        }
        throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
  function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
      throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
      return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i3 = 0; i3 < segments.length; i3++) {
      if (currentSegment === "") {
        currentSegment = segments[i3];
      } else {
        currentSegment += delimiter + segments[i3];
      }
      if ((i3 + 1) % numDelimiters === 0) {
        compoundSegments.push(currentSegment);
        currentSegment = "";
      }
    }
    if (currentSegment !== "") {
      compoundSegments.push(currentSegment);
    }
    return compoundSegments;
  }
  var init_split_every = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
  var splitHeader;
  var init_split_header = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
      splitHeader = (value) => {
        const z = value.length;
        const values = [];
        let withinQuotes = false;
        let prevChar = void 0;
        let anchor = 0;
        for (let i3 = 0; i3 < z; ++i3) {
          const char = value[i3];
          switch (char) {
            case `"`:
              if (prevChar !== "\\") {
                withinQuotes = !withinQuotes;
              }
              break;
            case ",":
              if (!withinQuotes) {
                values.push(value.slice(anchor, i3));
                anchor = i3 + 1;
              }
              break;
            default:
          }
          prevChar = char;
        }
        values.push(value.slice(anchor));
        return values.map((v) => {
          v = v.trim();
          const z2 = v.length;
          if (z2 < 2) {
            return v;
          }
          if (v[0] === `"` && v[z2 - 1] === `"`) {
            v = v.slice(1, z2 - 1);
          }
          return v.replace(/\\"/g, '"');
        });
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
  var format, NumericValue;
  var init_NumericValue = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
      format = /^-?\d*(\.\d+)?$/;
      NumericValue = class _NumericValue {
        constructor(string, type) {
          __publicField(this, "string");
          __publicField(this, "type");
          this.string = string;
          this.type = type;
          if (!format.test(string)) {
            throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
          }
        }
        toString() {
          return this.string;
        }
        static [Symbol.hasInstance](object) {
          if (!object || typeof object !== "object") {
            return false;
          }
          const _nv = object;
          return _NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i3 = 0; i3 < encoded.length; i3 += 2) {
      const encodedByte = encoded.slice(i3, i3 + 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i3 / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  function toHex(bytes) {
    let out = "";
    for (let i3 = 0; i3 < bytes.byteLength; i3++) {
      out += SHORT_TO_HEX[bytes[i3]];
    }
    return out;
  }
  var SHORT_TO_HEX, HEX_TO_SHORT;
  var init_hex_encoding = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js"() {
      SHORT_TO_HEX = {};
      HEX_TO_SHORT = {};
      for (let i3 = 0; i3 < 256; i3++) {
        let encodedByte = i3.toString(16).toLowerCase();
        if (encodedByte.length === 1) {
          encodedByte = `0${encodedByte}`;
        }
        SHORT_TO_HEX[i3] = encodedByte;
        HEX_TO_SHORT[encodedByte] = i3;
      }
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-body-length/calculateBodyLength.browser.js
  var TEXT_ENCODER, calculateBodyLength;
  var init_calculateBodyLength_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-body-length/calculateBodyLength.browser.js"() {
      TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
      calculateBodyLength = (body) => {
        if (typeof body === "string") {
          if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
          }
          let len = body.length;
          for (let i3 = len - 1; i3 >= 0; i3--) {
            const code = body.charCodeAt(i3);
            if (code > 127 && code <= 2047)
              len++;
            else if (code > 2047 && code <= 65535)
              len += 2;
            if (code >= 56320 && code <= 57343)
              i3--;
          }
          return len;
        } else if (typeof body.byteLength === "number") {
          return body.byteLength;
        } else if (typeof body.size === "number") {
          return body.size;
        }
        throw new Error(`Body Length computation failed for ${body}`);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.browser.js
  var toUint8Array;
  var init_toUint8Array_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.browser.js"() {
      init_fromUtf8_browser();
      toUint8Array = (data) => {
        if (typeof data === "string") {
          return fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js
  var isArrayBuffer;
  var init_is_array_buffer = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js"() {
      isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.browser.js
  var getEndpointFromConfig;
  var init_getEndpointFromConfig_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.browser.js"() {
      getEndpointFromConfig = async (serviceId) => void 0;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js
  var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
  var init_s3 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js"() {
      resolveParamsForS3 = async (endpointParams) => {
        const bucket = endpointParams?.Bucket || "";
        if (typeof endpointParams.Bucket === "string") {
          endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
        }
        if (isArnBucketName(bucket)) {
          if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
          }
        } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
          endpointParams.ForcePathStyle = true;
        }
        if (endpointParams.DisableMultiRegionAccessPoints) {
          endpointParams.disableMultiRegionAccessPoints = true;
          endpointParams.DisableMRAP = true;
        }
        return endpointParams;
      };
      DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
      IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
      DOTS_PATTERN = /\.\./;
      isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
      isArnBucketName = (bucketName) => {
        const [arn, partition2, service, , , bucket] = bucketName.split(":");
        const isArn = arn === "arn" && bucketName.split(":").length >= 6;
        const isValidArn = Boolean(isArn && partition2 && service && bucket);
        if (isArn && !isValidArn) {
          throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
        }
        return isValidArn;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/index.js
  var init_service_customizations = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/index.js"() {
      init_s3();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js
  var createConfigValueProvider;
  var init_createConfigValueProvider = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js"() {
      createConfigValueProvider = (configKey, canonicalEndpointParamKey, config, isClientContextParam = false) => {
        const configProvider = async () => {
          let configValue;
          if (isClientContextParam) {
            const clientContextParams = config.clientContextParams;
            const nestedValue = clientContextParams?.[configKey];
            configValue = nestedValue ?? config[configKey] ?? config[canonicalEndpointParamKey];
          } else {
            configValue = config[configKey] ?? config[canonicalEndpointParamKey];
          }
          if (typeof configValue === "function") {
            return configValue();
          }
          return configValue;
        };
        if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
          return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
          };
        }
        if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
          return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.accountId ?? credentials?.AccountId;
            return configValue;
          };
        }
        if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
          return async () => {
            if (config.isCustomEndpoint === false) {
              return void 0;
            }
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
              if ("url" in endpoint) {
                return endpoint.url.href;
              }
              if ("hostname" in endpoint) {
                const { protocol, hostname, port, path } = endpoint;
                return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
              }
            }
            return endpoint;
          };
        }
        return configProvider;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/toEndpointV1.js
  var init_toEndpointV12 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/toEndpointV1.js"() {
      init_transport();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js
  function bindGetEndpointFromInstructions(getEndpointFromConfig2) {
    return async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.isCustomEndpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await getEndpointFromConfig2(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
          clientConfig.isCustomEndpoint = true;
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
        const customEndpoint = await clientConfig.endpoint();
        if (customEndpoint?.headers) {
          endpoint.headers ?? (endpoint.headers = {});
          for (const [name, value] of Object.entries(customEndpoint.headers)) {
            endpoint.headers[name] = Array.isArray(value) ? value : [value];
          }
        }
      }
      return endpoint;
    };
  }
  var resolveParams;
  var init_getEndpointFromInstructions = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js"() {
      init_service_customizations();
      init_createConfigValueProvider();
      init_toEndpointV12();
      resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
        const endpointParams = {};
        const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
        for (const [name, instruction] of Object.entries(instructions)) {
          switch (instruction.type) {
            case "staticContextParams":
              endpointParams[name] = instruction.value;
              break;
            case "contextParams":
              endpointParams[name] = commandInput[instruction.name];
              break;
            case "clientContextParams":
            case "builtInParams":
              endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
              break;
            case "operationContextParams":
              endpointParams[name] = instruction.get(commandInput);
              break;
            default:
              throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
          }
        }
        if (Object.keys(instructions).length === 0) {
          Object.assign(endpointParams, clientConfig);
        }
        if (String(clientConfig.serviceId).toLowerCase() === "s3") {
          await resolveParamsForS3(endpointParams);
        }
        return endpointParams;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js
  function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
      context.__smithy_context = { features: {} };
    } else if (!context.__smithy_context.features) {
      context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
  }
  function bindEndpointMiddleware(getEndpointFromConfig2) {
    const getEndpointFromInstructions2 = bindGetEndpointFromInstructions(getEndpointFromConfig2);
    return ({ config, instructions }) => {
      return (next, context) => async (args) => {
        if (config.isCustomEndpoint) {
          setFeature(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions2(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
  }
  var init_endpointMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js"() {
      init_transport();
      init_getEndpointFromInstructions();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js
  function bindGetEndpointPlugin(getEndpointFromConfig2) {
    const endpointMiddleware2 = bindEndpointMiddleware(getEndpointFromConfig2);
    return (config, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware2({
          config,
          instructions
        }), endpointMiddlewareOptions);
      }
    });
  }
  var serializerMiddlewareOption2, endpointMiddlewareOptions;
  var init_getEndpointPlugin = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js"() {
      init_endpointMiddleware();
      serializerMiddlewareOption2 = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: true
      };
      endpointMiddlewareOptions = {
        step: "serialize",
        tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
        name: "endpointV2Middleware",
        override: true,
        relation: "before",
        toMiddleware: serializerMiddlewareOption2.name
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js
  function bindResolveEndpointConfig(getEndpointFromConfig2) {
    return (input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = getEndpointFromConfig2(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    };
  }
  var init_resolveEndpointConfig = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js"() {
      init_transport();
      init_toEndpointV12();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/bdd/BinaryDecisionDiagram.js
  var BinaryDecisionDiagram;
  var init_BinaryDecisionDiagram = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/bdd/BinaryDecisionDiagram.js"() {
      BinaryDecisionDiagram = class _BinaryDecisionDiagram {
        constructor(bdd3, root3, conditions, results) {
          __publicField(this, "nodes");
          __publicField(this, "root");
          __publicField(this, "conditions");
          __publicField(this, "results");
          this.nodes = bdd3;
          this.root = root3;
          this.conditions = conditions;
          this.results = results;
        }
        static from(bdd3, root3, conditions, results) {
          return new _BinaryDecisionDiagram(bdd3, root3, conditions, results);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/cache/EndpointCache.js
  var EndpointCache;
  var init_EndpointCache = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/cache/EndpointCache.js"() {
      EndpointCache = class {
        constructor({ size, params }) {
          __publicField(this, "capacity");
          __publicField(this, "data", /* @__PURE__ */ new Map());
          __publicField(this, "parameters", []);
          this.capacity = size ?? 50;
          if (params) {
            this.parameters = params;
          }
        }
        get(endpointParams, resolver) {
          const key = this.hash(endpointParams);
          if (key === false) {
            return resolver();
          }
          if (!this.data.has(key)) {
            if (this.data.size > this.capacity + 10) {
              const keys = this.data.keys();
              let i3 = 0;
              while (true) {
                const { value, done } = keys.next();
                this.data.delete(value);
                if (done || ++i3 > 10) {
                  break;
                }
              }
            }
            this.data.set(key, resolver());
          }
          return this.data.get(key);
        }
        size() {
          return this.data.size;
        }
        hash(endpointParams) {
          let buffer = "";
          const { parameters } = this;
          if (parameters.length === 0) {
            return false;
          }
          for (const param of parameters) {
            const val = String(endpointParams[param] ?? "");
            if (val.includes("|;")) {
              return false;
            }
            buffer += val + "|;";
          }
          return buffer;
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointError.js
  var EndpointError;
  var init_EndpointError = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointError.js"() {
      EndpointError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "EndpointError";
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointFunctions.js
  var init_EndpointFunctions = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointFunctions.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointRuleObject.js
  var init_EndpointRuleObject2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/ErrorRuleObject.js
  var init_ErrorRuleObject2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/RuleSetObject.js
  var init_RuleSetObject2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/TreeRuleObject.js
  var init_TreeRuleObject2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/shared.js
  var init_shared2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/shared.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/index.js
  var init_types = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/index.js"() {
      init_EndpointError();
      init_EndpointFunctions();
      init_EndpointRuleObject2();
      init_ErrorRuleObject2();
      init_RuleSetObject2();
      init_TreeRuleObject2();
      init_shared2();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/debugId.js
  var debugId;
  var init_debugId = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/debugId.js"() {
      debugId = "endpoints";
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/toDebugString.js
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }
  var init_toDebugString = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/toDebugString.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/index.js
  var init_debug = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/index.js"() {
      init_debugId();
      init_toDebugString();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/customEndpointFunctions.js
  var customEndpointFunctions;
  var init_customEndpointFunctions = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/customEndpointFunctions.js"() {
      customEndpointFunctions = {};
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/booleanEquals.js
  var booleanEquals;
  var init_booleanEquals = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/booleanEquals.js"() {
      booleanEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/coalesce.js
  function coalesce(...args) {
    for (const arg of args) {
      if (arg != null) {
        return arg;
      }
    }
    return void 0;
  }
  var init_coalesce = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/coalesce.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttrPathList.js
  var getAttrPathList;
  var init_getAttrPathList = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttrPathList.js"() {
      init_types();
      getAttrPathList = (path) => {
        const parts = path.split(".");
        const pathList = [];
        for (const part of parts) {
          const squareBracketIndex = part.indexOf("[");
          if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
              throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
              throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
              pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
          } else {
            pathList.push(part);
          }
        }
        return pathList;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttr.js
  var getAttr;
  var init_getAttr = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttr.js"() {
      init_types();
      init_getAttrPathList();
      getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
        if (typeof acc !== "object") {
          throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
        } else if (Array.isArray(acc)) {
          const i3 = parseInt(index);
          return acc[i3 < 0 ? acc.length + i3 : i3];
        }
        return acc[index];
      }, value);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isSet.js
  var isSet;
  var init_isSet = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isSet.js"() {
      isSet = (value) => value != null;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/ite.js
  function ite(condition, trueValue, falseValue) {
    return condition ? trueValue : falseValue;
  }
  var init_ite = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/ite.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/not.js
  var not;
  var init_not = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/not.js"() {
      not = (value) => !value;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isIpAddress.js
  var IP_V4_REGEX, isIpAddress;
  var init_isIpAddress = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isIpAddress.js"() {
      IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
      isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/parseURL.js
  var DEFAULT_PORTS, parseURL;
  var init_parseURL = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/parseURL.js"() {
      init_dist_es();
      init_isIpAddress();
      DEFAULT_PORTS = {
        [EndpointURLScheme.HTTP]: 80,
        [EndpointURLScheme.HTTPS]: 443
      };
      parseURL = (value) => {
        const whatwgURL = (() => {
          try {
            if (value instanceof URL) {
              return value;
            }
            if (typeof value === "object" && "hostname" in value) {
              const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
              const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
              url.search = Object.entries(query).map(([k3, v]) => `${k3}=${v}`).join("&");
              return url;
            }
            return new URL(value);
          } catch (error) {
            return null;
          }
        })();
        if (!whatwgURL) {
          console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
          return null;
        }
        const urlString = whatwgURL.href;
        const { host, hostname, pathname, protocol, search } = whatwgURL;
        if (search) {
          return null;
        }
        const scheme = protocol.slice(0, -1);
        if (!Object.values(EndpointURLScheme).includes(scheme)) {
          return null;
        }
        const isIp = isIpAddress(hostname);
        const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
        const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
        return {
          scheme,
          authority,
          path: pathname,
          normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
          isIp
        };
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/split.js
  function split(value, delimiter, limit) {
    if (limit === 1) {
      return [value];
    }
    if (value === "") {
      return [""];
    }
    const parts = value.split(delimiter);
    if (limit === 0) {
      return parts;
    }
    return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
  }
  var init_split = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/split.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/stringEquals.js
  var stringEquals;
  var init_stringEquals = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/stringEquals.js"() {
      stringEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/substring.js
  var substring;
  var init_substring = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/substring.js"() {
      substring = (input, start, stop, reverse) => {
        if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
          return null;
        }
        if (!reverse) {
          return input.substring(start, stop);
        }
        return input.substring(input.length - stop, input.length - start);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/uriEncode.js
  var uriEncode;
  var init_uriEncode = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/uriEncode.js"() {
      uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/index.js
  var init_lib = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/index.js"() {
      init_booleanEquals();
      init_coalesce();
      init_getAttr();
      init_isSet();
      init_transport();
      init_ite();
      init_not();
      init_parseURL();
      init_split();
      init_stringEquals();
      init_substring();
      init_uriEncode();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/endpointFunctions.js
  var endpointFunctions;
  var init_endpointFunctions = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/endpointFunctions.js"() {
      init_lib();
      endpointFunctions = {
        booleanEquals,
        coalesce,
        getAttr,
        isSet,
        isValidHostLabel,
        ite,
        not,
        parseURL,
        split,
        stringEquals,
        substring,
        uriEncode
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateTemplate.js
  var evaluateTemplate;
  var init_evaluateTemplate = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateTemplate.js"() {
      init_lib();
      evaluateTemplate = (template, options) => {
        const evaluatedTemplateArr = [];
        const { referenceRecord, endpointParams } = options;
        let currentIndex = 0;
        while (currentIndex < template.length) {
          const openingBraceIndex = template.indexOf("{", currentIndex);
          if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
          }
          evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
          const closingBraceIndex = template.indexOf("}", openingBraceIndex);
          if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
          }
          if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
          }
          const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
          if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(referenceRecord[refName] ?? endpointParams[refName], attrName));
          } else {
            evaluatedTemplateArr.push(referenceRecord[parameterName] ?? endpointParams[parameterName]);
          }
          currentIndex = closingBraceIndex + 1;
        }
        return evaluatedTemplateArr.join("");
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getReferenceValue.js
  var getReferenceValue;
  var init_getReferenceValue = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getReferenceValue.js"() {
      getReferenceValue = ({ ref }, options) => {
        return options.referenceRecord[ref] ?? options.endpointParams[ref];
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateExpression.js
  var evaluateExpression, callFunction, group;
  var init_evaluateExpression = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateExpression.js"() {
      init_types();
      init_customEndpointFunctions();
      init_endpointFunctions();
      init_evaluateTemplate();
      init_getReferenceValue();
      evaluateExpression = (obj, keyName, options) => {
        if (typeof obj === "string") {
          return evaluateTemplate(obj, options);
        } else if (obj["fn"]) {
          return group.callFunction(obj, options);
        } else if (obj["ref"]) {
          return getReferenceValue(obj, options);
        }
        throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
      };
      callFunction = ({ fn, argv }, options) => {
        const evaluatedArgs = Array(argv.length);
        for (let i3 = 0; i3 < evaluatedArgs.length; ++i3) {
          const arg = argv[i3];
          if (typeof arg === "boolean" || typeof arg === "number") {
            evaluatedArgs[i3] = arg;
          } else {
            evaluatedArgs[i3] = group.evaluateExpression(arg, "arg", options);
          }
        }
        const namespaceSeparatorIndex = fn.indexOf(".");
        if (namespaceSeparatorIndex !== -1) {
          const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
          const customFunction = namespaceFunctions?.[fn.slice(namespaceSeparatorIndex + 1)];
          if (typeof customFunction === "function") {
            return customFunction(...evaluatedArgs);
          }
        }
        const callable = endpointFunctions[fn];
        if (typeof callable === "function") {
          return callable(...evaluatedArgs);
        }
        throw new Error(`function ${fn} not loaded in endpointFunctions.`);
      };
      group = {
        evaluateExpression,
        callFunction
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/callFunction.js
  var init_callFunction = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/callFunction.js"() {
      init_evaluateExpression();
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateCondition.js
  var evaluateCondition;
  var init_evaluateCondition = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateCondition.js"() {
      init_debug();
      init_types();
      init_callFunction();
      evaluateCondition = (condition, options) => {
        const { assign } = condition;
        if (assign && assign in options.referenceRecord) {
          throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
        }
        const value = callFunction(condition, options);
        options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
        const result = value === "" ? true : !!value;
        if (assign != null) {
          return { result, toAssign: { name: assign, value } };
        }
        return { result };
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointHeaders.js
  var getEndpointHeaders;
  var init_getEndpointHeaders = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointHeaders.js"() {
      init_types();
      init_evaluateExpression();
      getEndpointHeaders = (headers, options) => Object.entries(headers ?? {}).reduce((acc, [headerKey, headerVal]) => {
        acc[headerKey] = headerVal.map((headerValEntry) => {
          const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
          if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
          }
          return processedExpr;
        });
        return acc;
      }, {});
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointProperties.js
  var getEndpointProperties, getEndpointProperty, group2;
  var init_getEndpointProperties = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointProperties.js"() {
      init_types();
      init_evaluateTemplate();
      getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
        acc[propertyKey] = group2.getEndpointProperty(propertyVal, options);
        return acc;
      }, {});
      getEndpointProperty = (property, options) => {
        if (Array.isArray(property)) {
          return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
        }
        switch (typeof property) {
          case "string":
            return evaluateTemplate(property, options);
          case "object":
            if (property === null) {
              throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return group2.getEndpointProperties(property, options);
          case "boolean":
            return property;
          default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
        }
      };
      group2 = {
        getEndpointProperty,
        getEndpointProperties
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointUrl.js
  var getEndpointUrl;
  var init_getEndpointUrl = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointUrl.js"() {
      init_types();
      init_evaluateExpression();
      getEndpointUrl = (endpointUrl, options) => {
        const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
        if (typeof expression === "string") {
          try {
            return new URL(expression);
          } catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
          }
        }
        throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/decideEndpoint.js
  var RESULT, decideEndpoint;
  var init_decideEndpoint = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/decideEndpoint.js"() {
      init_types();
      init_evaluateCondition();
      init_evaluateExpression();
      init_getEndpointHeaders();
      init_getEndpointProperties();
      init_getEndpointUrl();
      RESULT = 1e8;
      decideEndpoint = (bdd3, options) => {
        const { nodes: nodes3, root: root3, results, conditions } = bdd3;
        let ref = root3;
        const referenceRecord = {};
        const closure = {
          referenceRecord,
          endpointParams: options.endpointParams,
          logger: options.logger
        };
        while (ref !== 1 && ref !== -1 && ref < RESULT) {
          const node_i = 3 * (Math.abs(ref) - 1);
          const [condition_i, highRef, lowRef] = [nodes3[node_i], nodes3[node_i + 1], nodes3[node_i + 2]];
          const [fn, argv, assign] = conditions[condition_i];
          const evaluation = evaluateCondition({ fn, assign, argv }, closure);
          if (evaluation.toAssign) {
            const { name, value } = evaluation.toAssign;
            referenceRecord[name] = value;
          }
          ref = ref >= 0 === evaluation.result ? highRef : lowRef;
        }
        if (ref >= RESULT) {
          const result = results[ref - RESULT];
          if (result[0] === -1) {
            const [, errorExpression] = result;
            throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
          }
          const [url, properties, headers] = result;
          return {
            url: getEndpointUrl(url, closure),
            properties: getEndpointProperties(properties, closure),
            headers: getEndpointHeaders(headers ?? {}, closure)
          };
        }
        throw new EndpointError(`No matching endpoint.`);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/endpoints/index.browser.js
  var getEndpointFromInstructions, resolveEndpointConfig, endpointMiddleware, getEndpointPlugin;
  var init_index_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/endpoints/index.browser.js"() {
      init_getEndpointFromConfig_browser();
      init_getEndpointFromInstructions();
      init_endpointMiddleware();
      init_getEndpointPlugin();
      init_resolveEndpointConfig();
      init_BinaryDecisionDiagram();
      init_EndpointCache();
      init_decideEndpoint();
      init_isIpAddress();
      init_transport();
      init_customEndpointFunctions();
      init_types();
      getEndpointFromInstructions = bindGetEndpointFromInstructions(getEndpointFromConfig);
      resolveEndpointConfig = bindResolveEndpointConfig(getEndpointFromConfig);
      endpointMiddleware = bindEndpointMiddleware(getEndpointFromConfig);
      getEndpointPlugin = bindGetEndpointPlugin(getEndpointFromConfig);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-type-check.js
  var isReadableStream;
  var init_stream_type_check = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-type-check.js"() {
      isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-collector.browser.js
  async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
  }
  async function collectStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        chunks.push(value);
        length += value.length;
      }
      isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      collected.set(chunk, offset);
      offset += chunk.length;
    }
    return collected;
  }
  function readToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = reader.result ?? "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
  var streamCollector;
  var init_stream_collector_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-collector.browser.js"() {
      init_fromBase64_browser();
      streamCollector = async (stream) => {
        if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
          if (Blob.prototype.arrayBuffer !== void 0) {
            return new Uint8Array(await stream.arrayBuffer());
          }
          return collectBlob(stream);
        }
        return collectStream(stream);
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/util-stream/sdk-stream-mixin.browser.js
  var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED, sdkStreamMixin, isBlobInstance;
  var init_sdk_stream_mixin_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/sdk-stream-mixin.browser.js"() {
      init_toBase64_browser();
      init_hex_encoding();
      init_toUtf8_browser();
      init_stream_collector_browser();
      init_stream_type_check();
      ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
      sdkStreamMixin = (stream) => {
        if (!isBlobInstance(stream) && !isReadableStream(stream)) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
        }
        let transformed = false;
        const transformToByteArray = async () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          return await streamCollector(stream);
        };
        const blobToWebStream = (blob) => {
          if (typeof blob.stream !== "function") {
            throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
          }
          return blob.stream();
        };
        return Object.assign(stream, {
          transformToByteArray,
          transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === "base64") {
              return toBase64(buf);
            } else if (encoding === "hex") {
              return toHex(buf);
            } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
              return toUtf8(buf);
            } else if (typeof TextDecoder === "function") {
              return new TextDecoder(encoding).decode(buf);
            } else {
              throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
            }
          },
          transformToWebStream: () => {
            if (transformed) {
              throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            transformed = true;
            if (isBlobInstance(stream)) {
              return blobToWebStream(stream);
            } else if (isReadableStream(stream)) {
              return stream;
            } else {
              throw new Error(`Cannot transform payload to web stream, got ${stream}`);
            }
          }
        });
      };
      isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/serde/index.browser.js
  var no, Uint8ArrayBlobAdapter, _getRandomValues, v4, generateIdempotencyToken;
  var init_index_browser2 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/serde/index.browser.js"() {
      init_fromBase64_browser();
      init_toBase64_browser();
      init_Uint8ArrayBlobAdapter();
      init_fromUtf8_browser();
      init_toUtf8_browser();
      init_v4();
      init_date_utils();
      init_lazy_json();
      init_quote_header();
      init_schema_date_utils();
      init_split_every();
      init_split_header();
      init_NumericValue();
      init_hex_encoding();
      init_calculateBodyLength_browser();
      init_toUint8Array_browser();
      init_is_array_buffer();
      init_sdk_stream_mixin_browser();
      no = Symbol.for("node-only");
      Uint8ArrayBlobAdapter = class extends bindUint8ArrayBlobAdapter(toUtf8, fromUtf8, toBase64, fromBase64) {
      };
      _getRandomValues = (array) => crypto.getRandomValues(array);
      v4 = bindV4(_getRandomValues);
      generateIdempotencyToken = v4;
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e3) {
          reject(e3);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f3, y, t, g3 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g3.next = verb(0), g3["throw"] = verb(1), g3["return"] = verb(2), typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
      return this;
    }), g3;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f3) throw new TypeError("Generator is already executing.");
      while (g3 && (g3 = 0, op[0] && (_ = 0)), _) try {
        if (f3 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e3) {
        op = [6, e3];
        y = 0;
      } finally {
        f3 = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i3 = 0;
    if (m2) return m2.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i3 >= o.length) o = void 0;
        return { value: o && o[i3++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf82;
  var init_fromUtf8_browser2 = __esm({
    "node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
      fromUtf82 = (input) => new TextEncoder().encode(input);
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
  var init_toUint8Array = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
      init_fromUtf8_browser2();
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
  var init_toUtf8_browser2 = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/index.js
  var init_dist_es2 = __esm({
    "node_modules/@smithy/util-utf8/dist-es/index.js"() {
      init_fromUtf8_browser2();
      init_toUint8Array();
      init_toUtf8_browser2();
    }
  });

  // node_modules/@aws-crypto/util/build/module/convertToBuffer.js
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf83(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }
  var fromUtf83;
  var init_convertToBuffer = __esm({
    "node_modules/@aws-crypto/util/build/module/convertToBuffer.js"() {
      init_dist_es2();
      fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
        return Buffer.from(input, "utf8");
      } : fromUtf82;
    }
  });

  // node_modules/@aws-crypto/util/build/module/isEmptyData.js
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }
  var init_isEmptyData = __esm({
    "node_modules/@aws-crypto/util/build/module/isEmptyData.js"() {
    }
  });

  // node_modules/@aws-crypto/util/build/module/numToUint8.js
  function numToUint8(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }
  var init_numToUint8 = __esm({
    "node_modules/@aws-crypto/util/build/module/numToUint8.js"() {
    }
  });

  // node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
  function uint32ArrayFrom(a_lookUpTable2) {
    if (!Uint32Array.from) {
      var return_array = new Uint32Array(a_lookUpTable2.length);
      var a_index = 0;
      while (a_index < a_lookUpTable2.length) {
        return_array[a_index] = a_lookUpTable2[a_index];
        a_index += 1;
      }
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable2);
  }
  var init_uint32ArrayFrom = __esm({
    "node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js"() {
    }
  });

  // node_modules/@aws-crypto/util/build/module/index.js
  var init_module = __esm({
    "node_modules/@aws-crypto/util/build/module/index.js"() {
      init_convertToBuffer();
      init_isEmptyData();
      init_numToUint8();
      init_uint32ArrayFrom();
    }
  });

  // node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
  var AwsCrc32;
  var init_aws_crc32 = __esm({
    "node_modules/@aws-crypto/crc32/build/module/aws_crc32.js"() {
      init_tslib_es6();
      init_module();
      init_module2();
      AwsCrc32 = /** @class */
      function() {
        function AwsCrc322() {
          this.crc32 = new Crc32();
        }
        AwsCrc322.prototype.update = function(toHash) {
          if (isEmptyData(toHash))
            return;
          this.crc32.update(convertToBuffer(toHash));
        };
        AwsCrc322.prototype.digest = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a3) {
              return [2, numToUint8(this.crc32.digest())];
            });
          });
        };
        AwsCrc322.prototype.reset = function() {
          this.crc32 = new Crc32();
        };
        return AwsCrc322;
      }();
    }
  });

  // node_modules/@aws-crypto/crc32/build/module/index.js
  var Crc32, a_lookUpTable, lookupTable;
  var init_module2 = __esm({
    "node_modules/@aws-crypto/crc32/build/module/index.js"() {
      init_tslib_es6();
      init_module();
      init_aws_crc32();
      Crc32 = /** @class */
      function() {
        function Crc322() {
          this.checksum = 4294967295;
        }
        Crc322.prototype.update = function(data) {
          var e_1, _a3;
          try {
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
              var byte = data_1_1.value;
              this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (data_1_1 && !data_1_1.done && (_a3 = data_1.return)) _a3.call(data_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return this;
        };
        Crc322.prototype.digest = function() {
          return (this.checksum ^ 4294967295) >>> 0;
        };
        return Crc322;
      }();
      a_lookUpTable = [
        0,
        1996959894,
        3993919788,
        2567524794,
        124634137,
        1886057615,
        3915621685,
        2657392035,
        249268274,
        2044508324,
        3772115230,
        2547177864,
        162941995,
        2125561021,
        3887607047,
        2428444049,
        498536548,
        1789927666,
        4089016648,
        2227061214,
        450548861,
        1843258603,
        4107580753,
        2211677639,
        325883990,
        1684777152,
        4251122042,
        2321926636,
        335633487,
        1661365465,
        4195302755,
        2366115317,
        997073096,
        1281953886,
        3579855332,
        2724688242,
        1006888145,
        1258607687,
        3524101629,
        2768942443,
        901097722,
        1119000684,
        3686517206,
        2898065728,
        853044451,
        1172266101,
        3705015759,
        2882616665,
        651767980,
        1373503546,
        3369554304,
        3218104598,
        565507253,
        1454621731,
        3485111705,
        3099436303,
        671266974,
        1594198024,
        3322730930,
        2970347812,
        795835527,
        1483230225,
        3244367275,
        3060149565,
        1994146192,
        31158534,
        2563907772,
        4023717930,
        1907459465,
        112637215,
        2680153253,
        3904427059,
        2013776290,
        251722036,
        2517215374,
        3775830040,
        2137656763,
        141376813,
        2439277719,
        3865271297,
        1802195444,
        476864866,
        2238001368,
        4066508878,
        1812370925,
        453092731,
        2181625025,
        4111451223,
        1706088902,
        314042704,
        2344532202,
        4240017532,
        1658658271,
        366619977,
        2362670323,
        4224994405,
        1303535960,
        984961486,
        2747007092,
        3569037538,
        1256170817,
        1037604311,
        2765210733,
        3554079995,
        1131014506,
        879679996,
        2909243462,
        3663771856,
        1141124467,
        855842277,
        2852801631,
        3708648649,
        1342533948,
        654459306,
        3188396048,
        3373015174,
        1466479909,
        544179635,
        3110523913,
        3462522015,
        1591671054,
        702138776,
        2966460450,
        3352799412,
        1504918807,
        783551873,
        3082640443,
        3233442989,
        3988292384,
        2596254646,
        62317068,
        1957810842,
        3939845945,
        2647816111,
        81470997,
        1943803523,
        3814918930,
        2489596804,
        225274430,
        2053790376,
        3826175755,
        2466906013,
        167816743,
        2097651377,
        4027552580,
        2265490386,
        503444072,
        1762050814,
        4150417245,
        2154129355,
        426522225,
        1852507879,
        4275313526,
        2312317920,
        282753626,
        1742555852,
        4189708143,
        2394877945,
        397917763,
        1622183637,
        3604390888,
        2714866558,
        953729732,
        1340076626,
        3518719985,
        2797360999,
        1068828381,
        1219638859,
        3624741850,
        2936675148,
        906185462,
        1090812512,
        3747672003,
        2825379669,
        829329135,
        1181335161,
        3412177804,
        3160834842,
        628085408,
        1382605366,
        3423369109,
        3138078467,
        570562233,
        1426400815,
        3317316542,
        2998733608,
        733239954,
        1555261956,
        3268935591,
        3050360625,
        752459403,
        1541320221,
        2607071920,
        3965973030,
        1969922972,
        40735498,
        2617837225,
        3943577151,
        1913087877,
        83908371,
        2512341634,
        3803740692,
        2075208622,
        213261112,
        2463272603,
        3855990285,
        2094854071,
        198958881,
        2262029012,
        4057260610,
        1759359992,
        534414190,
        2176718541,
        4139329115,
        1873836001,
        414664567,
        2282248934,
        4279200368,
        1711684554,
        285281116,
        2405801727,
        4167216745,
        1634467795,
        376229701,
        2685067896,
        3608007406,
        1308918612,
        956543938,
        2808555105,
        3495958263,
        1231636301,
        1047427035,
        2932959818,
        3654703836,
        1088359270,
        936918e3,
        2847714899,
        3736837829,
        1202900863,
        817233897,
        3183342108,
        3401237130,
        1404277552,
        615818150,
        3134207493,
        3453421203,
        1423857449,
        601450431,
        3009837614,
        3294710456,
        1567103746,
        711928724,
        3020668471,
        3272380065,
        1510334235,
        755167117
      ];
      lookupTable = uint32ArrayFrom(a_lookUpTable);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js
  function negate(bytes) {
    for (let i3 = 0; i3 < 8; i3++) {
      bytes[i3] ^= 255;
    }
    for (let i3 = 7; i3 > -1; i3--) {
      bytes[i3]++;
      if (bytes[i3] !== 0)
        break;
    }
  }
  var Int64;
  var init_Int64 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js"() {
      init_index_browser2();
      Int64 = class _Int64 {
        constructor(bytes) {
          __publicField(this, "bytes");
          this.bytes = bytes;
          if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
          }
        }
        static fromNumber(number) {
          if (number > 9223372036854776e3 || number < -9223372036854776e3) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
          }
          const bytes = new Uint8Array(8);
          for (let i3 = 7, remaining = Math.abs(Math.round(number)); i3 > -1 && remaining > 0; i3--, remaining /= 256) {
            bytes[i3] = remaining;
          }
          if (number < 0) {
            negate(bytes);
          }
          return new _Int64(bytes);
        }
        valueOf() {
          const bytes = this.bytes.slice(0);
          const negative = bytes[0] & 128;
          if (negative) {
            negate(bytes);
          }
          return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js
  var HeaderMarshaller, HEADER_VALUE_TYPE, BOOLEAN_TAG, BYTE_TAG, SHORT_TAG, INT_TAG, LONG_TAG, BINARY_TAG, STRING_TAG, TIMESTAMP_TAG, UUID_TAG, UUID_PATTERN;
  var init_HeaderMarshaller = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js"() {
      init_index_browser2();
      init_Int64();
      HeaderMarshaller = class {
        constructor(toUtf82, fromUtf84) {
          __publicField(this, "toUtf8");
          __publicField(this, "fromUtf8");
          this.toUtf8 = toUtf82;
          this.fromUtf8 = fromUtf84;
        }
        format(headers) {
          const chunks = [];
          for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
          }
          const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
          let position = 0;
          for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
          }
          return out;
        }
        formatHeaderValue(header) {
          switch (header.type) {
            case "boolean":
              return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, header.value]);
            case "short":
              const shortView = new DataView(new ArrayBuffer(3));
              shortView.setUint8(0, 3);
              shortView.setInt16(1, header.value, false);
              return new Uint8Array(shortView.buffer);
            case "integer":
              const intView = new DataView(new ArrayBuffer(5));
              intView.setUint8(0, 4);
              intView.setInt32(1, header.value, false);
              return new Uint8Array(intView.buffer);
            case "long":
              const longBytes = new Uint8Array(9);
              longBytes[0] = 5;
              longBytes.set(header.value.bytes, 1);
              return longBytes;
            case "binary":
              const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
              binView.setUint8(0, 6);
              binView.setUint16(1, header.value.byteLength, false);
              const binBytes = new Uint8Array(binView.buffer);
              binBytes.set(header.value, 3);
              return binBytes;
            case "string":
              const utf8Bytes = this.fromUtf8(header.value);
              const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
              strView.setUint8(0, 7);
              strView.setUint16(1, utf8Bytes.byteLength, false);
              const strBytes = new Uint8Array(strView.buffer);
              strBytes.set(utf8Bytes, 3);
              return strBytes;
            case "timestamp":
              const tsBytes = new Uint8Array(9);
              tsBytes[0] = 8;
              tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
              return tsBytes;
            case "uuid":
              if (!UUID_PATTERN.test(header.value)) {
                throw new Error(`Invalid UUID received: ${header.value}`);
              }
              const uuidBytes = new Uint8Array(17);
              uuidBytes[0] = 9;
              uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
              return uuidBytes;
          }
        }
        parse(headers) {
          const out = {};
          let position = 0;
          while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
              case 0:
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: true
                };
                break;
              case 1:
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: false
                };
                break;
              case 2:
                out[name] = {
                  type: BYTE_TAG,
                  value: headers.getInt8(position++)
                };
                break;
              case 3:
                out[name] = {
                  type: SHORT_TAG,
                  value: headers.getInt16(position, false)
                };
                position += 2;
                break;
              case 4:
                out[name] = {
                  type: INT_TAG,
                  value: headers.getInt32(position, false)
                };
                position += 4;
                break;
              case 5:
                out[name] = {
                  type: LONG_TAG,
                  value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
                };
                position += 8;
                break;
              case 6:
                const binaryLength = headers.getUint16(position, false);
                position += 2;
                out[name] = {
                  type: BINARY_TAG,
                  value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
                };
                position += binaryLength;
                break;
              case 7:
                const stringLength = headers.getUint16(position, false);
                position += 2;
                out[name] = {
                  type: STRING_TAG,
                  value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
                };
                position += stringLength;
                break;
              case 8:
                out[name] = {
                  type: TIMESTAMP_TAG,
                  value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
                };
                position += 8;
                break;
              case 9:
                const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                position += 16;
                out[name] = {
                  type: UUID_TAG,
                  value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
                };
                break;
              default:
                throw new Error(`Unrecognized header type tag`);
            }
          }
          return out;
        }
      };
      (function(HEADER_VALUE_TYPE3) {
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
        HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
      })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
      BOOLEAN_TAG = "boolean";
      BYTE_TAG = "byte";
      SHORT_TAG = "short";
      INT_TAG = "integer";
      LONG_TAG = "long";
      BINARY_TAG = "binary";
      STRING_TAG = "string";
      TIMESTAMP_TAG = "timestamp";
      UUID_TAG = "uuid";
      UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js
  function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
      throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
      throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
      throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
      throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
      headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
      body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
    };
  }
  var PRELUDE_MEMBER_LENGTH, PRELUDE_LENGTH, CHECKSUM_LENGTH, MINIMUM_MESSAGE_LENGTH;
  var init_splitMessage = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js"() {
      init_module2();
      PRELUDE_MEMBER_LENGTH = 4;
      PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
      CHECKSUM_LENGTH = 4;
      MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js
  var EventStreamCodec;
  var init_EventStreamCodec = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js"() {
      init_module2();
      init_HeaderMarshaller();
      init_splitMessage();
      EventStreamCodec = class {
        constructor(toUtf82, fromUtf84) {
          __publicField(this, "headerMarshaller");
          __publicField(this, "messageBuffer");
          __publicField(this, "isEndOfStream");
          this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf84);
          this.messageBuffer = [];
          this.isEndOfStream = false;
        }
        feed(message) {
          this.messageBuffer.push(this.decode(message));
        }
        endOfStream() {
          this.isEndOfStream = true;
        }
        getMessage() {
          const message = this.messageBuffer.pop();
          const isEndOfStream = this.isEndOfStream;
          return {
            getMessage() {
              return message;
            },
            isEndOfStream() {
              return isEndOfStream;
            }
          };
        }
        getAvailableMessages() {
          const messages = this.messageBuffer;
          this.messageBuffer = [];
          const isEndOfStream = this.isEndOfStream;
          return {
            getMessages() {
              return messages;
            },
            isEndOfStream() {
              return isEndOfStream;
            }
          };
        }
        encode({ headers: rawHeaders, body }) {
          const headers = this.headerMarshaller.format(rawHeaders);
          const length = headers.byteLength + body.byteLength + 16;
          const out = new Uint8Array(length);
          const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
          const checksum = new Crc32();
          view.setUint32(0, length, false);
          view.setUint32(4, headers.byteLength, false);
          view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
          out.set(headers, 12);
          out.set(body, headers.byteLength + 12);
          view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
          return out;
        }
        decode(message) {
          const { headers, body } = splitMessage(message);
          return { headers: this.headerMarshaller.parse(headers), body };
        }
        formatHeaders(rawHeaders) {
          return this.headerMarshaller.format(rawHeaders);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js
  var MessageDecoderStream;
  var init_MessageDecoderStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js"() {
      MessageDecoderStream = class {
        constructor(options) {
          __publicField(this, "options");
          this.options = options;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (const bytes of this.options.inputStream) {
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
          }
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js
  var MessageEncoderStream;
  var init_MessageEncoderStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js"() {
      MessageEncoderStream = class {
        constructor(options) {
          __publicField(this, "options");
          this.options = options;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (const msg of this.options.messageStream) {
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
          }
          if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
          }
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js
  var SmithyMessageDecoderStream;
  var init_SmithyMessageDecoderStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js"() {
      SmithyMessageDecoderStream = class {
        constructor(options) {
          __publicField(this, "options");
          this.options = options;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (const message of this.options.messageStream) {
            const deserialized = await this.options.deserializer(message);
            if (deserialized === void 0)
              continue;
            yield deserialized;
          }
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js
  var SmithyMessageEncoderStream;
  var init_SmithyMessageEncoderStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js"() {
      SmithyMessageEncoderStream = class {
        constructor(options) {
          __publicField(this, "options");
          this.options = options;
        }
        [Symbol.asyncIterator]() {
          return this.asyncIterator();
        }
        async *asyncIterator() {
          for await (const chunk of this.options.inputStream) {
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
          }
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js
  function getChunkedStream(source) {
    let currentMessageTotalLength = 0;
    let currentMessagePendingLength = 0;
    let currentMessage = null;
    let messageLengthBuffer = null;
    const allocateMessage = (size) => {
      if (typeof size !== "number") {
        throw new Error("Attempted to allocate an event message where size was not a number: " + size);
      }
      currentMessageTotalLength = size;
      currentMessagePendingLength = 4;
      currentMessage = new Uint8Array(size);
      const currentMessageView = new DataView(currentMessage.buffer);
      currentMessageView.setUint32(0, size, false);
    };
    const iterator = async function* () {
      const sourceIterator = source[Symbol.asyncIterator]();
      while (true) {
        const { value, done } = await sourceIterator.next();
        if (done) {
          if (!currentMessageTotalLength) {
            return;
          } else if (currentMessageTotalLength === currentMessagePendingLength) {
            yield currentMessage;
          } else {
            throw new Error("Truncated event message received.");
          }
          return;
        }
        const chunkLength = value.length;
        let currentOffset = 0;
        while (currentOffset < chunkLength) {
          if (!currentMessage) {
            const bytesRemaining = chunkLength - currentOffset;
            if (!messageLengthBuffer) {
              messageLengthBuffer = new Uint8Array(4);
            }
            const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
            messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
            currentMessagePendingLength += numBytesForTotal;
            currentOffset += numBytesForTotal;
            if (currentMessagePendingLength < 4) {
              break;
            }
            allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
            messageLengthBuffer = null;
          }
          const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
          currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
          currentMessagePendingLength += numBytesToWrite;
          currentOffset += numBytesToWrite;
          if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
            yield currentMessage;
            currentMessage = null;
            currentMessageTotalLength = 0;
            currentMessagePendingLength = 0;
          }
        }
      }
    };
    return {
      [Symbol.asyncIterator]: iterator
    };
  }
  var init_getChunkedStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js
  function getUnmarshalledStream(source, options) {
    const messageUnmarshaller = getMessageUnmarshaller(options.deserializer, options.toUtf8);
    return {
      [Symbol.asyncIterator]: async function* () {
        for await (const chunk of source) {
          const message = options.eventStreamCodec.decode(chunk);
          const type = await messageUnmarshaller(message);
          if (type === void 0)
            continue;
          yield type;
        }
      }
    };
  }
  function getMessageUnmarshaller(deserializer, toUtf82) {
    return async function(message) {
      const { value: messageType } = message.headers[":message-type"];
      if (messageType === "error") {
        const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
        unmodeledError.name = message.headers[":error-code"].value;
        throw unmodeledError;
      } else if (messageType === "exception") {
        const code = message.headers[":exception-type"].value;
        const exception = { [code]: message };
        const deserializedException = await deserializer(exception);
        if (deserializedException.$unknown) {
          const error = new Error(toUtf82(message.body));
          error.name = code;
          throw error;
        }
        throw deserializedException[code];
      } else if (messageType === "event") {
        const event = {
          [message.headers[":event-type"].value]: message
        };
        const deserialized = await deserializer(event);
        if (deserialized.$unknown)
          return;
        return deserialized;
      } else {
        throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
      }
    };
  }
  var init_getUnmarshalledStream = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js
  var EventStreamMarshaller, eventStreamSerdeProvider;
  var init_EventStreamMarshaller = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js"() {
      init_EventStreamCodec();
      init_MessageDecoderStream();
      init_MessageEncoderStream();
      init_SmithyMessageDecoderStream();
      init_SmithyMessageEncoderStream();
      init_getChunkedStream();
      init_getUnmarshalledStream();
      EventStreamMarshaller = class {
        constructor({ utf8Encoder, utf8Decoder }) {
          __publicField(this, "eventStreamCodec");
          __publicField(this, "utfEncoder");
          this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
          this.utfEncoder = utf8Encoder;
        }
        deserialize(body, deserializer) {
          const inputStream = getChunkedStream(body);
          return new SmithyMessageDecoderStream({
            messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
            deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
          });
        }
        serialize(inputStream, serializer) {
          return new MessageEncoderStream({
            messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
            encoder: this.eventStreamCodec,
            includeEndFrame: true
          });
        }
      };
      eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js
  var readableStreamToIterable, iterableToReadableStream;
  var init_utils = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js"() {
      readableStreamToIterable = (readableStream) => ({
        [Symbol.asyncIterator]: async function* () {
          const reader = readableStream.getReader();
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done)
                return;
              yield value;
            }
          } finally {
            reader.releaseLock();
          }
        }
      });
      iterableToReadableStream = (asyncIterable) => {
        const iterator = asyncIterable[Symbol.asyncIterator]();
        return new ReadableStream({
          async pull(controller) {
            const { done, value } = await iterator.next();
            if (done) {
              return controller.close();
            }
            controller.enqueue(value);
          }
        });
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.browser.js
  var EventStreamMarshaller2, isReadableStream2, eventStreamSerdeProvider2;
  var init_EventStreamMarshaller_browser = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.browser.js"() {
      init_EventStreamMarshaller();
      init_utils();
      EventStreamMarshaller2 = class {
        constructor({ utf8Encoder, utf8Decoder }) {
          __publicField(this, "universalMarshaller");
          this.universalMarshaller = new EventStreamMarshaller({
            utf8Decoder,
            utf8Encoder
          });
        }
        deserialize(body, deserializer) {
          const bodyIterable = isReadableStream2(body) ? readableStreamToIterable(body) : body;
          return this.universalMarshaller.deserialize(bodyIterable, deserializer);
        }
        serialize(input, serializer) {
          const serializedIterable = this.universalMarshaller.serialize(input, serializer);
          return typeof ReadableStream === "function" ? iterableToReadableStream(serializedIterable) : serializedIterable;
        }
      };
      isReadableStream2 = (body) => typeof ReadableStream === "function" && body instanceof ReadableStream;
      eventStreamSerdeProvider2 = (options) => new EventStreamMarshaller2(options);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js
  var resolveEventStreamSerdeConfig;
  var init_EventStreamSerdeConfig = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js"() {
      resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
        eventStreamMarshaller: input.eventStreamSerdeProvider(input)
      });
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
  var EventStreamSerde;
  var init_EventStreamSerde = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
      init_index_browser2();
      EventStreamSerde = class {
        constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
          __publicField(this, "marshaller");
          __publicField(this, "serializer");
          __publicField(this, "deserializer");
          __publicField(this, "serdeContext");
          __publicField(this, "defaultContentType");
          this.marshaller = marshaller;
          this.serializer = serializer;
          this.deserializer = deserializer;
          this.serdeContext = serdeContext;
          this.defaultContentType = defaultContentType;
        }
        async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
          const marshaller = this.marshaller;
          const eventStreamMember = requestSchema.getEventStreamMember();
          const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
          const serializer = this.serializer;
          const defaultContentType = this.defaultContentType;
          const initialRequestMarker = Symbol("initialRequestMarker");
          const eventStreamIterable = {
            async *[Symbol.asyncIterator]() {
              if (initialRequest) {
                const headers = {
                  ":event-type": { type: "string", value: "initial-request" },
                  ":message-type": { type: "string", value: "event" },
                  ":content-type": { type: "string", value: defaultContentType }
                };
                serializer.write(requestSchema, initialRequest);
                const body = serializer.flush();
                yield {
                  [initialRequestMarker]: true,
                  headers,
                  body
                };
              }
              for await (const page of eventStream) {
                yield page;
              }
            }
          };
          return marshaller.serialize(eventStreamIterable, (event) => {
            if (event[initialRequestMarker]) {
              return {
                headers: event.headers,
                body: event.body
              };
            }
            let unionMember = "";
            for (const key in event) {
              if (key !== "__type") {
                unionMember = key;
                break;
              }
            }
            const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
            const headers = {
              ":event-type": { type: "string", value: eventType },
              ":message-type": { type: "string", value: "event" },
              ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType },
              ...additionalHeaders
            };
            return {
              headers,
              body
            };
          });
        }
        async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
          const marshaller = this.marshaller;
          const eventStreamMember = responseSchema.getEventStreamMember();
          const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
          const memberSchemas = unionSchema.getMemberSchemas();
          const initialResponseMarker = Symbol("initialResponseMarker");
          const asyncIterable = marshaller.deserialize(response.body, async (event) => {
            let unionMember = "";
            for (const key in event) {
              if (key !== "__type") {
                unionMember = key;
                break;
              }
            }
            const body = event[unionMember].body;
            if (unionMember === "initial-response") {
              const dataObject = await this.deserializer.read(responseSchema, body);
              delete dataObject[eventStreamMember];
              return {
                [initialResponseMarker]: true,
                ...dataObject
              };
            } else if (unionMember in memberSchemas) {
              const eventStreamSchema = memberSchemas[unionMember];
              if (eventStreamSchema.isStructSchema()) {
                const out = {};
                let hasBindings = false;
                for (const [name, member2] of eventStreamSchema.structIterator()) {
                  const { eventHeader, eventPayload } = member2.getMergedTraits();
                  hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                  if (eventPayload) {
                    if (member2.isBlobSchema()) {
                      out[name] = body;
                    } else if (member2.isStringSchema()) {
                      out[name] = (this.serdeContext?.utf8Encoder ?? toUtf8)(body);
                    } else if (member2.isStructSchema()) {
                      out[name] = await this.deserializer.read(member2, body);
                    }
                  } else if (eventHeader) {
                    const value = event[unionMember].headers[name]?.value;
                    if (value != null) {
                      if (member2.isNumericSchema()) {
                        if (value && typeof value === "object" && "bytes" in value) {
                          out[name] = BigInt(value.toString());
                        } else {
                          out[name] = Number(value);
                        }
                      } else {
                        out[name] = value;
                      }
                    }
                  }
                }
                if (hasBindings) {
                  return {
                    [unionMember]: out
                  };
                }
                if (body.byteLength === 0) {
                  return {
                    [unionMember]: {}
                  };
                }
              }
              return {
                [unionMember]: await this.deserializer.read(eventStreamSchema, body)
              };
            } else {
              return {
                $unknown: event
              };
            }
          });
          const asyncIterator = asyncIterable[Symbol.asyncIterator]();
          const firstEvent = await asyncIterator.next();
          if (firstEvent.done) {
            return asyncIterable;
          }
          if (firstEvent.value?.[initialResponseMarker]) {
            if (!responseSchema) {
              throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
            }
            for (const key in firstEvent.value) {
              initialResponseContainer[key] = firstEvent.value[key];
            }
          }
          return {
            async *[Symbol.asyncIterator]() {
              if (!firstEvent?.value?.[initialResponseMarker]) {
                yield firstEvent.value;
              }
              while (true) {
                const { done, value } = await asyncIterator.next();
                if (done) {
                  break;
                }
                yield value;
              }
            }
          };
        }
        writeEventBody(unionMember, unionSchema, event) {
          const serializer = this.serializer;
          let eventType = unionMember;
          let explicitPayloadMember = null;
          let explicitPayloadContentType;
          const isKnownSchema = (() => {
            const struct = unionSchema.getSchema();
            return struct[4].includes(unionMember);
          })();
          const additionalHeaders = {};
          if (!isKnownSchema) {
            const [type, value] = event[unionMember];
            eventType = type;
            serializer.write(15, value);
          } else {
            const eventSchema = unionSchema.getMemberSchema(unionMember);
            if (eventSchema.isStructSchema()) {
              for (const [memberName, memberSchema] of eventSchema.structIterator()) {
                const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
                if (eventPayload) {
                  explicitPayloadMember = memberName;
                } else if (eventHeader) {
                  const value = event[unionMember][memberName];
                  let type = "binary";
                  if (memberSchema.isNumericSchema()) {
                    if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                      type = "integer";
                    } else {
                      type = "long";
                    }
                  } else if (memberSchema.isTimestampSchema()) {
                    type = "timestamp";
                  } else if (memberSchema.isStringSchema()) {
                    type = "string";
                  } else if (memberSchema.isBooleanSchema()) {
                    type = "boolean";
                  }
                  if (value != null) {
                    additionalHeaders[memberName] = {
                      type,
                      value
                    };
                    delete event[unionMember][memberName];
                  }
                }
              }
              if (explicitPayloadMember !== null) {
                const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
                if (payloadSchema.isBlobSchema()) {
                  explicitPayloadContentType = "application/octet-stream";
                } else if (payloadSchema.isStringSchema()) {
                  explicitPayloadContentType = "text/plain";
                }
                serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
              } else {
                serializer.write(eventSchema, event[unionMember]);
              }
            } else if (eventSchema.isUnitSchema()) {
              serializer.write(eventSchema, {});
            } else {
              throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            }
          }
          const messageSerialization = serializer.flush() ?? new Uint8Array();
          const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? fromUtf8)(messageSerialization) : messageSerialization;
          return {
            body,
            eventType,
            explicitPayloadContentType,
            additionalHeaders
          };
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/event-streams/index.browser.js
  var index_browser_exports = {};
  __export(index_browser_exports, {
    EventStreamCodec: () => EventStreamCodec,
    EventStreamMarshaller: () => EventStreamMarshaller2,
    EventStreamSerde: () => EventStreamSerde,
    HeaderMarshaller: () => HeaderMarshaller,
    Int64: () => Int64,
    MessageDecoderStream: () => MessageDecoderStream,
    MessageEncoderStream: () => MessageEncoderStream,
    SmithyMessageDecoderStream: () => SmithyMessageDecoderStream,
    SmithyMessageEncoderStream: () => SmithyMessageEncoderStream,
    UniversalEventStreamMarshaller: () => EventStreamMarshaller,
    eventStreamSerdeProvider: () => eventStreamSerdeProvider2,
    getChunkedStream: () => getChunkedStream,
    getMessageUnmarshaller: () => getMessageUnmarshaller,
    getUnmarshalledStream: () => getUnmarshalledStream,
    iterableToReadableStream: () => iterableToReadableStream,
    readableStreamToIterable: () => readableStreamToIterable,
    resolveEventStreamSerdeConfig: () => resolveEventStreamSerdeConfig,
    universalEventStreamSerdeProvider: () => eventStreamSerdeProvider
  });
  var init_index_browser3 = __esm({
    "node_modules/@smithy/core/dist-es/submodules/event-streams/index.browser.js"() {
      init_EventStreamCodec();
      init_HeaderMarshaller();
      init_Int64();
      init_MessageDecoderStream();
      init_MessageEncoderStream();
      init_SmithyMessageDecoderStream();
      init_SmithyMessageEncoderStream();
      init_EventStreamMarshaller_browser();
      init_utils();
      init_EventStreamMarshaller();
      init_getChunkedStream();
      init_getUnmarshalledStream();
      init_EventStreamSerdeConfig();
      init_EventStreamSerde();
    }
  });

  // src/agent-client.js
  var agent_client_exports = {};
  __export(agent_client_exports, {
    configure: () => configure,
    invoke: () => invoke,
    isSignedIn: () => isSignedIn,
    signIn: () => signIn,
    signOut: () => signOut
  });

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
  function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
      credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
  }

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/isStreamingPayload/isStreamingPayload.browser.js
  var isStreamingPayload = (request) => request?.body instanceof ReadableStream;

  // node_modules/@smithy/core/dist-es/submodules/client/middleware-stack/MiddlewareStack.js
  var getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
      _aliases.push(name);
    }
    if (aliases) {
      for (const alias of aliases) {
        _aliases.push(alias);
      }
    }
    return _aliases;
  };
  var getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
  };
  var constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = /* @__PURE__ */ new Set();
    const sort = (entries) => entries.sort((a3, b3) => stepWeights[b3.step] - stepWeights[a3.step] || priorityWeights[b3.priority || "normal"] - priorityWeights[a3.priority || "normal"]);
    const removeByName = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        const aliases = getAllAliases(entry.name, entry.aliases);
        if (aliases.includes(toRemove)) {
          isRemoved = true;
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const removeByReference = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.middleware === toRemove) {
          isRemoved = true;
          for (const alias of getAllAliases(entry.name, entry.aliases)) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const cloneTo = (toStack) => {
      absoluteEntries.forEach((entry) => {
        toStack.add(entry.middleware, { ...entry });
      });
      relativeEntries.forEach((entry) => {
        toStack.addRelativeTo(entry.middleware, { ...entry });
      });
      toStack.identifyOnResolve?.(stack.identifyOnResolve());
      return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
      const expandedMiddlewareList = [];
      from.before.forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      expandedMiddlewareList.push(from);
      from.after.reverse().forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
      const normalizedAbsoluteEntries = [];
      const normalizedRelativeEntries = [];
      const normalizedEntriesNameMap = {};
      absoluteEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedAbsoluteEntries.push(normalizedEntry);
      });
      relativeEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedRelativeEntries.push(normalizedEntry);
      });
      normalizedRelativeEntries.forEach((entry) => {
        if (entry.toMiddleware) {
          const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
          if (toMiddleware === void 0) {
            if (debug) {
              return;
            }
            throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
          }
          if (entry.relation === "after") {
            toMiddleware.after.push(entry);
          }
          if (entry.relation === "before") {
            toMiddleware.before.push(entry);
          }
        }
      });
      const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
        wholeList.push(...expandedMiddlewareList);
        return wholeList;
      }, []);
      return mainChain;
    };
    const stack = {
      add: (middleware, options = {}) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          step: "initialize",
          priority: "normal",
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = absoluteEntries[toOverrideIndex];
              if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
              }
              absoluteEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        absoluteEntries.push(entry);
      },
      addRelativeTo: (middleware, options) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = relativeEntries[toOverrideIndex];
              if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
              }
              relativeEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        relativeEntries.push(entry);
      },
      clone: () => cloneTo(constructStack()),
      use: (plugin) => {
        plugin.applyToStack(stack);
      },
      remove: (toRemove) => {
        if (typeof toRemove === "string")
          return removeByName(toRemove);
        else
          return removeByReference(toRemove);
      },
      removeByTag: (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const { tags, name, aliases: _aliases } = entry;
          if (tags && tags.includes(toRemove)) {
            const aliases = getAllAliases(name, _aliases);
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            isRemoved = true;
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      },
      concat: (from) => {
        const cloned = cloneTo(constructStack());
        cloned.use(from);
        cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
        return cloned;
      },
      applyToStack: cloneTo,
      identify: () => {
        return getMiddlewareList(true).map((mw) => {
          const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
          return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
        });
      },
      identifyOnResolve(toggle) {
        if (typeof toggle === "boolean")
          identifyOnResolve = toggle;
        return identifyOnResolve;
      },
      resolve: (handler, context) => {
        for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
          handler = middleware(handler, context);
        }
        if (identifyOnResolve) {
          console.log(stack.identify());
        }
        return handler;
      }
    };
    return stack;
  };
  var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  };
  var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
  };

  // node_modules/@smithy/core/dist-es/submodules/client/index.js
  init_transport();
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/client/invalid-dependency/invalidProvider.js
  var invalidProvider = (message) => () => Promise.reject(message);

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/client.js
  var Client = class {
    constructor(config) {
      __publicField(this, "config");
      __publicField(this, "middlewareStack", constructStack());
      __publicField(this, "initConfig");
      __publicField(this, "handlers");
      this.config = config;
      const { protocol, protocolSettings } = config;
      if (protocolSettings) {
        if (typeof protocol === "function") {
          config.protocol = new protocol(protocolSettings);
        }
      }
    }
    send(command, optionsOrCb, cb) {
      const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
      const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
      const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
      let handler;
      if (useHandlerCache) {
        if (!this.handlers) {
          this.handlers = /* @__PURE__ */ new WeakMap();
        }
        const handlers = this.handlers;
        if (handlers.has(command.constructor)) {
          handler = handlers.get(command.constructor);
        } else {
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          handlers.set(command.constructor, handler);
        }
      } else {
        delete this.handlers;
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
      }
      if (callback) {
        handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
        });
      } else {
        return handler(command).then((result) => result.output);
      }
    }
    destroy() {
      this.config?.requestHandler?.destroy?.();
      delete this.handlers;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/command.js
  init_dist_es();

  // node_modules/@smithy/core/dist-es/submodules/schema/deref.js
  var deref = (schemaRef) => {
    if (typeof schemaRef === "function") {
      return schemaRef();
    }
    return schemaRef;
  };

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
  var operation = (namespace, name, traits, input, output) => ({
    name,
    namespace,
    traits,
    input,
    output
  });

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
  var schemaDeserializationMiddleware = (config) => (next, context) => async (args) => {
    const { response } = await next(args);
    const { operationSchema } = getSmithyContext(context);
    const [, ns, n, t, i3, o] = operationSchema ?? [];
    try {
      const parsed = await config.protocol.deserializeResponse(operation(ns, n, t, i3, o), {
        ...config,
        ...context
      }, response);
      return {
        response,
        output: parsed
      };
    } catch (error) {
      Object.defineProperty(error, "$response", {
        value: response,
        enumerable: false,
        writable: false,
        configurable: false
      });
      if (!("$metadata" in error)) {
        const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        try {
          error.message += "\n  " + hint;
        } catch (e3) {
          if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
            console.warn(hint);
          } else {
            context.logger?.warn?.(hint);
          }
        }
        if (typeof error.$responseBodyText !== "undefined") {
          if (error.$response) {
            error.$response.body = error.$responseBodyText;
          }
        }
        try {
          if (HttpResponse.isInstance(response)) {
            const { headers = {}, statusCode } = response;
            const headerEntries = Object.entries(headers);
            error.$metadata = {
              httpStatusCode: statusCode,
              requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
              extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
              cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
            };
          }
        } catch (e3) {
        }
      }
      throw error;
    }
  };
  var findHeader = (pattern, headers) => {
    return (headers.find(([k3]) => {
      return k3.match(pattern);
    }) || [void 0, void 0])[1];
  };

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
  init_transport();
  var schemaSerializationMiddleware = (config) => (next, context) => async (args) => {
    const { operationSchema } = getSmithyContext(context);
    const [, ns, n, t, i3, o] = operationSchema ?? [];
    const endpoint = context.endpointV2 ? async () => toEndpointV1(context.endpointV2) : config.endpoint;
    const request = await config.protocol.serializeRequest(operation(ns, n, t, i3, o), args.input, {
      ...config,
      ...context,
      endpoint
    });
    return next({
      ...args,
      request
    });
  };

  // node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
  var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true
  };
  var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };
  function getSchemaSerdePlugin(config) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
        commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
        config.protocol.setSerdeContext(config);
      }
    };
  }

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
  var traitsCache = [];
  function translateTraits(indicator) {
    if (typeof indicator === "object") {
      return indicator;
    }
    indicator = indicator | 0;
    if (traitsCache[indicator]) {
      return traitsCache[indicator];
    }
    const traits = {};
    let i3 = 0;
    for (const trait of [
      "httpLabel",
      "idempotent",
      "idempotencyToken",
      "sensitive",
      "httpPayload",
      "httpResponseCode",
      "httpQueryParams"
    ]) {
      if ((indicator >> i3++ & 1) === 1) {
        traits[trait] = 1;
      }
    }
    return traitsCache[indicator] = traits;
  }

  // node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
  var anno = {
    it: Symbol.for("@smithy/nor-struct-it"),
    ns: Symbol.for("@smithy/ns")
  };
  var simpleSchemaCacheN = [];
  var simpleSchemaCacheS = {};
  var _NormalizedSchema = class _NormalizedSchema {
    constructor(ref, memberName) {
      __publicField(this, "ref");
      __publicField(this, "memberName");
      __publicField(this, "symbol", _NormalizedSchema.symbol);
      __publicField(this, "name");
      __publicField(this, "schema");
      __publicField(this, "_isMemberSchema");
      __publicField(this, "traits");
      __publicField(this, "memberTraits");
      __publicField(this, "normalizedTraits");
      this.ref = ref;
      this.memberName = memberName;
      const traitStack = [];
      let _ref = ref;
      let schema = ref;
      this._isMemberSchema = false;
      while (isMemberSchema(_ref)) {
        traitStack.push(_ref[1]);
        _ref = _ref[0];
        schema = deref(_ref);
        this._isMemberSchema = true;
      }
      if (traitStack.length > 0) {
        this.memberTraits = {};
        for (let i3 = traitStack.length - 1; i3 >= 0; --i3) {
          const traitSet = traitStack[i3];
          Object.assign(this.memberTraits, translateTraits(traitSet));
        }
      } else {
        this.memberTraits = 0;
      }
      if (schema instanceof _NormalizedSchema) {
        const computedMemberTraits = this.memberTraits;
        Object.assign(this, schema);
        this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
        this.normalizedTraits = void 0;
        this.memberName = memberName ?? schema.memberName;
        return;
      }
      this.schema = deref(schema);
      if (isStaticSchema(this.schema)) {
        this.name = `${this.schema[1]}#${this.schema[2]}`;
        this.traits = this.schema[3];
      } else {
        this.name = this.memberName ?? String(schema);
        this.traits = 0;
      }
      if (this._isMemberSchema && !memberName) {
        throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
      }
    }
    static [Symbol.hasInstance](lhs) {
      const isPrototype = this.prototype.isPrototypeOf(lhs);
      if (!isPrototype && typeof lhs === "object" && lhs !== null) {
        const ns = lhs;
        return ns.symbol === this.symbol;
      }
      return isPrototype;
    }
    static of(ref) {
      const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
      if (typeof ref === "number") {
        if (simpleSchemaCacheN[ref]) {
          return simpleSchemaCacheN[ref];
        }
      } else if (typeof ref === "string") {
        if (simpleSchemaCacheS[ref]) {
          return simpleSchemaCacheS[ref];
        }
      } else if (keyAble) {
        if (ref[anno.ns]) {
          return ref[anno.ns];
        }
      }
      const sc = deref(ref);
      if (sc instanceof _NormalizedSchema) {
        return sc;
      }
      if (isMemberSchema(sc)) {
        const [ns2, traits] = sc;
        if (ns2 instanceof _NormalizedSchema) {
          Object.assign(ns2.getMergedTraits(), translateTraits(traits));
          return ns2;
        }
        throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
      }
      const ns = new _NormalizedSchema(sc);
      if (keyAble) {
        return ref[anno.ns] = ns;
      }
      if (typeof sc === "string") {
        return simpleSchemaCacheS[sc] = ns;
      }
      if (typeof sc === "number") {
        return simpleSchemaCacheN[sc] = ns;
      }
      return ns;
    }
    getSchema() {
      const sc = this.schema;
      if (Array.isArray(sc) && sc[0] === 0) {
        return sc[4];
      }
      return sc;
    }
    getName(withNamespace = false) {
      const { name } = this;
      const short = !withNamespace && name && name.includes("#");
      return short ? name.split("#")[1] : name || void 0;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
    }
    isMapSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
    }
    isStructSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      const id = sc[0];
      return id === 3 || id === -3 || id === 4;
    }
    isUnionSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      return sc[0] === 4;
    }
    isBlobSchema() {
      const sc = this.getSchema();
      return sc === 21 || sc === 42;
    }
    isTimestampSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" && sc >= 4 && sc <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      const { streaming } = this.getMergedTraits();
      return !!streaming || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
      return this.normalizedTraits ?? (this.normalizedTraits = {
        ...this.getOwnTraits(),
        ...this.getMemberTraits()
      });
    }
    getMemberTraits() {
      return translateTraits(this.memberTraits);
    }
    getOwnTraits() {
      return translateTraits(this.traits);
    }
    getKeySchema() {
      const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!isDoc && !isMap) {
        throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
      }
      const schema = this.getSchema();
      const memberSchema = isDoc ? 15 : schema[4] ?? 0;
      return member([memberSchema, 0], "key");
    }
    getValueSchema() {
      const sc = this.getSchema();
      const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
      const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
      if (memberSchema != null) {
        return member([memberSchema, 0], isMap ? "value" : "member");
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
    }
    getMemberSchema(memberName) {
      const struct = this.getSchema();
      if (this.isStructSchema() && struct[4].includes(memberName)) {
        const i3 = struct[4].indexOf(memberName);
        const memberSchema = struct[5][i3];
        return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
      }
      if (this.isDocumentSchema()) {
        return member([15, 0], memberName);
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
    }
    getMemberSchemas() {
      const buffer = {};
      try {
        for (const [k3, v] of this.structIterator()) {
          buffer[k3] = v;
        }
      } catch (ignored) {
      }
      return buffer;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (const [memberName, memberSchema] of this.structIterator()) {
          if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
            return memberName;
          }
        }
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) {
        return;
      }
      if (!this.isStructSchema()) {
        throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
      }
      const struct = this.getSchema();
      const z = struct[4].length;
      let it = struct[anno.it];
      if (it && z === it.length) {
        yield* it;
        return;
      }
      it = Array(z);
      for (let i3 = 0; i3 < z; ++i3) {
        const k3 = struct[4][i3];
        const v = member([struct[5][i3], 0], k3);
        yield it[i3] = [k3, v];
      }
      struct[anno.it] = it;
    }
  };
  __publicField(_NormalizedSchema, "symbol", Symbol.for("@smithy/nor"));
  var NormalizedSchema = _NormalizedSchema;
  function member(memberSchema, memberName) {
    if (memberSchema instanceof NormalizedSchema) {
      return Object.assign(memberSchema, {
        memberName,
        _isMemberSchema: true
      });
    }
    const internalCtorAccess = NormalizedSchema;
    return new internalCtorAccess(memberSchema, memberName);
  }
  var isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
  var isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;

  // node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
  var _TypeRegistry = class _TypeRegistry {
    constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
      __publicField(this, "namespace");
      __publicField(this, "schemas");
      __publicField(this, "exceptions");
      this.namespace = namespace;
      this.schemas = schemas;
      this.exceptions = exceptions;
    }
    static for(namespace) {
      if (!_TypeRegistry.registries.has(namespace)) {
        _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
      }
      return _TypeRegistry.registries.get(namespace);
    }
    copyFrom(other) {
      const { schemas, exceptions } = this;
      for (const [k3, v] of other.schemas) {
        if (!schemas.has(k3)) {
          schemas.set(k3, v);
        }
      }
      for (const [k3, v] of other.exceptions) {
        if (!exceptions.has(k3)) {
          exceptions.set(k3, v);
        }
      }
    }
    register(shapeId, schema) {
      const qualifiedName = this.normalizeShapeId(shapeId);
      for (const r3 of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
        r3.schemas.set(qualifiedName, schema);
      }
    }
    getSchema(shapeId) {
      const id = this.normalizeShapeId(shapeId);
      if (!this.schemas.has(id)) {
        if (!shapeId.includes("#")) {
          const suffix = "#" + shapeId;
          const candidates = [];
          for (const [shapeId2, schema] of this.schemas.entries()) {
            if (shapeId2.endsWith(suffix)) {
              candidates.push(schema);
            }
          }
          if (candidates.length === 1) {
            return candidates[0];
          }
        }
        throw new Error(`@smithy/core/schema - schema not found for ${id}`);
      }
      return this.schemas.get(id);
    }
    registerError(es, ctor) {
      const $error = es;
      const ns = $error[1];
      for (const r3 of [this, _TypeRegistry.for(ns)]) {
        r3.schemas.set(ns + "#" + $error[2], $error);
        r3.exceptions.set($error, ctor);
      }
    }
    getErrorCtor(es) {
      const $error = es;
      if (this.exceptions.has($error)) {
        return this.exceptions.get($error);
      }
      const registry = _TypeRegistry.for($error[1]);
      return registry.exceptions.get($error);
    }
    getBaseException() {
      for (const exceptionKey of this.exceptions.keys()) {
        if (Array.isArray(exceptionKey)) {
          const [, ns, name] = exceptionKey;
          const id = ns + "#" + name;
          if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
            return exceptionKey;
          }
        }
      }
      return void 0;
    }
    find(predicate) {
      for (const schema of this.schemas.values()) {
        if (predicate(schema)) {
          return schema;
        }
      }
      return void 0;
    }
    clear() {
      this.schemas.clear();
      this.exceptions.clear();
    }
    normalizeShapeId(shapeId) {
      if (shapeId.includes("#")) {
        return shapeId;
      }
      return this.namespace + "#" + shapeId;
    }
  };
  __publicField(_TypeRegistry, "registries", /* @__PURE__ */ new Map());
  var TypeRegistry = _TypeRegistry;

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/schemaLogFilter.js
  var SENSITIVE_STRING = "***SensitiveInformation***";
  function schemaLogFilter(schema, data) {
    if (data == null) {
      return data;
    }
    const ns = NormalizedSchema.of(schema);
    if (ns.getMergedTraits().sensitive) {
      return SENSITIVE_STRING;
    }
    if (ns.isListSchema()) {
      const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING;
      }
    } else if (ns.isMapSchema()) {
      const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING;
      }
    } else if (ns.isStructSchema() && typeof data === "object") {
      const object = data;
      const newObject = {};
      for (const [member2, memberNs] of ns.structIterator()) {
        if (object[member2] != null) {
          newObject[member2] = schemaLogFilter(memberNs, object[member2]);
        }
      }
      return newObject;
    }
    return data;
  }

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/command.js
  var Command = class {
    constructor() {
      __publicField(this, "middlewareStack", constructStack());
      __publicField(this, "schema");
    }
    static classBuilder() {
      return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
      for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
        this.middlewareStack.use(mw);
      }
      const stack = clientStack.concat(this.middlewareStack);
      const { logger: logger2 } = configuration;
      const handlerExecutionContext = {
        logger: logger2,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        [SMITHY_CONTEXT_KEY]: {
          commandInstance: this,
          ...smithyContext
        },
        ...additionalContext
      };
      const { requestHandler } = configuration;
      let requestOptions = options ?? {};
      if (smithyContext.eventStream) {
        requestOptions = {
          isEventStream: true,
          ...requestOptions
        };
      }
      return stack.resolve((request) => requestHandler.handle(request.request, requestOptions), handlerExecutionContext);
    }
  };
  var ClassBuilder = class {
    constructor() {
      __publicField(this, "_init", () => {
      });
      __publicField(this, "_ep", {});
      __publicField(this, "_middlewareFn", () => []);
      __publicField(this, "_commandName", "");
      __publicField(this, "_clientName", "");
      __publicField(this, "_additionalContext", {});
      __publicField(this, "_smithyContext", {});
      __publicField(this, "_inputFilterSensitiveLog");
      __publicField(this, "_outputFilterSensitiveLog");
      __publicField(this, "_serializer", null);
      __publicField(this, "_deserializer", null);
      __publicField(this, "_operationSchema");
    }
    init(cb) {
      this._init = cb;
    }
    ep(endpointParameterInstructions) {
      this._ep = endpointParameterInstructions;
      return this;
    }
    m(middlewareSupplier) {
      this._middlewareFn = middlewareSupplier;
      return this;
    }
    s(service, operation2, smithyContext = {}) {
      this._smithyContext = {
        service,
        operation: operation2,
        ...smithyContext
      };
      return this;
    }
    c(additionalContext = {}) {
      this._additionalContext = additionalContext;
      return this;
    }
    n(clientName, commandName) {
      this._clientName = clientName;
      this._commandName = commandName;
      return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
      this._inputFilterSensitiveLog = inputFilter;
      this._outputFilterSensitiveLog = outputFilter;
      return this;
    }
    ser(serializer) {
      this._serializer = serializer;
      return this;
    }
    de(deserializer) {
      this._deserializer = deserializer;
      return this;
    }
    sc(operation2) {
      this._operationSchema = operation2;
      this._smithyContext.operationSchema = operation2;
      return this;
    }
    build() {
      const closure = this;
      let CommandRef;
      return CommandRef = class extends Command {
        constructor(...[input]) {
          super();
          __publicField(this, "input");
          __publicField(this, "serialize", closure._serializer);
          __publicField(this, "deserialize", closure._deserializer);
          this.input = input ?? {};
          closure._init(this);
          this.schema = closure._operationSchema;
        }
        static getEndpointParameterInstructions() {
          return closure._ep;
        }
        resolveMiddleware(stack, configuration, options) {
          const op = closure._operationSchema;
          const input = op?.[4] ?? op?.input;
          const output = op?.[5] ?? op?.output;
          return this.resolveMiddlewareWithContext(stack, configuration, options, {
            CommandCtor: CommandRef,
            middlewareFn: closure._middlewareFn,
            clientName: closure._clientName,
            commandName: closure._commandName,
            inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
            outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
            smithyContext: closure._smithyContext,
            additionalContext: closure._additionalContext
          });
        }
      };
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/exceptions.js
  var ServiceException = class _ServiceException extends Error {
    constructor(options) {
      super(options.message);
      __publicField(this, "$fault");
      __publicField(this, "$response");
      __publicField(this, "$retryable");
      __publicField(this, "$metadata");
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
      this.name = options.name;
      this.$fault = options.$fault;
      this.$metadata = options.$metadata;
    }
    static isInstance(value) {
      if (!value)
        return false;
      const candidate = value;
      return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
    }
    static [Symbol.hasInstance](instance) {
      if (!instance)
        return false;
      const candidate = instance;
      if (this === _ServiceException) {
        return _ServiceException.isInstance(instance);
      }
      if (_ServiceException.isInstance(instance)) {
        if (candidate.name && this.name) {
          return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
        }
        return this.prototype.isPrototypeOf(instance);
      }
      return false;
    }
  };
  var decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k3, v]) => {
      if (exception[k3] == void 0 || exception[k3] === "") {
        exception[k3] = v;
      }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/defaults-mode.js
  var loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
      case "standard":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "in-region":
        return {
          retryMode: "standard",
          connectionTimeout: 1100
        };
      case "cross-region":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "mobile":
        return {
          retryMode: "standard",
          connectionTimeout: 3e4
        };
      default:
        return {};
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/checksum.js
  init_dist_es();
  var knownAlgorithms = Object.values(AlgorithmId);
  var getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in AlgorithmId) {
      const algorithmId = AlgorithmId[id];
      if (runtimeConfig[algorithmId] === void 0) {
        continue;
      }
      checksumAlgorithms.push({
        algorithmId: () => algorithmId,
        checksumConstructor: () => runtimeConfig[algorithmId]
      });
    }
    for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
      checksumAlgorithms.push({
        algorithmId: () => id,
        checksumConstructor: () => ChecksumCtor
      });
    }
    return {
      addChecksumAlgorithm(algo) {
        runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
        const id = algo.algorithmId();
        const ctor = algo.checksumConstructor();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
        } else {
          runtimeConfig.checksumAlgorithms[id] = ctor;
        }
        checksumAlgorithms.push(algo);
      },
      checksumAlgorithms() {
        return checksumAlgorithms;
      }
    };
  };
  var resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
      const id = checksumAlgorithm.algorithmId();
      if (knownAlgorithms.includes(id)) {
        runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
      }
    });
    return runtimeConfig;
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/retry.js
  var getRetryConfiguration = (runtimeConfig) => {
    return {
      setRetryStrategy(retryStrategy) {
        runtimeConfig.retryStrategy = retryStrategy;
      },
      retryStrategy() {
        return runtimeConfig.retryStrategy;
      }
    };
  };
  var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/defaultExtensionConfiguration.js
  var getDefaultExtensionConfiguration = (runtimeConfig) => {
    return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
  };
  var resolveDefaultRuntimeConfig = (config) => {
    return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
  };

  // node_modules/@smithy/core/dist-es/submodules/client/smithy-client/NoOpLogger.js
  var NoOpLogger = class {
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
  init_index_browser2();
  var collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
      return Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
      return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return Uint8ArrayBlobAdapter.mutate(await fromContext);
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
  function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c3) {
      return "%" + c3.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
  init_index_browser2();
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
  var SerdeContext = class {
    constructor() {
      __publicField(this, "serdeContext");
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
  var HttpProtocol = class extends SerdeContext {
    constructor(options) {
      super();
      __publicField(this, "options");
      __publicField(this, "compositeErrorRegistry");
      this.options = options;
      this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
      for (const etr of options.errorTypeRegistries ?? []) {
        this.compositeErrorRegistry.copyFrom(etr);
      }
    }
    getRequestType() {
      return HttpRequest;
    }
    getResponseType() {
      return HttpResponse;
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
      this.serializer.setSerdeContext(serdeContext);
      this.deserializer.setSerdeContext(serdeContext);
      if (this.getPayloadCodec()) {
        this.getPayloadCodec().setSerdeContext(serdeContext);
      }
    }
    updateServiceEndpoint(request, endpoint) {
      if ("url" in endpoint) {
        request.protocol = endpoint.url.protocol;
        request.hostname = endpoint.url.hostname;
        request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
        request.path = endpoint.url.pathname;
        request.fragment = endpoint.url.hash || void 0;
        request.username = endpoint.url.username || void 0;
        request.password = endpoint.url.password || void 0;
        if (!request.query) {
          request.query = {};
        }
        for (const [k3, v] of endpoint.url.searchParams.entries()) {
          request.query[k3] = v;
        }
        if (endpoint.headers) {
          for (const name in endpoint.headers) {
            request.headers[name] = endpoint.headers[name].join(", ");
          }
        }
        return request;
      } else {
        request.protocol = endpoint.protocol;
        request.hostname = endpoint.hostname;
        request.port = endpoint.port ? Number(endpoint.port) : void 0;
        request.path = endpoint.path;
        request.query = {
          ...endpoint.query
        };
        if (endpoint.headers) {
          for (const name in endpoint.headers) {
            request.headers[name] = endpoint.headers[name];
          }
        }
        return request;
      }
    }
    setHostPrefix(request, operationSchema, input) {
      if (this.serdeContext?.disableHostPrefix) {
        return;
      }
      const inputNs = NormalizedSchema.of(operationSchema.input);
      const opTraits = translateTraits(operationSchema.traits ?? {});
      if (opTraits.endpoint) {
        let hostPrefix = opTraits.endpoint?.[0];
        if (typeof hostPrefix === "string") {
          for (const [name, member2] of inputNs.structIterator()) {
            if (!member2.getMergedTraits().hostLabel) {
              continue;
            }
            const replacement = input[name];
            if (typeof replacement !== "string") {
              throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
            }
            hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
          }
          request.hostname = hostPrefix + request.hostname;
        }
      }
    }
    deserializeMetadata(output) {
      return {
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      };
    }
    async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
      const eventStreamSerde = await this.loadEventStreamCapability();
      return eventStreamSerde.serializeEventStream({
        eventStream,
        requestSchema,
        initialRequest
      });
    }
    async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
      const eventStreamSerde = await this.loadEventStreamCapability();
      return eventStreamSerde.deserializeEventStream({
        response,
        responseSchema,
        initialResponseContainer
      });
    }
    async loadEventStreamCapability() {
      const { EventStreamSerde: EventStreamSerde2, eventStreamSerdeProvider: eventStreamSerdeProvider3 } = await Promise.resolve().then(() => (init_index_browser3(), index_browser_exports));
      const marshaller = this.resolveEventStreamMarshaller(eventStreamSerdeProvider3);
      return new EventStreamSerde2({
        marshaller,
        serializer: this.serializer,
        deserializer: this.deserializer,
        serdeContext: this.serdeContext,
        defaultContentType: this.getDefaultContentType()
      });
    }
    resolveEventStreamMarshaller(importedProvider) {
      const context = this.serdeContext;
      if (context.eventStreamMarshaller) {
        return context.eventStreamMarshaller;
      }
      return importedProvider(this.serdeContext);
    }
    getDefaultContentType() {
      throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(schema, context, response, arg4, arg5) {
      return [];
    }
    getEventStreamMarshaller() {
      const context = this.serdeContext;
      if (!context.eventStreamMarshaller) {
        throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      }
      return context.eventStreamMarshaller;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
  var HttpBindingProtocol = class extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
      const input = _input && typeof _input === "object" ? _input : {};
      const serializer = this.serializer;
      const query = {};
      const headers = {};
      const endpoint = await context.endpoint();
      const ns = NormalizedSchema.of(operationSchema?.input);
      const payloadMemberNames = [];
      const payloadMemberSchemas = [];
      let hasNonHttpBindingMember = false;
      let payload;
      const request = new HttpRequest({
        protocol: "",
        hostname: "",
        port: void 0,
        path: "",
        fragment: void 0,
        query,
        headers,
        body: void 0
      });
      if (endpoint) {
        this.updateServiceEndpoint(request, endpoint);
        this.setHostPrefix(request, operationSchema, input);
        const opTraits = translateTraits(operationSchema.traits);
        if (opTraits.http) {
          request.method = opTraits.http[0];
          const [path, search] = opTraits.http[1].split("?");
          if (request.path == "/") {
            request.path = path;
          } else {
            request.path += path;
          }
          const traitSearchParams = new URLSearchParams(search ?? "");
          for (const [key, value] of traitSearchParams) {
            query[key] = value;
          }
        }
      }
      for (const [memberName, memberNs] of ns.structIterator()) {
        const memberTraits = memberNs.getMergedTraits() ?? {};
        const inputMemberValue = input[memberName];
        if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
          if (memberTraits.httpLabel) {
            if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
              throw new Error(`No value provided for input HTTP label: ${memberName}.`);
            }
          }
          continue;
        }
        if (memberTraits.httpPayload) {
          const isStreaming = memberNs.isStreaming();
          if (isStreaming) {
            const isEventStream = memberNs.isStructSchema();
            if (isEventStream) {
              if (input[memberName]) {
                payload = await this.serializeEventStream({
                  eventStream: input[memberName],
                  requestSchema: ns
                });
              }
            } else {
              payload = inputMemberValue;
            }
          } else {
            serializer.write(memberNs, inputMemberValue);
            payload = serializer.flush();
          }
        } else if (memberTraits.httpLabel) {
          serializer.write(memberNs, inputMemberValue);
          const replacement = serializer.flush();
          if (request.path.includes(`{${memberName}+}`)) {
            request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
          } else if (request.path.includes(`{${memberName}}`)) {
            request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
          }
        } else if (memberTraits.httpHeader) {
          serializer.write(memberNs, inputMemberValue);
          headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
        } else if (typeof memberTraits.httpPrefixHeaders === "string") {
          for (const key in inputMemberValue) {
            const val = inputMemberValue[key];
            const amalgam = memberTraits.httpPrefixHeaders + key;
            serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
            headers[amalgam.toLowerCase()] = serializer.flush();
          }
        } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
          this.serializeQuery(memberNs, inputMemberValue, query);
        } else {
          hasNonHttpBindingMember = true;
          payloadMemberNames.push(memberName);
          payloadMemberSchemas.push(memberNs);
        }
      }
      if (hasNonHttpBindingMember && input) {
        const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
        const requiredMembers = ns.getSchema()[6];
        const payloadSchema = [
          3,
          namespace,
          name,
          ns.getMergedTraits(),
          payloadMemberNames,
          payloadMemberSchemas,
          void 0
        ];
        if (requiredMembers) {
          payloadSchema[6] = requiredMembers;
        } else {
          payloadSchema.pop();
        }
        serializer.write(payloadSchema, input);
        payload = serializer.flush();
      }
      request.headers = headers;
      request.query = query;
      request.body = payload;
      return request;
    }
    serializeQuery(ns, data, query) {
      const serializer = this.serializer;
      const traits = ns.getMergedTraits();
      if (traits.httpQueryParams) {
        for (const key in data) {
          if (!(key in query)) {
            const val = data[key];
            const valueSchema = ns.getValueSchema();
            Object.assign(valueSchema.getMergedTraits(), {
              ...traits,
              httpQuery: key,
              httpQueryParams: void 0
            });
            this.serializeQuery(valueSchema, val, query);
          }
        }
        return;
      }
      if (ns.isListSchema()) {
        const sparse = !!ns.getMergedTraits().sparse;
        const buffer = [];
        for (const item of data) {
          serializer.write([ns.getValueSchema(), traits], item);
          const serializable = serializer.flush();
          if (sparse || serializable !== void 0) {
            buffer.push(serializable);
          }
        }
        query[traits.httpQuery] = buffer;
      } else {
        serializer.write([ns, traits], data);
        query[traits.httpQuery] = serializer.flush();
      }
    }
    async deserializeResponse(operationSchema, context, response) {
      const deserializer = this.deserializer;
      const ns = NormalizedSchema.of(operationSchema.output);
      const dataObject = {};
      if (response.statusCode >= 300) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(15, bytes));
        }
        await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
      }
      for (const header in response.headers) {
        const value = response.headers[header];
        delete response.headers[header];
        response.headers[header.toLowerCase()] = value;
      }
      const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
      if (nonHttpBindingMembers.length) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          const dataFromBody = await deserializer.read(ns, bytes);
          for (const member2 of nonHttpBindingMembers) {
            if (dataFromBody[member2] != null) {
              dataObject[member2] = dataFromBody[member2];
            }
          }
        }
      } else if (nonHttpBindingMembers.discardResponseBody) {
        await collectBody(response.body, context);
      }
      dataObject.$metadata = this.deserializeMetadata(response);
      return dataObject;
    }
    async deserializeHttpMessage(schema, context, response, arg4, arg5) {
      let dataObject;
      if (arg4 instanceof Set) {
        dataObject = arg5;
      } else {
        dataObject = arg4;
      }
      let discardResponseBody = true;
      const deserializer = this.deserializer;
      const ns = NormalizedSchema.of(schema);
      const nonHttpBindingMembers = [];
      for (const [memberName, memberSchema] of ns.structIterator()) {
        const memberTraits = memberSchema.getMemberTraits();
        if (memberTraits.httpPayload) {
          discardResponseBody = false;
          const isStreaming = memberSchema.isStreaming();
          if (isStreaming) {
            const isEventStream = memberSchema.isStructSchema();
            if (isEventStream) {
              dataObject[memberName] = await this.deserializeEventStream({
                response,
                responseSchema: ns
              });
            } else {
              dataObject[memberName] = sdkStreamMixin(response.body);
            }
          } else if (response.body) {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
              dataObject[memberName] = await deserializer.read(memberSchema, bytes);
            }
          }
        } else if (memberTraits.httpHeader) {
          const key = String(memberTraits.httpHeader).toLowerCase();
          const value = response.headers[key];
          if (null != value) {
            if (memberSchema.isListSchema()) {
              const headerListValueSchema = memberSchema.getValueSchema();
              headerListValueSchema.getMergedTraits().httpHeader = key;
              let sections;
              if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                sections = splitEvery(value, ",", 2);
              } else {
                sections = splitHeader(value);
              }
              const list = [];
              for (const section of sections) {
                list.push(await deserializer.read(headerListValueSchema, section.trim()));
              }
              dataObject[memberName] = list;
            } else {
              dataObject[memberName] = await deserializer.read(memberSchema, value);
            }
          }
        } else if (memberTraits.httpPrefixHeaders !== void 0) {
          dataObject[memberName] = {};
          for (const header in response.headers) {
            if (header.startsWith(memberTraits.httpPrefixHeaders)) {
              const value = response.headers[header];
              const valueSchema = memberSchema.getValueSchema();
              valueSchema.getMergedTraits().httpHeader = header;
              dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
            }
          }
        } else if (memberTraits.httpResponseCode) {
          dataObject[memberName] = response.statusCode;
        } else {
          nonHttpBindingMembers.push(memberName);
        }
      }
      nonHttpBindingMembers.discardResponseBody = discardResponseBody;
      return nonHttpBindingMembers;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
  init_transport();
  var RpcProtocol = class extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
      const serializer = this.serializer;
      const query = {};
      const headers = {};
      const endpoint = await context.endpoint();
      const ns = NormalizedSchema.of(operationSchema?.input);
      const schema = ns.getSchema();
      let payload;
      const input = _input && typeof _input === "object" ? _input : {};
      const request = new HttpRequest({
        protocol: "",
        hostname: "",
        port: void 0,
        path: "/",
        fragment: void 0,
        query,
        headers,
        body: void 0
      });
      if (endpoint) {
        this.updateServiceEndpoint(request, endpoint);
        this.setHostPrefix(request, operationSchema, input);
      }
      if (input) {
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
          if (input[eventStreamMember]) {
            const initialRequest = {};
            for (const [memberName, memberSchema] of ns.structIterator()) {
              if (memberName !== eventStreamMember && input[memberName]) {
                serializer.write(memberSchema, input[memberName]);
                initialRequest[memberName] = serializer.flush();
              }
            }
            payload = await this.serializeEventStream({
              eventStream: input[eventStreamMember],
              requestSchema: ns,
              initialRequest
            });
          }
        } else {
          serializer.write(schema, input);
          payload = serializer.flush();
        }
      }
      request.headers = Object.assign(request.headers, headers);
      request.query = query;
      request.body = payload;
      request.method = "POST";
      return request;
    }
    async deserializeResponse(operationSchema, context, response) {
      const deserializer = this.deserializer;
      const ns = NormalizedSchema.of(operationSchema.output);
      const dataObject = {};
      if (response.statusCode >= 300) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(15, bytes));
        }
        await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
      }
      for (const header in response.headers) {
        const value = response.headers[header];
        delete response.headers[header];
        response.headers[header.toLowerCase()] = value;
      }
      const eventStreamMember = ns.getEventStreamMember();
      if (eventStreamMember) {
        dataObject[eventStreamMember] = await this.deserializeEventStream({
          response,
          responseSchema: ns,
          initialResponseContainer: dataObject
        });
      } else {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes));
        }
      }
      dataObject.$metadata = this.deserializeMetadata(response);
      return dataObject;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
  init_index_browser2();

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
  function determineTimestampFormat(ns, settings) {
    if (settings.timestampFormat.useTrait) {
      if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
        return ns.getSchema();
      }
    }
    const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
    const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
    return bindingFormat ?? settings.timestampFormat.default;
  }

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
  var FromStringShapeDeserializer = class extends SerdeContext {
    constructor(settings) {
      super();
      __publicField(this, "settings");
      this.settings = settings;
    }
    read(_schema, data) {
      const ns = NormalizedSchema.of(_schema);
      if (ns.isListSchema()) {
        return splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
      }
      if (ns.isBlobSchema()) {
        return (this.serdeContext?.base64Decoder ?? fromBase64)(data);
      }
      if (ns.isTimestampSchema()) {
        const format2 = determineTimestampFormat(ns, this.settings);
        switch (format2) {
          case 5:
            return _parseRfc3339DateTimeWithOffset(data);
          case 6:
            return _parseRfc7231DateTime(data);
          case 7:
            return _parseEpochTimestamp(data);
          default:
            console.warn("Missing timestamp format, parsing value with Date constructor:", data);
            return new Date(data);
        }
      }
      if (ns.isStringSchema()) {
        const mediaType = ns.getMergedTraits().mediaType;
        let intermediateValue = data;
        if (mediaType) {
          if (ns.getMergedTraits().httpHeader) {
            intermediateValue = this.base64ToUtf8(intermediateValue);
          }
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            intermediateValue = LazyJsonString.from(intermediateValue);
          }
          return intermediateValue;
        }
      }
      if (ns.isNumericSchema()) {
        return Number(data);
      }
      if (ns.isBigIntegerSchema()) {
        return BigInt(data);
      }
      if (ns.isBigDecimalSchema()) {
        return new NumericValue(data, "bigDecimal");
      }
      if (ns.isBooleanSchema()) {
        return String(data).toLowerCase() === "true";
      }
      return data;
    }
    base64ToUtf8(base64String) {
      return (this.serdeContext?.utf8Encoder ?? toUtf8)((this.serdeContext?.base64Decoder ?? fromBase64)(base64String));
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
  init_index_browser2();
  var HttpInterceptingShapeDeserializer = class extends SerdeContext {
    constructor(codecDeserializer, codecSettings) {
      super();
      __publicField(this, "codecDeserializer");
      __publicField(this, "stringDeserializer");
      this.codecDeserializer = codecDeserializer;
      this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
    }
    setSerdeContext(serdeContext) {
      this.stringDeserializer.setSerdeContext(serdeContext);
      this.codecDeserializer.setSerdeContext(serdeContext);
      this.serdeContext = serdeContext;
    }
    read(schema, data) {
      const ns = NormalizedSchema.of(schema);
      const traits = ns.getMergedTraits();
      const toString = this.serdeContext?.utf8Encoder ?? toUtf8;
      if (traits.httpHeader || traits.httpResponseCode) {
        return this.stringDeserializer.read(ns, toString(data));
      }
      if (traits.httpPayload) {
        if (ns.isBlobSchema()) {
          const toBytes = this.serdeContext?.utf8Decoder ?? fromUtf8;
          if (typeof data === "string") {
            return toBytes(data);
          }
          return data;
        } else if (ns.isStringSchema()) {
          if ("byteLength" in data) {
            return toString(data);
          }
          return data;
        }
      }
      return this.codecDeserializer.read(ns, data);
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
  init_index_browser2();
  var ToStringShapeSerializer = class extends SerdeContext {
    constructor(settings) {
      super();
      __publicField(this, "settings");
      __publicField(this, "stringBuffer", "");
      this.settings = settings;
    }
    write(schema, value) {
      const ns = NormalizedSchema.of(schema);
      switch (typeof value) {
        case "object":
          if (value === null) {
            this.stringBuffer = "null";
            return;
          }
          if (ns.isTimestampSchema()) {
            if (!(value instanceof Date)) {
              throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
            }
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = dateToUtcString(value);
                break;
              case 7:
                this.stringBuffer = String(value.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", value);
                this.stringBuffer = String(value.getTime() / 1e3);
            }
            return;
          }
          if (ns.isBlobSchema() && "byteLength" in value) {
            this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(value);
            return;
          }
          if (ns.isListSchema() && Array.isArray(value)) {
            let buffer = "";
            for (const item of value) {
              this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
              const headerItem = this.flush();
              const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
              if (buffer !== "") {
                buffer += ", ";
              }
              buffer += serialized;
            }
            this.stringBuffer = buffer;
            return;
          }
          this.stringBuffer = JSON.stringify(value, null, 2);
          break;
        case "string":
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = value;
          if (mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString.from(intermediateValue);
            }
            if (ns.getMergedTraits().httpHeader) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(intermediateValue.toString());
              return;
            }
          }
          this.stringBuffer = value;
          break;
        default:
          if (ns.isIdempotencyToken()) {
            this.stringBuffer = generateIdempotencyToken();
          } else {
            this.stringBuffer = String(value);
          }
      }
    }
    flush() {
      const buffer = this.stringBuffer;
      this.stringBuffer = "";
      return buffer;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
  var HttpInterceptingShapeSerializer = class {
    constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
      __publicField(this, "codecSerializer");
      __publicField(this, "stringSerializer");
      __publicField(this, "buffer");
      this.codecSerializer = codecSerializer;
      this.stringSerializer = stringSerializer;
    }
    setSerdeContext(serdeContext) {
      this.codecSerializer.setSerdeContext(serdeContext);
      this.stringSerializer.setSerdeContext(serdeContext);
    }
    write(schema, value) {
      const ns = NormalizedSchema.of(schema);
      const traits = ns.getMergedTraits();
      if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
        this.stringSerializer.write(ns, value);
        this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(ns, value);
    }
    flush() {
      if (this.buffer !== void 0) {
        const buffer = this.buffer;
        this.buffer = void 0;
        return buffer;
      }
      return this.codecSerializer.flush();
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/index.js
  init_transport();
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/protocols/protocol-http/extensions/httpExtensionConfiguration.js
  var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    return {
      setHttpHandler(handler) {
        runtimeConfig.httpHandler = handler;
      },
      httpHandler() {
        return runtimeConfig.httpHandler;
      },
      updateHttpClientConfig(key, value) {
        runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
      },
      httpHandlerConfigs() {
        return runtimeConfig.httpHandler.httpHandlerConfigs();
      }
    };
  };
  var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
      httpHandler: httpHandlerExtensionConfiguration.httpHandler()
    };
  };

  // node_modules/@smithy/core/dist-es/submodules/protocols/middleware-content-length/contentLengthMiddleware.js
  init_transport();
  var CONTENT_LENGTH_HEADER = "content-length";
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        const { body, headers } = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
          try {
            const length = bodyLengthChecker(body);
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          } catch (error) {
          }
        }
      }
      return next({
        ...args,
        request
      });
    };
  }
  var contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true
  };
  var getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js
  var escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
  var hexEncode = (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`;

  // node_modules/@smithy/core/dist-es/submodules/protocols/querystring-builder/buildQueryString.js
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (let i3 = 0, iLen = value.length; i3 < iLen; i3++) {
          parts.push(`${key}=${escapeUri(value[i3])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }

  // node_modules/@smithy/core/dist-es/submodules/protocols/index.js
  init_transport();

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
  init_index_browser2();

  // node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/constants.js
  var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
  ];
  var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND", "EAI_AGAIN"];

  // node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/service-error-classification.js
  var isRetryableByTrait = (error) => error?.$retryable !== void 0;
  var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
  var isBrowserNetworkError = (error) => {
    const errorMessages = /* @__PURE__ */ new Set([
      "Failed to fetch",
      "NetworkError when attempting to fetch resource",
      "The Internet connection appears to be offline",
      "Load failed",
      "Network request failed"
    ]);
    const isValid = error && error instanceof TypeError;
    if (!isValid) {
      return false;
    }
    return errorMessages.has(error.message);
  };
  var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
  var isTransientError = (error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || error.name === "InvalidSignatureException" && error.message?.includes("Signature expired") || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || isNodeJsHttp2TransientError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
  var isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== void 0) {
      const statusCode = error.$metadata.httpStatusCode;
      if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
        return true;
      }
      return false;
    }
    return false;
  };
  function isNodeJsHttp2TransientError(error) {
    return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
  }

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/constants.js
  var MAXIMUM_RETRY_DELAY = 20 * 1e3;
  var INITIAL_RETRY_TOKENS = 500;
  var NO_RETRY_INCREMENT = 1;
  var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  var REQUEST_HEADER = "amz-sdk-request";

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/parseRetryAfterHeader.js
  init_index_browser2();
  function parseRetryAfterHeader(response, logger2) {
    if (!HttpResponse.isInstance(response)) {
      return;
    }
    for (const header of Object.keys(response.headers)) {
      const h3 = header.toLowerCase();
      if (h3 === "retry-after") {
        const retryAfter = response.headers[header];
        let retryAfterSeconds = NaN;
        if (retryAfter.endsWith("GMT")) {
          try {
            const date2 = parseRfc7231DateTime(retryAfter);
            retryAfterSeconds = (date2.getTime() - Date.now()) / 1e3;
          } catch (e3) {
            logger2?.trace?.("Failed to parse retry-after header");
            logger2?.trace?.(e3);
          }
        } else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
          retryAfterSeconds = Number(retryAfter.match(/ GMT, ([\d.]+)$/)?.[1]);
        } else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
          retryAfterSeconds = Number(retryAfter);
        } else if (Date.parse(retryAfter) >= Date.now()) {
          retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1e3;
        }
        if (isNaN(retryAfterSeconds)) {
          return;
        }
        return new Date(Date.now() + retryAfterSeconds * 1e3);
      } else if (h3 === "x-amz-retry-after") {
        const v = response.headers[header];
        const backoffMilliseconds = Number(v);
        if (isNaN(backoffMilliseconds)) {
          logger2?.trace?.(`Failed to parse x-amz-retry-after=${v}`);
          return;
        }
        return new Date(Date.now() + backoffMilliseconds);
      }
    }
  }

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/util.js
  var asSdkError = (error) => {
    if (error instanceof Error)
      return error;
    if (error instanceof Object)
      return Object.assign(new Error(), error);
    if (typeof error === "string")
      return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
  function bindRetryMiddleware(isStreamingPayload2) {
    return (options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken((context["partition_id"] ?? "") + (context.__retryLongPoll ? ":longpoll" : ""));
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = HttpRequest.isInstance(request);
        if (isRequest) {
          request.headers[INVOCATION_ID_HEADER] = v4();
        }
        while (true) {
          try {
            if (isRequest) {
              request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e3) {
            const retryErrorInfo = getRetryErrorInfo(e3, options.logger);
            lastError = asSdkError(e3);
            if (isRequest && isStreamingPayload2(request)) {
              (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += (retryToken?.$retryLog?.acquisitionDelay ?? 0) + delay;
            if (delay > 0) {
              await cooldown(delay);
            }
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode) {
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        }
        return retryStrategy.retry(next, args);
      }
    };
  }
  var cooldown = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
  var getRetryErrorInfo = (error, logger2) => {
    const errorInfo = {
      error,
      errorType: getRetryErrorType(error)
    };
    const retryAfterHint = parseRetryAfterHeader(error.$response, logger2);
    if (retryAfterHint) {
      errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
  };
  var getRetryErrorType = (error) => {
    if (isThrottlingError(error))
      return "THROTTLING";
    if (isTransientError(error))
      return "TRANSIENT";
    if (isServerError(error))
      return "SERVER_ERROR";
    return "CLIENT_ERROR";
  };
  var retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true
  };
  function bindGetRetryPlugin(isStreamingPayload2) {
    const retryMiddleware2 = bindRetryMiddleware(isStreamingPayload2);
    return (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware2(options), retryMiddlewareOptions);
      }
    });
  }

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRateLimiter.js
  var _DefaultRateLimiter = class _DefaultRateLimiter {
    constructor(options) {
      __publicField(this, "beta");
      __publicField(this, "minCapacity");
      __publicField(this, "minFillRate");
      __publicField(this, "scaleConstant");
      __publicField(this, "smooth");
      __publicField(this, "enabled", false);
      __publicField(this, "availableTokens", 0);
      __publicField(this, "lastMaxRate", 0);
      __publicField(this, "measuredTxRate", 0);
      __publicField(this, "requestCount", 0);
      __publicField(this, "fillRate");
      __publicField(this, "lastThrottleTime");
      __publicField(this, "lastTimestamp", 0);
      __publicField(this, "lastTxRateBucket");
      __publicField(this, "maxCapacity");
      __publicField(this, "timeWindow", 0);
      this.beta = options?.beta ?? 0.7;
      this.minCapacity = options?.minCapacity ?? 1;
      this.minFillRate = options?.minFillRate ?? 0.5;
      this.scaleConstant = options?.scaleConstant ?? 0.4;
      this.smooth = options?.smooth ?? 0.8;
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
      this.fillRate = this.minFillRate;
      this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(response) {
      let calculatedRate;
      this.updateMeasuredRate();
      const retryErrorInfo = response;
      const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || isThrottlingError(retryErrorInfo?.error ?? response);
      if (isThrottling) {
        const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = rateToUse;
        this.calculateTimeWindow();
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        calculatedRate = this.cubicThrottle(rateToUse);
        this.enableTokenBucket();
      } else {
        this.calculateTimeWindow();
        calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
      }
      const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(newRate);
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async acquireTokenBucket(amount) {
      if (!this.enabled) {
        return;
      }
      this.refillTokenBucket();
      while (amount > this.availableTokens) {
        const delay = (amount - this.availableTokens) / this.fillRate * 1e3;
        await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        this.refillTokenBucket();
      }
      this.availableTokens = this.availableTokens - amount;
    }
    refillTokenBucket() {
      const timestamp = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
        return;
      }
      const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
      this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
      this.lastTimestamp = timestamp;
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
      return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
      return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
      this.refillTokenBucket();
      this.fillRate = Math.max(newRate, this.minFillRate);
      this.maxCapacity = Math.max(newRate, this.minCapacity);
      this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
      const t = this.getCurrentTimeInSeconds();
      const timeBucket = Math.floor(t * 2) / 2;
      this.requestCount++;
      if (timeBucket > this.lastTxRateBucket) {
        const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
        this.requestCount = 0;
        this.lastTxRateBucket = timeBucket;
      }
    }
    getPrecise(num) {
      return parseFloat(num.toFixed(8));
    }
  };
  __publicField(_DefaultRateLimiter, "setTimeoutFn", (fn, delay) => setTimeout(fn, delay));
  var DefaultRateLimiter = _DefaultRateLimiter;

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/retries-2026-config.js
  var _Retry = class _Retry {
    static delay() {
      return _Retry.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
      return _Retry.v2026 ? 1e3 : 500;
    }
    static cost() {
      return _Retry.v2026 ? 14 : 5;
    }
    static throttlingCost() {
      return _Retry.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
      return _Retry.v2026 ? "THROTTLING" : "TRANSIENT";
    }
  };
  __publicField(_Retry, "v2026", typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true");
  var Retry = _Retry;

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryBackoffStrategy.js
  var DefaultRetryBackoffStrategy = class {
    constructor() {
      __publicField(this, "x", Retry.delay());
    }
    computeNextBackoffDelay(i3) {
      const b3 = Math.random();
      const r3 = 2;
      const t_i = b3 * Math.min(this.x * r3 ** i3, MAXIMUM_RETRY_DELAY);
      return Math.floor(t_i);
    }
    setDelayBase(delay) {
      this.x = delay;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryToken.js
  var DefaultRetryToken = class {
    constructor(delay, count, cost, longPoll) {
      __publicField(this, "delay");
      __publicField(this, "count");
      __publicField(this, "cost");
      __publicField(this, "longPoll");
      __publicField(this, "$retryLog", {
        acquisitionDelay: 0
      });
      this.delay = delay;
      this.count = count;
      this.cost = cost;
      this.longPoll = longPoll;
    }
    getRetryCount() {
      return this.count;
    }
    getRetryDelay() {
      return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
    }
    getRetryCost() {
      return this.cost;
    }
    isLongPoll() {
      return this.longPoll;
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/config.js
  var RETRY_MODES;
  (function(RETRY_MODES2) {
    RETRY_MODES2["STANDARD"] = "standard";
    RETRY_MODES2["ADAPTIVE"] = "adaptive";
  })(RETRY_MODES || (RETRY_MODES = {}));
  var DEFAULT_MAX_ATTEMPTS = 3;
  var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/StandardRetryStrategy.js
  var refusal = {
    incompatible: 1,
    attempts: 2,
    capacity: 3
  };
  var StandardRetryStrategy = class {
    constructor(arg1) {
      __publicField(this, "mode", RETRY_MODES.STANDARD);
      __publicField(this, "retryBackoffStrategy");
      __publicField(this, "capacity", INITIAL_RETRY_TOKENS);
      __publicField(this, "maxAttemptsProvider");
      __publicField(this, "baseDelay");
      if (typeof arg1 === "number") {
        this.maxAttemptsProvider = async () => arg1;
      } else if (typeof arg1 === "function") {
        this.maxAttemptsProvider = arg1;
      } else if (arg1 && typeof arg1 === "object") {
        this.maxAttemptsProvider = async () => arg1.maxAttempts;
        this.baseDelay = arg1.baseDelay;
        this.retryBackoffStrategy = arg1.backoff;
      }
      this.maxAttemptsProvider ?? (this.maxAttemptsProvider = async () => DEFAULT_MAX_ATTEMPTS);
      this.baseDelay ?? (this.baseDelay = Retry.delay());
      this.retryBackoffStrategy ?? (this.retryBackoffStrategy = new DefaultRetryBackoffStrategy());
    }
    async acquireInitialRetryToken(retryTokenScope) {
      return new DefaultRetryToken(Retry.delay(), 0, void 0, Retry.v2026 && retryTokenScope.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
      const maxAttempts = await this.getMaxAttempts();
      const retryCode = this.retryCode(token, errorInfo, maxAttempts);
      const shouldRetry = retryCode === 0;
      const isLongPoll = token.isLongPoll?.();
      if (shouldRetry || isLongPoll) {
        const errorType = errorInfo.errorType;
        this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
        const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
        let retryDelay = delayFromErrorType;
        if (errorInfo.retryAfterHint instanceof Date) {
          retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5e3));
        }
        if (!shouldRetry) {
          const longPollBackoff = Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0;
          if (longPollBackoff > 0) {
            await new Promise((r3) => setTimeout(r3, longPollBackoff));
          }
        } else {
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          const nextToken = new DefaultRetryToken(0, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
          await new Promise((r3) => setTimeout(r3, retryDelay));
          nextToken.$retryLog.acquisitionDelay = retryDelay;
          return nextToken;
        }
      }
      throw new Error("No retry token available");
    }
    recordSuccess(token) {
      this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
      return this.capacity;
    }
    async maxAttempts() {
      return this.maxAttemptsProvider();
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (error) {
        console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
        return DEFAULT_MAX_ATTEMPTS;
      }
    }
    retryCode(tokenToRenew, errorInfo, maxAttempts) {
      const attempts = tokenToRenew.getRetryCount() + 1;
      const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
      const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
      const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
      return retryableStatus || attemptStatus || capacityStatus;
    }
    getCapacityCost(errorType) {
      return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
    }
    isRetryableError(errorType) {
      return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/util-retry/AdaptiveRetryStrategy.js
  var AdaptiveRetryStrategy = class {
    constructor(maxAttemptsProvider, options) {
      __publicField(this, "mode", RETRY_MODES.ADAPTIVE);
      __publicField(this, "rateLimiter");
      __publicField(this, "standardRetryStrategy");
      const { rateLimiter } = options ?? {};
      this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
      this.standardRetryStrategy = options ? new StandardRetryStrategy({
        maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
        ...options
      }) : new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
      const token = await this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      await this.rateLimiter.getSendToken();
      return token;
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
      this.rateLimiter.updateClientSendingRate(errorInfo);
      const token = await this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      await this.rateLimiter.getSendToken();
      return token;
    }
    recordSuccess(token) {
      this.rateLimiter.updateClientSendingRate({});
      this.standardRetryStrategy.recordSuccess(token);
    }
    async maxAttemptsProvider() {
      return this.standardRetryStrategy.maxAttempts();
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/configurations.js
  var resolveRetryConfig = (input, defaults) => {
    const { retryStrategy, retryMode } = input;
    const { defaultMaxAttempts = DEFAULT_MAX_ATTEMPTS, defaultBaseDelay = Retry.delay() } = defaults ?? {};
    const maxAttemptsProvider = normalizeProvider(input.maxAttempts ?? defaultMaxAttempts);
    let controller = retryStrategy ? Promise.resolve(retryStrategy) : void 0;
    const getDefault = async () => {
      const maxAttempts = await maxAttemptsProvider();
      const adaptive = await normalizeProvider(retryMode)() === RETRY_MODES.ADAPTIVE;
      if (adaptive) {
        return new AdaptiveRetryStrategy(maxAttemptsProvider, {
          maxAttempts,
          baseDelay: defaultBaseDelay
        });
      }
      return new StandardRetryStrategy({
        maxAttempts,
        baseDelay: defaultBaseDelay
      });
    };
    return Object.assign(input, {
      maxAttempts: maxAttemptsProvider,
      retryStrategy: () => controller ?? (controller = getDefault())
    });
  };

  // node_modules/@smithy/core/dist-es/submodules/retry/index.browser.js
  var no2 = Symbol.for("node-only");
  var retryMiddleware = bindRetryMiddleware(isStreamingPayload);
  var getRetryPlugin = bindGetRetryPlugin(isStreamingPayload);

  // node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
  var _a;
  (_a = Retry).v2026 || (_a.v2026 = typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true");
  function setFeature2(context, feature, value) {
    if (!context.__aws_sdk_context) {
      context.__aws_sdk_context = {
        features: {}
      };
    } else if (!context.__aws_sdk_context.features) {
      context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-host-header/hostHeaderMiddleware.js
  function resolveHostHeaderConfig(input) {
    return input;
  }
  var hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!HttpRequest.isInstance(args.request))
      return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
      delete request.headers["host"];
      request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    } else if (!request.headers["host"]) {
      let host = request.hostname;
      if (request.port != null)
        host += `:${request.port}`;
      request.headers["host"] = host;
    }
    return next(args);
  };
  var hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true
  };
  var getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-logger/loggerMiddleware.js
  var loggerMiddleware = () => (next, context) => async (args) => {
    try {
      const response = await next(args);
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
      const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
      const { $metadata, ...outputWithoutMetadata } = response.output;
      logger2?.info?.({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        output: outputFilterSensitiveLog(outputWithoutMetadata),
        metadata: $metadata
      });
      return response;
    } catch (error) {
      const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
      const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
      const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
      logger2?.error?.({
        clientName,
        commandName,
        input: inputFilterSensitiveLog(args.input),
        error,
        metadata: error.$metadata
      });
      throw error;
    }
  };
  var loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true
  };
  var getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-recursion-detection/getRecursionDetectionPlugin.browser.js
  var getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
    }
  });

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  init_transport();

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/resolveAuthOptions.js
  var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
    if (!authSchemePreference || authSchemePreference.length === 0) {
      return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference) {
      for (const candidateAuthOption of candidateAuthOptions) {
        const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
        if (candidateAuthSchemeName === preferredSchemeName) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
    }
    for (const candidateAuthOption of candidateAuthOptions) {
      if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
    return preferredAuthOptions;
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = /* @__PURE__ */ new Map();
    for (const scheme of httpAuthSchemes) {
      map.set(scheme.schemeId, scheme);
    }
    return map;
  }
  var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
    const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = getSmithyContext(context);
    const failureReasons = [];
    for (const option of resolvedOptions) {
      const scheme = authSchemes.get(option.schemeId);
      if (!scheme) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
        continue;
      }
      const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
      if (!identityProvider) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
      option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
      option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
      smithyContext.selectedHttpAuthScheme = {
        httpAuthOption: option,
        identity: await identityProvider(option.identityProperties),
        signer: scheme.signer
      };
      break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
      throw new Error(failureReasons.join("\n"));
    }
    return next(args);
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  var getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-signing/httpSigningMiddleware.js
  init_transport();
  var defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler = (httpResponse, signingProperties) => {
  };
  var httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    const output = await next({
      ...args,
      request: await signer.sign(args.request, identity, signingProperties)
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-signing/getHttpSigningMiddleware.js
  var httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
  };
  var getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
    }
  });

  // node_modules/@smithy/core/dist-es/normalizeProvider.js
  var normalizeProvider2 = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/DefaultIdentityProviderConfig.js
  var DefaultIdentityProviderConfig = class {
    constructor(config) {
      __publicField(this, "authSchemes", /* @__PURE__ */ new Map());
      for (const key in config) {
        const value = config[key];
        if (value !== void 0) {
          this.authSchemes.set(key, value);
        }
      }
    }
    getIdentityProvider(schemeId) {
      return this.authSchemes.get(schemeId);
    }
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/httpAuthSchemes/noAuth.js
  var NoAuthSigner = class {
    async sign(httpRequest, identity, signingProperties) {
      return httpRequest;
    }
  };

  // node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/memoizeIdentityProvider.js
  var createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
    return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
  };
  var EXPIRATION_MS = 3e5;
  var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
  var doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
  var memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === void 0) {
      return void 0;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
      if (!pending) {
        pending = normalizedProvider(options);
      }
      try {
        resolved = await pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    };
    if (isExpired === void 0) {
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        return resolved;
      };
    }
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      if (isConstant) {
        return resolved;
      }
      if (!requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        await coalesceProvider(options);
        return resolved;
      }
      return resolved;
    };
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/configurations.js
  var DEFAULT_UA_APP_ID = void 0;
  function isValidUserAgentAppId(appId) {
    if (appId === void 0) {
      return true;
    }
    return typeof appId === "string" && appId.length <= 50;
  }
  function resolveUserAgentConfig(input) {
    const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
    const { customUserAgent } = input;
    return Object.assign(input, {
      customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
      userAgentAppId: async () => {
        const appId = await normalizedAppIdProvider();
        if (!isValidUserAgentAppId(appId)) {
          const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
          if (typeof appId !== "string") {
            logger2?.warn("userAgentAppId must be a string or undefined.");
          } else if (appId.length > 50) {
            logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
          }
        }
        return appId;
      }
    });
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/partitions.js
  var partitionsInfo = {
    "partitions": [
      {
        "id": "aws",
        "outputs": {
          "dnsSuffix": "amazonaws.com",
          "dualStackDnsSuffix": "api.aws",
          "implicitGlobalRegion": "us-east-1",
          "name": "aws",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        "regions": {
          "af-south-1": {
            "description": "Africa (Cape Town)"
          },
          "ap-east-1": {
            "description": "Asia Pacific (Hong Kong)"
          },
          "ap-east-2": {
            "description": "Asia Pacific (Taipei)"
          },
          "ap-northeast-1": {
            "description": "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            "description": "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            "description": "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            "description": "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            "description": "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            "description": "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            "description": "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            "description": "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            "description": "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            "description": "Asia Pacific (Malaysia)"
          },
          "ap-southeast-6": {
            "description": "Asia Pacific (New Zealand)"
          },
          "ap-southeast-7": {
            "description": "Asia Pacific (Thailand)"
          },
          "aws-global": {
            "description": "aws global region"
          },
          "ca-central-1": {
            "description": "Canada (Central)"
          },
          "ca-west-1": {
            "description": "Canada West (Calgary)"
          },
          "eu-central-1": {
            "description": "Europe (Frankfurt)"
          },
          "eu-central-2": {
            "description": "Europe (Zurich)"
          },
          "eu-north-1": {
            "description": "Europe (Stockholm)"
          },
          "eu-south-1": {
            "description": "Europe (Milan)"
          },
          "eu-south-2": {
            "description": "Europe (Spain)"
          },
          "eu-west-1": {
            "description": "Europe (Ireland)"
          },
          "eu-west-2": {
            "description": "Europe (London)"
          },
          "eu-west-3": {
            "description": "Europe (Paris)"
          },
          "il-central-1": {
            "description": "Israel (Tel Aviv)"
          },
          "me-central-1": {
            "description": "Middle East (UAE)"
          },
          "me-south-1": {
            "description": "Middle East (Bahrain)"
          },
          "mx-central-1": {
            "description": "Mexico (Central)"
          },
          "sa-east-1": {
            "description": "South America (Sao Paulo)"
          },
          "us-east-1": {
            "description": "US East (N. Virginia)"
          },
          "us-east-2": {
            "description": "US East (Ohio)"
          },
          "us-west-1": {
            "description": "US West (N. California)"
          },
          "us-west-2": {
            "description": "US West (Oregon)"
          }
        }
      },
      {
        "id": "aws-cn",
        "outputs": {
          "dnsSuffix": "amazonaws.com.cn",
          "dualStackDnsSuffix": "api.amazonwebservices.com.cn",
          "implicitGlobalRegion": "cn-northwest-1",
          "name": "aws-cn",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^cn\\-\\w+\\-\\d+$",
        "regions": {
          "aws-cn-global": {
            "description": "aws-cn global region"
          },
          "cn-north-1": {
            "description": "China (Beijing)"
          },
          "cn-northwest-1": {
            "description": "China (Ningxia)"
          }
        }
      },
      {
        "id": "aws-eusc",
        "outputs": {
          "dnsSuffix": "amazonaws.eu",
          "dualStackDnsSuffix": "api.amazonwebservices.eu",
          "implicitGlobalRegion": "eusc-de-east-1",
          "name": "aws-eusc",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^eusc\\-(de)\\-\\w+\\-\\d+$",
        "regions": {
          "eusc-de-east-1": {
            "description": "AWS European Sovereign Cloud (Germany)"
          }
        }
      },
      {
        "id": "aws-iso",
        "outputs": {
          "dnsSuffix": "c2s.ic.gov",
          "dualStackDnsSuffix": "api.aws.ic.gov",
          "implicitGlobalRegion": "us-iso-east-1",
          "name": "aws-iso",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^us\\-iso\\-\\w+\\-\\d+$",
        "regions": {
          "aws-iso-global": {
            "description": "aws-iso global region"
          },
          "us-iso-east-1": {
            "description": "US ISO East"
          },
          "us-iso-west-1": {
            "description": "US ISO WEST"
          }
        }
      },
      {
        "id": "aws-iso-b",
        "outputs": {
          "dnsSuffix": "sc2s.sgov.gov",
          "dualStackDnsSuffix": "api.aws.scloud",
          "implicitGlobalRegion": "us-isob-east-1",
          "name": "aws-iso-b",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^us\\-isob\\-\\w+\\-\\d+$",
        "regions": {
          "aws-iso-b-global": {
            "description": "aws-iso-b global region"
          },
          "us-isob-east-1": {
            "description": "US ISOB East (Ohio)"
          },
          "us-isob-west-1": {
            "description": "US ISOB West"
          }
        }
      },
      {
        "id": "aws-iso-e",
        "outputs": {
          "dnsSuffix": "cloud.adc-e.uk",
          "dualStackDnsSuffix": "api.cloud-aws.adc-e.uk",
          "implicitGlobalRegion": "eu-isoe-west-1",
          "name": "aws-iso-e",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^eu\\-isoe\\-\\w+\\-\\d+$",
        "regions": {
          "aws-iso-e-global": {
            "description": "aws-iso-e global region"
          },
          "eu-isoe-west-1": {
            "description": "EU ISOE West"
          }
        }
      },
      {
        "id": "aws-iso-f",
        "outputs": {
          "dnsSuffix": "csp.hci.ic.gov",
          "dualStackDnsSuffix": "api.aws.hci.ic.gov",
          "implicitGlobalRegion": "us-isof-south-1",
          "name": "aws-iso-f",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^us\\-isof\\-\\w+\\-\\d+$",
        "regions": {
          "aws-iso-f-global": {
            "description": "aws-iso-f global region"
          },
          "us-isof-east-1": {
            "description": "US ISOF EAST"
          },
          "us-isof-south-1": {
            "description": "US ISOF SOUTH"
          }
        }
      },
      {
        "id": "aws-us-gov",
        "outputs": {
          "dnsSuffix": "amazonaws.com",
          "dualStackDnsSuffix": "api.aws",
          "implicitGlobalRegion": "us-gov-west-1",
          "name": "aws-us-gov",
          "supportsDualStack": true,
          "supportsFIPS": true
        },
        "regionRegex": "^us\\-gov\\-\\w+\\-\\d+$",
        "regions": {
          "aws-us-gov-global": {
            "description": "aws-us-gov global region"
          },
          "us-gov-east-1": {
            "description": "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            "description": "AWS GovCloud (US-West)"
          }
        }
      }
    ],
    "version": "1.1"
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/partition.js
  var selectedPartitionsInfo = partitionsInfo;
  var selectedUserAgentPrefix = "";
  var partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition2 of partitions) {
      const { regions, outputs } = partition2;
      for (const [region, regionData] of Object.entries(regions)) {
        if (region === value) {
          return {
            ...outputs,
            ...regionData
          };
        }
      }
    }
    for (const partition2 of partitions) {
      const { regionRegex, outputs } = partition2;
      if (new RegExp(regionRegex).test(value)) {
        return {
          ...outputs
        };
      }
    }
    const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
    if (!DEFAULT_PARTITION) {
      throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    }
    return {
      ...DEFAULT_PARTITION.outputs
    };
  };
  var getUserAgentPrefix = () => selectedUserAgentPrefix;

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/check-features.js
  var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
  async function checkFeatures(context, config, args) {
    const request = args.request;
    if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
      setFeature2(context, "PROTOCOL_RPC_V2_CBOR", "M");
    }
    if (typeof config.retryStrategy === "function") {
      const retryStrategy = await config.retryStrategy();
      if (typeof retryStrategy.mode === "string") {
        switch (retryStrategy.mode) {
          case RETRY_MODES.ADAPTIVE:
            setFeature2(context, "RETRY_MODE_ADAPTIVE", "F");
            break;
          case RETRY_MODES.STANDARD:
            setFeature2(context, "RETRY_MODE_STANDARD", "E");
            break;
        }
      }
    }
    if (typeof config.accountIdEndpointMode === "function") {
      const endpointV2 = context.endpointV2;
      if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
        setFeature2(context, "ACCOUNT_ID_ENDPOINT", "O");
      }
      switch (await config.accountIdEndpointMode?.()) {
        case "disabled":
          setFeature2(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
          break;
        case "preferred":
          setFeature2(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
          break;
        case "required":
          setFeature2(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
          break;
      }
    }
    const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (identity?.$source) {
      const credentials = identity;
      if (credentials.accountId) {
        setFeature2(context, "RESOLVED_ACCOUNT_ID", "T");
      }
      for (const [key, value] of Object.entries(credentials.$source ?? {})) {
        setFeature2(context, key, value);
      }
    }
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/constants.js
  var USER_AGENT = "user-agent";
  var X_AMZ_USER_AGENT = "x-amz-user-agent";
  var SPACE = " ";
  var UA_NAME_SEPARATOR = "/";
  var UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
  var UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
  var UA_ESCAPE_CHAR = "-";

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/encode-features.js
  var BYTE_LIMIT = 1024;
  function encodeFeatures(features) {
    let buffer = "";
    for (const key in features) {
      const val = features[key];
      if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
        if (buffer.length) {
          buffer += "," + val;
        } else {
          buffer += val;
        }
        continue;
      }
      break;
    }
    return buffer;
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/user-agent-middleware.js
  var userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) {
      return next(args);
    }
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    await checkFeatures(context, options, args);
    const awsContext = context;
    defaultUserAgent2.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const appId = await options.userAgentAppId();
    if (appId) {
      defaultUserAgent2.push(escapeUserAgent([`app`, `${appId}`]));
    }
    const prefix = getUserAgentPrefix();
    const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
    const normalUAValue = [
      ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
      ...customUserAgent
    ].join(SPACE);
    if (options.runtime !== "browser") {
      if (normalUAValue) {
        headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
      }
      headers[USER_AGENT] = sdkUserAgentValue;
    } else {
      headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
      ...args,
      request
    });
  };
  var escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
      uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
      switch (index) {
        case 0:
          return item;
        case 1:
          return `${acc}/${item}`;
        default:
          return `${acc}#${item}`;
      }
    }, "");
  };
  var getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true
  };
  var getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    }
  });

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-user-agent-browser/defaultUserAgent.js
  var createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config) => {
    const navigator = typeof window !== "undefined" ? window.navigator : void 0;
    const uaString = navigator?.userAgent ?? "";
    const osName = navigator?.userAgentData?.platform ?? fallback.os(uaString) ?? "other";
    const osVersion = void 0;
    const brands = navigator?.userAgentData?.brands ?? [];
    const brand = brands[brands.length - 1];
    const browserName = brand?.brand ?? fallback.browser(uaString) ?? "unknown";
    const browserVersion = brand?.version ?? "unknown";
    const sections = [
      ["aws-sdk-js", clientVersion],
      ["ua", "2.1"],
      [`os/${osName}`, osVersion],
      ["lang/js"],
      ["md/browser", `${browserName}_${browserVersion}`]
    ];
    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }
    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };
  var fallback = {
    os(ua) {
      if (/iPhone|iPad|iPod/.test(ua))
        return "iOS";
      if (/Macintosh|Mac OS X/.test(ua))
        return "macOS";
      if (/Windows NT/.test(ua))
        return "Windows";
      if (/Android/.test(ua))
        return "Android";
      if (/Linux/.test(ua))
        return "Linux";
      return void 0;
    },
    browser(ua) {
      if (/EdgiOS|EdgA|Edg\//.test(ua))
        return "Microsoft Edge";
      if (/Firefox\//.test(ua))
        return "Firefox";
      if (/Chrome\//.test(ua))
        return "Chrome";
      if (/Safari\//.test(ua))
        return "Safari";
      return void 0;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/aws.js
  init_index_browser();

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/isVirtualHostableS3Bucket.js
  init_index_browser();

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/isIpAddress.js
  init_index_browser();

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/isVirtualHostableS3Bucket.js
  var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
      for (const label of value.split(".")) {
        if (!isVirtualHostableS3Bucket(label)) {
          return false;
        }
      }
      return true;
    }
    if (!isValidHostLabel(value)) {
      return false;
    }
    if (value.length < 3 || value.length > 63) {
      return false;
    }
    if (value !== value.toLowerCase()) {
      return false;
    }
    if (isIpAddress(value)) {
      return false;
    }
    return true;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/parseArn.js
  var ARN_DELIMITER = ":";
  var RESOURCE_DELIMITER = "/";
  var parseArn = (value) => {
    const segments = value.split(ARN_DELIMITER);
    if (segments.length < 6)
      return null;
    const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
    if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
      return null;
    const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
    return {
      partition: partition2,
      service,
      region,
      accountId,
      resourceId
    };
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/aws.js
  var awsEndpointFunctions = {
    isVirtualHostableS3Bucket,
    parseArn,
    partition
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@smithy/core/dist-es/submodules/config/property-provider/memoize.js
  var memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
      if (!pending) {
        pending = provider();
      }
      try {
        resolved = await pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = void 0;
      }
      return resolved;
    };
    if (isExpired === void 0) {
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        return resolved;
      };
    }
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      if (isConstant) {
        return resolved;
      }
      if (requiresRefresh && !requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        await coalesceProvider();
        return resolved;
      }
      return resolved;
    };
  };

  // node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/checkRegion.js
  init_transport();
  var validRegions = /* @__PURE__ */ new Set();
  var checkRegion = (region, check = isValidHostLabel) => {
    if (!validRegions.has(region) && !check(region)) {
      if (region === "*") {
        console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
      } else {
        throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
      }
    } else {
      validRegions.add(region);
    }
  };

  // node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/isFipsRegion.js
  var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

  // node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/getRealRegion.js
  var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

  // node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/resolveRegionConfig.js
  var resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
      throw new Error("Region is missing");
    }
    return Object.assign(input, {
      region: async () => {
        const providedRegion = typeof region === "function" ? await region() : region;
        const realRegion = getRealRegion(providedRegion);
        checkRegion(realRegion);
        return realRegion;
      },
      useFipsEndpoint: async () => {
        const providedRegion = typeof region === "string" ? region : await region();
        if (isFipsRegion(providedRegion)) {
          return true;
        }
        return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
      }
    });
  };

  // node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/constants.js
  var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

  // node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/resolveDefaultsModeConfig.browser.js
  var resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
      case "auto":
        return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
      case "mobile":
      case "in-region":
      case "cross-region":
      case "standard":
      case "legacy":
        return Promise.resolve(mode?.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
  });
  var useMobileConfiguration = () => {
    const navigator = window?.navigator;
    if (navigator?.connection) {
      const { effectiveType, rtt, downlink } = navigator?.connection;
      const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
      if (slow) {
        return true;
      }
    }
    return navigator?.userAgentData?.mobile || typeof navigator?.maxTouchPoints === "number" && navigator?.maxTouchPoints > 1;
  };

  // node_modules/@smithy/core/dist-es/submodules/config/index.browser.js
  var no3 = Symbol.for("node-only");
  var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
  var DEFAULT_USE_FIPS_ENDPOINT = false;

  // node_modules/@aws-sdk/core/dist-es/submodules/client/region-config-resolver/extensions.js
  var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    return {
      setRegion(region) {
        runtimeConfig.region = region;
      },
      region() {
        return runtimeConfig.region;
      }
    };
  };
  var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
      region: awsRegionExtensionConfiguration.region()
    };
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/client/index.browser.js
  var no4 = Symbol.for("node-only");

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js
  init_index_browser();

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
  var getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
  var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
  var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
      return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
  var throwSigningPropertyError = (name, property) => {
    if (!property) {
      throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
  };
  var validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingRegionSet = signingProperties?.signingRegionSet;
    const signingName = signingProperties?.signingName;
    return {
      config,
      signer,
      signingRegion,
      signingRegionSet,
      signingName
    };
  };
  var AwsSdkSigV4Signer = class {
    async sign(httpRequest, identity, signingProperties) {
      if (!HttpRequest.isInstance(httpRequest)) {
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      }
      const validatedProps = await validateSigningProperties(signingProperties);
      const { config, signer } = validatedProps;
      let { signingRegion, signingName } = validatedProps;
      const handlerExecutionContext = signingProperties.context;
      if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
        const [first, second] = handlerExecutionContext.authSchemes;
        if (first?.name === "sigv4a" && second?.name === "sigv4") {
          signingRegion = second?.signingRegion ?? signingRegion;
          signingName = second?.signingName ?? signingName;
        }
      }
      signingProperties._preRequestSystemClockOffset = config.systemClockOffset;
      const signedRequest = await signer.sign(httpRequest, {
        signingDate: getSkewCorrectedDate(config.systemClockOffset),
        signingRegion,
        signingService: signingName
      });
      return signedRequest;
    }
    errorHandler(signingProperties) {
      return (error) => {
        const errorException = error;
        const serverTime = errorException.ServerTime ?? getDateHeader(errorException.$response);
        if (serverTime) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          const preRequestOffset = signingProperties._preRequestSystemClockOffset;
          const newOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
          const isLocalCorrection = newOffset !== config.systemClockOffset;
          const isConcurrentCorrection = preRequestOffset !== void 0 && preRequestOffset !== newOffset;
          const clockSkewCorrected = isLocalCorrection || isConcurrentCorrection;
          if (clockSkewCorrected && errorException.$metadata) {
            config.systemClockOffset = newOffset;
            errorException.$metadata.clockSkewCorrected = true;
          }
        }
        throw error;
      };
    }
    successHandler(httpResponse, signingProperties) {
      const dateHeader = getDateHeader(httpResponse);
      if (dateHeader) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
      }
    }
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  init_index_browser2();

  // node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
  init_index_browser2();
  var HeaderFormatter = class {
    format(headers) {
      const chunks = [];
      for (const headerName of Object.keys(headers)) {
        const bytes = fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
      const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
      let position = 0;
      for (const chunk of chunks) {
        out.set(chunk, position);
        position += chunk.byteLength;
      }
      return out;
    }
    formatHeaderValue(header) {
      switch (header.type) {
        case "boolean":
          return Uint8Array.from([header.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, header.value]);
        case "short":
          const shortView = new DataView(new ArrayBuffer(3));
          shortView.setUint8(0, 3);
          shortView.setInt16(1, header.value, false);
          return new Uint8Array(shortView.buffer);
        case "integer":
          const intView = new DataView(new ArrayBuffer(5));
          intView.setUint8(0, 4);
          intView.setInt32(1, header.value, false);
          return new Uint8Array(intView.buffer);
        case "long":
          const longBytes = new Uint8Array(9);
          longBytes[0] = 5;
          longBytes.set(header.value.bytes, 1);
          return longBytes;
        case "binary":
          const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
          binView.setUint8(0, 6);
          binView.setUint16(1, header.value.byteLength, false);
          const binBytes = new Uint8Array(binView.buffer);
          binBytes.set(header.value, 3);
          return binBytes;
        case "string":
          const utf8Bytes = fromUtf8(header.value);
          const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
          strView.setUint8(0, 7);
          strView.setUint16(1, utf8Bytes.byteLength, false);
          const strBytes = new Uint8Array(strView.buffer);
          strBytes.set(utf8Bytes, 3);
          return strBytes;
        case "timestamp":
          const tsBytes = new Uint8Array(9);
          tsBytes[0] = 8;
          tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
          return tsBytes;
        case "uuid":
          if (!UUID_PATTERN2.test(header.value)) {
            throw new Error(`Invalid UUID received: ${header.value}`);
          }
          const uuidBytes = new Uint8Array(17);
          uuidBytes[0] = 9;
          uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
          return uuidBytes;
      }
    }
  };
  var HEADER_VALUE_TYPE2;
  (function(HEADER_VALUE_TYPE3) {
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
  var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  var Int642 = class _Int64 {
    constructor(bytes) {
      __publicField(this, "bytes");
      this.bytes = bytes;
      if (bytes.byteLength !== 8) {
        throw new Error("Int64 buffers must be exactly 8 bytes");
      }
    }
    static fromNumber(number) {
      if (number > 9223372036854776e3 || number < -9223372036854776e3) {
        throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
      }
      const bytes = new Uint8Array(8);
      for (let i3 = 7, remaining = Math.abs(Math.round(number)); i3 > -1 && remaining > 0; i3--, remaining /= 256) {
        bytes[i3] = remaining;
      }
      if (number < 0) {
        negate2(bytes);
      }
      return new _Int64(bytes);
    }
    valueOf() {
      const bytes = this.bytes.slice(0);
      const negative = bytes[0] & 128;
      if (negative) {
        negate2(bytes);
      }
      return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
  function negate2(bytes) {
    for (let i3 = 0; i3 < 8; i3++) {
      bytes[i3] ^= 255;
    }
    for (let i3 = 7; i3 > -1; i3--) {
      bytes[i3]++;
      if (bytes[i3] !== 0)
        break;
    }
  }

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
  init_index_browser2();

  // node_modules/@smithy/signature-v4/dist-es/constants.js
  var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  var AUTH_HEADER = "authorization";
  var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  var DATE_HEADER = "date";
  var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
  var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
  var SHA256_HEADER = "x-amz-content-sha256";
  var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  var PROXY_HEADER_PATTERN = /^proxy-/;
  var SEC_HEADER_PATTERN = /^sec-/;
  var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  var MAX_CACHE_SIZE = 50;
  var KEY_TYPE_IDENTIFIER = "aws4_request";
  var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
  var getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
      if (key.toLowerCase() === SIGNATURE_HEADER) {
        continue;
      }
      const encodedKey = escapeUri(key);
      keys.push(encodedKey);
      const value = query[key];
      if (typeof value === "string") {
        serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
      }
    }
    return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
  };

  // node_modules/@smithy/signature-v4/dist-es/utilDate.js
  var iso8601 = (time2) => toDate(time2).toISOString().replace(/\.\d{3}Z$/, "Z");
  var toDate = (time2) => {
    if (typeof time2 === "number") {
      return new Date(time2 * 1e3);
    }
    if (typeof time2 === "string") {
      if (Number(time2)) {
        return new Date(Number(time2) * 1e3);
      }
      return new Date(time2);
    }
    return time2;
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
  var SignatureV4Base = class {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      __publicField(this, "service");
      __publicField(this, "regionProvider");
      __publicField(this, "credentialProvider");
      __publicField(this, "sha256");
      __publicField(this, "uriEscapePath");
      __publicField(this, "applyChecksum");
      this.service = service;
      this.sha256 = sha256;
      this.uriEscapePath = uriEscapePath;
      this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
      this.regionProvider = normalizeProvider(region);
      this.credentialProvider = normalizeProvider(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
      const sortedHeaders = Object.keys(canonicalHeaders).sort();
      return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
      const hash = new this.sha256();
      hash.update(toUint8Array(canonicalRequest));
      const hashedRequest = await hash.digest();
      return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
      if (this.uriEscapePath) {
        const normalizedPathSegments = [];
        for (const pathSegment of path.split("/")) {
          if (pathSegment?.length === 0)
            continue;
          if (pathSegment === ".")
            continue;
          if (pathSegment === "..") {
            normalizedPathSegments.pop();
          } else {
            normalizedPathSegments.push(pathSegment);
          }
        }
        const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
        const doubleEncoded = escapeUri(normalizedPath);
        return doubleEncoded.replace(/%2F/g, "/");
      }
      return path;
    }
    validateResolvedCredentials(credentials) {
      if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
        throw new Error("Resolved credential object is not valid");
      }
    }
    formatDate(now) {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }
    getCanonicalHeaderList(headers) {
      return Object.keys(headers).sort().join(";");
    }
  };

  // node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
  init_index_browser2();
  var signingKeyCache = {};
  var cacheQueue = [];
  var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
  var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
      key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
  };
  var hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
  };

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
  var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
      if (headers[headerName] == void 0) {
        continue;
      }
      const canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
  };

  // node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
  init_index_browser2();
  var getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === SHA256_HEADER) {
        return headers[headerName];
      }
    }
    if (body == void 0) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
      const hashCtor = new hashConstructor();
      hashCtor.update(toUint8Array(body));
      return toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
  };

  // node_modules/@smithy/signature-v4/dist-es/headerUtil.js
  var hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
  var moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = HttpRequest.clone(request);
    for (const name of Object.keys(headers)) {
      const lname = name.toLowerCase();
      if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
        query[name] = headers[name];
        delete headers[name];
      }
    }
    return {
      ...request,
      headers,
      query
    };
  };

  // node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
  var prepareRequest = (request) => {
    request = HttpRequest.clone(request);
    for (const headerName of Object.keys(request.headers)) {
      if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
    return request;
  };

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  var SignatureV4 = class extends SignatureV4Base {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      super({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath
      });
      __publicField(this, "headerFormatter", new HeaderFormatter());
    }
    async presign(originalRequest, options = {}) {
      const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { longDate, shortDate } = this.formatDate(signingDate);
      if (expiresIn > MAX_PRESIGNED_TTL) {
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      }
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
      if (credentials.sessionToken) {
        request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
      }
      request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
      request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
      request.query[AMZ_DATE_QUERY_PARAM] = longDate;
      request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
      request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
      return request;
    }
    async sign(toSign, options) {
      if (typeof toSign === "string") {
        return this.signString(toSign, options);
      } else if (toSign.headers && toSign.payload) {
        return this.signEvent(toSign, options);
      } else if (toSign.message) {
        return this.signMessage(toSign, options);
      } else {
        return this.signRequest(toSign, options);
      }
    }
    async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate, longDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
      const hash = new this.sha256();
      hash.update(headers);
      const hashedHeaders = toHex(await hash.digest());
      const stringToSign = [
        EVENT_ALGORITHM_IDENTIFIER,
        longDate,
        scope,
        priorSignature,
        hashedHeaders,
        hashedPayload
      ].join("\n");
      return this.signString(stringToSign, {
        signingDate,
        signingRegion: region,
        signingService,
        eventStreamCredentials
      });
    }
    async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials }) {
      const promise = this.signEvent({
        headers: this.headerFormatter.format(signableMessage.message.headers),
        payload: signableMessage.message.body
      }, {
        signingDate,
        signingRegion,
        signingService,
        priorSignature: signableMessage.priorSignature,
        eventStreamCredentials
      });
      return promise.then((signature) => {
        return { message: signableMessage.message, signature };
      });
    }
    async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
      const credentials = eventStreamCredentials ?? await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate } = this.formatDate(signingDate);
      const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
      hash.update(toUint8Array(stringToSign));
      return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const request = prepareRequest(requestToSign);
      const { longDate, shortDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      request.headers[AMZ_DATE_HEADER] = longDate;
      if (credentials.sessionToken) {
        request.headers[TOKEN_HEADER] = credentials.sessionToken;
      }
      const payloadHash = await getPayloadHash(request, this.sha256);
      if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
        request.headers[SHA256_HEADER] = payloadHash;
      }
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
      request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
      return request;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
      const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
      const hash = new this.sha256(await keyPromise);
      hash.update(toUint8Array(stringToSign));
      return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
      return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
  var resolveAwsSdkSigV4Config = (config) => {
    let inputCredentials = config.credentials;
    let isUserSupplied = !!config.credentials;
    let resolvedCredentials = void 0;
    Object.defineProperty(config, "credentials", {
      set(credentials) {
        if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
          isUserSupplied = true;
        }
        inputCredentials = credentials;
        const memoizedProvider = normalizeCredentialProvider(config, {
          credentials: inputCredentials,
          credentialDefaultProvider: config.credentialDefaultProvider
        });
        const boundProvider = bindCallerConfig(config, memoizedProvider);
        if (isUserSupplied && !boundProvider.attributed) {
          const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
          resolvedCredentials = async (options) => {
            const creds = await boundProvider(options);
            const attributedCreds = creds;
            if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
              return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
            }
            return attributedCreds;
          };
          resolvedCredentials.memoized = boundProvider.memoized;
          resolvedCredentials.configBound = boundProvider.configBound;
          resolvedCredentials.attributed = true;
        } else {
          resolvedCredentials = boundProvider;
        }
      },
      get() {
        return resolvedCredentials;
      },
      enumerable: true,
      configurable: true
    });
    config.credentials = inputCredentials;
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
    let signer;
    if (config.signer) {
      signer = normalizeProvider2(config.signer);
    } else if (config.regionInfoProvider) {
      signer = () => normalizeProvider2(config.region)().then(async (region) => [
        await config.regionInfoProvider(region, {
          useFipsEndpoint: await config.useFipsEndpoint(),
          useDualstackEndpoint: await config.useDualstackEndpoint()
        }) || {},
        region
      ]).then(([regionInfo, region]) => {
        const { signingRegion, signingService } = regionInfo;
        config.signingRegion = config.signingRegion || signingRegion || region;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      });
    } else {
      signer = async (authScheme) => {
        authScheme = Object.assign({}, {
          name: "sigv4",
          signingName: config.signingName || config.defaultSigningName,
          signingRegion: await normalizeProvider2(config.region)(),
          properties: {}
        }, authScheme);
        const signingRegion = authScheme.signingRegion;
        const signingService = authScheme.signingName;
        config.signingRegion = config.signingRegion || signingRegion;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || SignatureV4;
        return new SignerCtor(params);
      };
    }
    const resolvedConfig = Object.assign(config, {
      systemClockOffset,
      signingEscapePath,
      signer
    });
    return resolvedConfig;
  };
  function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
    let credentialsProvider;
    if (credentials) {
      if (!credentials?.memoized) {
        credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
      } else {
        credentialsProvider = credentials;
      }
    } else {
      if (credentialDefaultProvider) {
        credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
          parentClientConfig: config
        })));
      } else {
        credentialsProvider = async () => {
          throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
        };
      }
    }
    credentialsProvider.memoized = true;
    return credentialsProvider;
  }
  function bindCallerConfig(config, credentialsProvider) {
    if (credentialsProvider.configBound) {
      return credentialsProvider;
    }
    const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
    fn.memoized = credentialsProvider.memoized;
    fn.configBound = true;
    return fn;
  }

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthSchemeProvider.js
  var defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: getSmithyContext(context).operation,
      region: await normalizeProvider(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "cognito-idp",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var defaultCognitoIdentityProviderHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      case "AssociateSoftwareToken":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ChangePassword":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "CompleteWebAuthnRegistration":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ConfirmDevice":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ConfirmForgotPassword":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ConfirmSignUp":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "DeleteUser":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "DeleteUserAttributes":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "DeleteWebAuthnCredential":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ForgetDevice":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ForgotPassword":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GetDevice":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GetTokensFromRefreshToken":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GetUser":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GetUserAttributeVerificationCode":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GetUserAuthFactors":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "GlobalSignOut":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "InitiateAuth":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ListDevices":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ListWebAuthnCredentials":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "ResendConfirmationCode":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "RespondToAuthChallenge":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "RevokeToken":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "SetUserMFAPreference":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "SetUserSettings":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "SignUp":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "StartWebAuthnRegistration":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "UpdateAuthEventFeedback":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "UpdateDeviceStatus":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "UpdateUserAttributes":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "VerifySoftwareToken":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      case "VerifyUserAttribute":
        {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        ;
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      }
    }
    return options;
  };
  var resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveAwsSdkSigV4Config(config);
    return Object.assign(config_0, {
      authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
    });
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "cognito-idp"
    });
  };
  var commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/package.json
  var package_default = {
    name: "@aws-sdk/client-cognito-identity-provider",
    description: "AWS SDK for JavaScript Cognito Identity Provider Client for Node.js, Browser and React Native",
    version: "3.1075.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline",
      "build:es": "premove dist-es && tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "premove dist-types && tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "^3.974.23",
      "@aws-sdk/credential-provider-node": "^3.972.58",
      "@aws-sdk/types": "^3.973.13",
      "@smithy/core": "^3.24.6",
      "@smithy/fetch-http-handler": "^5.4.6",
      "@smithy/node-http-handler": "^4.7.6",
      "@smithy/types": "^4.14.3",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3"
    },
    engines: {
      node: ">=20.0.0"
    },
    typesVersions: {
      "<4.5": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/sdk-for-javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity-provider",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-cognito-identity-provider"
    }
  };

  // node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
  init_module();

  // node_modules/@aws-crypto/sha256-browser/build/module/constants.js
  var SHA_256_HASH = { name: "SHA-256" };
  var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
  };
  var EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
  ]);

  // node_modules/@aws-sdk/util-locate-window/dist-es/index.js
  var fallbackWindow = {};
  function locateWindow() {
    if (typeof window !== "undefined") {
      return window;
    } else if (typeof self !== "undefined") {
      return self;
    }
    return fallbackWindow;
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
  var Sha256 = (
    /** @class */
    function() {
      function Sha2564(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
      }
      Sha2564.prototype.update = function(data) {
        if (isEmptyData(data)) {
          return;
        }
        var update = convertToBuffer(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
      };
      Sha2564.prototype.digest = function() {
        var _this = this;
        if (this.key) {
          return this.key.then(function(key) {
            return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
              return new Uint8Array(data);
            });
          });
        }
        if (isEmptyData(this.toHash)) {
          return Promise.resolve(EMPTY_DATA_SHA_256);
        }
        return Promise.resolve().then(function() {
          return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
        }).then(function(data) {
          return Promise.resolve(new Uint8Array(data));
        });
      };
      Sha2564.prototype.reset = function() {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
          this.key = new Promise(function(resolve, reject) {
            locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
          });
          this.key.catch(function() {
          });
        }
      };
      return Sha2564;
    }()
  );

  // node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
  init_tslib_es6();

  // node_modules/@aws-crypto/sha256-js/build/module/constants.js
  var BLOCK_SIZE = 64;
  var DIGEST_LENGTH = 32;
  var KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

  // node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
  var RawSha256 = (
    /** @class */
    function() {
      function RawSha2562() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
      }
      RawSha2562.prototype.update = function(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = data[position++];
          byteLength--;
          if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      };
      RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8;
          var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
          var undecoratedLength = this.bufferLength;
          bufferView.setUint8(this.bufferLength++, 128);
          if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i3 = this.bufferLength; i3 < BLOCK_SIZE; i3++) {
              bufferView.setUint8(i3, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
          }
          for (var i3 = this.bufferLength; i3 < BLOCK_SIZE - 8; i3++) {
            bufferView.setUint8(i3, 0);
          }
          bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
          bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
          this.hashBuffer();
          this.finished = true;
        }
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i3 = 0; i3 < 8; i3++) {
          out[i3 * 4] = this.state[i3] >>> 24 & 255;
          out[i3 * 4 + 1] = this.state[i3] >>> 16 & 255;
          out[i3 * 4 + 2] = this.state[i3] >>> 8 & 255;
          out[i3 * 4 + 3] = this.state[i3] >>> 0 & 255;
        }
        return out;
      };
      RawSha2562.prototype.hashBuffer = function() {
        var _a3 = this, buffer = _a3.buffer, state = _a3.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i3 = 0; i3 < BLOCK_SIZE; i3++) {
          if (i3 < 16) {
            this.temp[i3] = (buffer[i3 * 4] & 255) << 24 | (buffer[i3 * 4 + 1] & 255) << 16 | (buffer[i3 * 4 + 2] & 255) << 8 | buffer[i3 * 4 + 3] & 255;
          } else {
            var u = this.temp[i3 - 2];
            var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = this.temp[i3 - 15];
            var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            this.temp[i3] = (t1_1 + this.temp[i3 - 7] | 0) + (t2_1 + this.temp[i3 - 16] | 0);
          }
          var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i3] + this.temp[i3] | 0) | 0) | 0;
          var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6;
          state6 = state5;
          state5 = state4;
          state4 = state3 + t1 | 0;
          state3 = state2;
          state2 = state1;
          state1 = state0;
          state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
      };
      return RawSha2562;
    }()
  );

  // node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
  init_module();
  var Sha2562 = (
    /** @class */
    function() {
      function Sha2564(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
      }
      Sha2564.prototype.update = function(toHash) {
        if (isEmptyData(toHash) || this.error) {
          return;
        }
        try {
          this.hash.update(convertToBuffer(toHash));
        } catch (e3) {
          this.error = e3;
        }
      };
      Sha2564.prototype.digestSync = function() {
        if (this.error) {
          throw this.error;
        }
        if (this.outer) {
          if (!this.outer.finished) {
            this.outer.update(this.hash.digest());
          }
          return this.outer.digest();
        }
        return this.hash.digest();
      };
      Sha2564.prototype.digest = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            return [2, this.digestSync()];
          });
        });
      };
      Sha2564.prototype.reset = function() {
        this.hash = new RawSha256();
        if (this.secret) {
          this.outer = new RawSha256();
          var inner = bufferFromSecret(this.secret);
          var outer = new Uint8Array(BLOCK_SIZE);
          outer.set(inner);
          for (var i3 = 0; i3 < BLOCK_SIZE; i3++) {
            inner[i3] ^= 54;
            outer[i3] ^= 92;
          }
          this.hash.update(inner);
          this.outer.update(outer);
          for (var i3 = 0; i3 < inner.byteLength; i3++) {
            inner[i3] = 0;
          }
        }
      };
      return Sha2564;
    }()
  );
  function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
      var bufferHash = new RawSha256();
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }

  // node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
  var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
  ];
  function supportsWebCrypto(window2) {
    if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
      var subtle = window2.crypto.subtle;
      return supportsSubtleCrypto(subtle);
    }
    return false;
  }
  function supportsSecureRandom(window2) {
    if (typeof window2 === "object" && typeof window2.crypto === "object") {
      var getRandomValues = window2.crypto.getRandomValues;
      return typeof getRandomValues === "function";
    }
    return false;
  }
  function supportsSubtleCrypto(subtle) {
    return subtle && subtleCryptoMethods.every(function(methodName) {
      return typeof subtle[methodName] === "function";
    });
  }

  // node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
  init_module();
  var Sha2563 = (
    /** @class */
    function() {
      function Sha2564(secret) {
        if (supportsWebCrypto(locateWindow())) {
          this.hash = new Sha256(secret);
        } else {
          this.hash = new Sha2562(secret);
        }
      }
      Sha2564.prototype.update = function(data, encoding) {
        this.hash.update(convertToBuffer(data));
      };
      Sha2564.prototype.digest = function() {
        return this.hash.digest();
      };
      Sha2564.prototype.reset = function() {
        this.hash.reset();
      };
      return Sha2564;
    }()
  );

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.browser.js
  init_index_browser2();

  // node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
  function createRequest(url, requestOptions) {
    return new Request(url, requestOptions);
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
  function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
      if (timeoutInMs) {
        setTimeout(() => {
          const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        }, timeoutInMs);
      }
    });
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
  var keepAliveSupport = {
    supported: void 0
  };
  var FetchHttpHandler = class _FetchHttpHandler {
    constructor(options) {
      __publicField(this, "config");
      __publicField(this, "configProvider");
      if (typeof options === "function") {
        this.configProvider = options().then((opts) => opts || {});
      } else {
        this.config = options ?? {};
        this.configProvider = Promise.resolve(this.config);
      }
      if (keepAliveSupport.supported === void 0) {
        keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
      }
    }
    static create(instanceOrOptions) {
      if (typeof instanceOrOptions?.handle === "function") {
        return instanceOrOptions;
      }
      return new _FetchHttpHandler(instanceOrOptions);
    }
    destroy() {
    }
    async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
      if (!this.config) {
        this.config = await this.configProvider;
      }
      const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
      const keepAlive = this.config.keepAlive === true;
      const credentials = this.config.credentials;
      if (abortSignal?.aborted) {
        const abortError = buildAbortError(abortSignal);
        return Promise.reject(abortError);
      }
      let path = request.path;
      const queryString = buildQueryString(request.query || {});
      if (queryString) {
        path += `?${queryString}`;
      }
      if (request.fragment) {
        path += `#${request.fragment}`;
      }
      let auth = "";
      if (request.username != null || request.password != null) {
        const username = request.username ?? "";
        const password = request.password ?? "";
        auth = `${username}:${password}@`;
      }
      const { port, method } = request;
      const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
      const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
      const requestOptions = {
        body,
        headers: new Headers(request.headers),
        method,
        credentials
      };
      if (this.config?.cache) {
        requestOptions.cache = this.config.cache;
      }
      if (body) {
        requestOptions.duplex = "half";
      }
      if (typeof AbortController !== "undefined") {
        requestOptions.signal = abortSignal;
      }
      if (keepAliveSupport.supported) {
        requestOptions.keepalive = keepAlive;
      }
      if (typeof this.config.requestInit === "function") {
        Object.assign(requestOptions, this.config.requestInit(request));
      }
      let removeSignalEventListener = () => {
      };
      const fetchRequest = createRequest(url, requestOptions);
      const raceOfPromises = [
        fetch(fetchRequest).then((response) => {
          const fetchHeaders = response.headers;
          const transformedHeaders = {};
          for (const pair of fetchHeaders.entries()) {
            transformedHeaders[pair[0]] = pair[1];
          }
          const hasReadableStream = response.body != void 0;
          if (!hasReadableStream) {
            return response.blob().then((body2) => ({
              response: new HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: body2
              })
            }));
          }
          return {
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: response.body
            })
          };
        }),
        requestTimeout(requestTimeoutInMs)
      ];
      if (abortSignal) {
        raceOfPromises.push(new Promise((resolve, reject) => {
          const onAbort = () => {
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
          };
          if (typeof abortSignal.addEventListener === "function") {
            const signal = abortSignal;
            signal.addEventListener("abort", onAbort, { once: true });
            removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
          } else {
            abortSignal.onabort = onAbort;
          }
        }));
      }
      return Promise.race(raceOfPromises).finally(removeSignalEventListener);
    }
    updateHttpClientConfig(key, value) {
      this.config = void 0;
      this.configProvider = this.configProvider.then((config) => {
        config[key] = value;
        return config;
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  };
  function buildAbortError(abortSignal) {
    const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
    if (reason) {
      if (reason instanceof Error) {
        const abortError3 = new Error("Request aborted");
        abortError3.name = "AbortError";
        abortError3.cause = reason;
        return abortError3;
      }
      const abortError2 = new Error(String(reason));
      abortError2.name = "AbortError";
      return abortError2;
    }
    const abortError = new Error("Request aborted");
    abortError.name = "AbortError";
    return abortError;
  }

  // node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  init_index_browser2();
  var streamCollector2 = async (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) {
        return new Uint8Array(await stream.arrayBuffer());
      }
      return collectBlob2(stream);
    }
    return collectStream2(stream);
  };
  async function collectBlob2(blob) {
    const base64 = await readToBase642(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
  }
  async function collectStream2(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        chunks.push(value);
        length += value.length;
      }
      isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      collected.set(chunk, offset);
      offset += chunk.length;
    }
    return collected;
  }
  function readToBase642(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = reader.result ?? "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
  var ProtocolLib = class {
    constructor(queryCompat = false) {
      __publicField(this, "queryCompat");
      __publicField(this, "errorRegistry");
      this.queryCompat = queryCompat;
    }
    resolveRestContentType(defaultContentType, inputSchema) {
      const members = inputSchema.getMemberSchemas();
      const httpPayloadMember = Object.values(members).find((m2) => {
        return !!m2.getMergedTraits().httpPayload;
      });
      if (httpPayloadMember) {
        const mediaType = httpPayloadMember.getMergedTraits().mediaType;
        if (mediaType) {
          return mediaType;
        } else if (httpPayloadMember.isStringSchema()) {
          return "text/plain";
        } else if (httpPayloadMember.isBlobSchema()) {
          return "application/octet-stream";
        } else {
          return defaultContentType;
        }
      } else if (!inputSchema.isUnitSchema()) {
        const hasBody = Object.values(members).find((m2) => {
          const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m2.getMergedTraits();
          const noPrefixHeaders = httpPrefixHeaders === void 0;
          return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
        });
        if (hasBody) {
          return defaultContentType;
        }
      }
    }
    async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
      let errorName = errorIdentifier;
      if (errorIdentifier.includes("#")) {
        [, errorName] = errorIdentifier.split("#");
      }
      const errorMetadata = {
        $metadata: metadata,
        $fault: response.statusCode < 500 ? "client" : "server"
      };
      if (!this.errorRegistry) {
        throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
      }
      try {
        const errorSchema = getErrorSchema?.(this.errorRegistry, errorName) ?? this.errorRegistry.getSchema(errorIdentifier);
        return { errorSchema, errorMetadata };
      } catch (e3) {
        dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
        const synthetic = this.errorRegistry;
        const baseExceptionSchema = synthetic.getBaseException();
        if (baseExceptionSchema) {
          const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
          throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
        }
        const d3 = dataObject;
        const message = d3?.message ?? d3?.Message ?? d3?.Error?.Message ?? d3?.Error?.message;
        throw this.decorateServiceException(Object.assign(new Error(message), {
          name: errorName
        }, errorMetadata), dataObject);
      }
    }
    compose(composite, errorIdentifier, defaultNamespace) {
      let namespace = defaultNamespace;
      if (errorIdentifier.includes("#")) {
        [namespace] = errorIdentifier.split("#");
      }
      const staticRegistry = TypeRegistry.for(namespace);
      const defaultSyntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
      composite.copyFrom(staticRegistry);
      composite.copyFrom(defaultSyntheticRegistry);
      this.errorRegistry = composite;
    }
    decorateServiceException(exception, additions = {}) {
      if (this.queryCompat) {
        const msg = exception.Message ?? additions.Message;
        const error = decorateServiceException(exception, additions);
        if (msg) {
          error.message = msg;
        }
        const errorObj = error.Error ?? {};
        errorObj.Type = error.Error?.Type;
        errorObj.Code = error.Error?.Code;
        errorObj.Message = error.Error?.message ?? error.Error?.Message ?? msg;
        error.Error = errorObj;
        const reqId = error.$metadata.requestId;
        if (reqId) {
          error.RequestId = reqId;
        }
        return error;
      }
      return decorateServiceException(exception, additions);
    }
    setQueryCompatError(output, response) {
      const queryErrorHeader = response.headers?.["x-amzn-query-error"];
      if (output !== void 0 && queryErrorHeader != null) {
        const [Code, Type] = queryErrorHeader.split(";");
        const keys = Object.keys(output);
        const Error2 = {
          Code,
          Type
        };
        output.Code = Code;
        output.Type = Type;
        for (let i3 = 0; i3 < keys.length; i3++) {
          const k3 = keys[i3];
          Error2[k3 === "message" ? "Message" : k3] = output[k3];
        }
        delete Error2.__type;
        output.Error = Error2;
      }
    }
    queryCompatOutput(queryCompatErrorData, errorData) {
      if (queryCompatErrorData.Error) {
        errorData.Error = queryCompatErrorData.Error;
      }
      if (queryCompatErrorData.Type) {
        errorData.Type = queryCompatErrorData.Type;
      }
      if (queryCompatErrorData.Code) {
        errorData.Code = queryCompatErrorData.Code;
      }
    }
    findQueryCompatibleError(registry, errorName) {
      try {
        return registry.getSchema(errorName);
      } catch (e3) {
        return registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName);
      }
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
  var SerdeContextConfig = class {
    constructor() {
      __publicField(this, "serdeContext");
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
  init_index_browser2();
  init_index_browser2();

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
  var UnionSerde = class {
    constructor(from, to) {
      __publicField(this, "from");
      __publicField(this, "to");
      __publicField(this, "keys");
      this.from = from;
      this.to = to;
      const keys = Object.keys(this.from);
      const set = new Set(keys);
      set.delete("__type");
      this.keys = set;
    }
    mark(key) {
      this.keys.delete(key);
    }
    hasUnknown() {
      return this.keys.size === 1 && Object.keys(this.to).length === 0;
    }
    writeUnknown() {
      if (this.hasUnknown()) {
        const k3 = this.keys.values().next().value;
        const v = this.from[k3];
        this.to.$unknown = [k3, v];
      }
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
  init_index_browser2();
  function jsonReviver(key, value, context) {
    if (context?.source) {
      const numericString = context.source;
      if (typeof value === "number") {
        if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
          const isFractional = numericString.includes(".");
          if (isFractional) {
            return new NumericValue(numericString, "bigDecimal");
          } else {
            return BigInt(numericString);
          }
        }
      }
    }
    return value;
  }

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
  init_index_browser2();
  var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => (context?.utf8Encoder ?? toUtf8)(body));

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
  var parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      try {
        return JSON.parse(encoded);
      } catch (e3) {
        if (e3?.name === "SyntaxError") {
          Object.defineProperty(e3, "$responseBodyText", {
            value: encoded
          });
        }
        throw e3;
      }
    }
    return {};
  });
  var findKey = (object, key) => Object.keys(object).find((k3) => k3.toLowerCase() === key.toLowerCase());
  var sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var loadRestJsonErrorCode = (output, data) => {
    return loadErrorCode(output, data, ["header", "code", "type"]);
  };
  var loadJsonRpcErrorCode = (output, data, queryCompat = false) => {
    return loadErrorCode(output, data, queryCompat ? ["code", "header", "type"] : ["type", "code", "header"]);
  };
  var loadErrorCode = ({ headers }, data, order) => {
    while (order.length > 0) {
      const location = order.shift();
      switch (location) {
        case "header":
          const headerKey = findKey(headers ?? {}, "x-amzn-errortype");
          if (headerKey !== void 0) {
            return sanitizeErrorCode(headers[headerKey]);
          }
          break;
        case "code":
          const codeKey = findKey(data ?? {}, "code");
          if (codeKey && data[codeKey] !== void 0) {
            return sanitizeErrorCode(data[codeKey]);
          }
          break;
        case "type":
          if (data?.__type !== void 0) {
            return sanitizeErrorCode(data.__type);
          }
          break;
      }
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
  var JsonShapeDeserializer = class extends SerdeContextConfig {
    constructor(settings) {
      super();
      __publicField(this, "settings");
      this.settings = settings;
    }
    async read(schema, data) {
      return this._read(schema, typeof data === "string" ? JSON.parse(data, jsonReviver) : await parseJsonBody(data, this.serdeContext));
    }
    readObject(schema, data) {
      return this._read(schema, data);
    }
    _read(schema, value) {
      const isObject = value !== null && typeof value === "object";
      const ns = NormalizedSchema.of(schema);
      if (isObject) {
        if (ns.isStructSchema()) {
          const record = value;
          const union = ns.isUnionSchema();
          const out = {};
          let nameMap = void 0;
          const { jsonName } = this.settings;
          if (jsonName) {
            nameMap = {};
          }
          let unionSerde;
          if (union) {
            unionSerde = new UnionSerde(record, out);
          }
          for (const [memberName, memberSchema] of ns.structIterator()) {
            let fromKey = memberName;
            if (jsonName) {
              fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
              nameMap[fromKey] = memberName;
            }
            if (union) {
              unionSerde.mark(fromKey);
            }
            if (record[fromKey] != null) {
              out[memberName] = this._read(memberSchema, record[fromKey]);
            }
          }
          if (union) {
            unionSerde.writeUnknown();
          } else if (typeof record.__type === "string") {
            for (const k3 in record) {
              const v = record[k3];
              const t = jsonName ? nameMap[k3] ?? k3 : k3;
              if (!(t in out)) {
                out[t] = v;
              }
            }
          }
          return out;
        }
        if (Array.isArray(value) && ns.isListSchema()) {
          const listMember = ns.getValueSchema();
          const out = [];
          for (const item of value) {
            out.push(this._read(listMember, item));
          }
          return out;
        }
        if (ns.isMapSchema()) {
          const mapMember = ns.getValueSchema();
          const out = {};
          for (const _k2 in value) {
            out[_k2] = this._read(mapMember, value[_k2]);
          }
          return out;
        }
      }
      if (ns.isBlobSchema() && typeof value === "string") {
        return fromBase64(value);
      }
      const mediaType = ns.getMergedTraits().mediaType;
      if (ns.isStringSchema() && typeof value === "string" && mediaType) {
        const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
        if (isJson) {
          return LazyJsonString.from(value);
        }
        return value;
      }
      if (ns.isTimestampSchema() && value != null) {
        const format2 = determineTimestampFormat(ns, this.settings);
        switch (format2) {
          case 5:
            return parseRfc3339DateTimeWithOffset(value);
          case 6:
            return parseRfc7231DateTime(value);
          case 7:
            return parseEpochTimestamp(value);
          default:
            console.warn("Missing timestamp format, parsing value with Date constructor:", value);
            return new Date(value);
        }
      }
      if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
        return BigInt(value);
      }
      if (ns.isBigDecimalSchema() && value != void 0) {
        if (value instanceof NumericValue) {
          return value;
        }
        const untyped = value;
        if (untyped.type === "bigDecimal" && "string" in untyped) {
          return new NumericValue(untyped.string, untyped.type);
        }
        return new NumericValue(String(value), "bigDecimal");
      }
      if (ns.isNumericSchema() && typeof value === "string") {
        switch (value) {
          case "Infinity":
            return Infinity;
          case "-Infinity":
            return -Infinity;
          case "NaN":
            return NaN;
        }
        return value;
      }
      if (ns.isDocumentSchema()) {
        if (isObject) {
          const out = Array.isArray(value) ? [] : {};
          for (const k3 in value) {
            const v = value[k3];
            if (v instanceof NumericValue) {
              out[k3] = v;
            } else {
              out[k3] = this._read(ns, v);
            }
          }
          return out;
        } else {
          return structuredClone(value);
        }
      }
      return value;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
  init_index_browser2();

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
  init_index_browser2();
  var NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
  var JsonReplacer = class {
    constructor() {
      __publicField(this, "values", /* @__PURE__ */ new Map());
      __publicField(this, "counter", 0);
      __publicField(this, "stage", 0);
    }
    createReplacer() {
      if (this.stage === 1) {
        throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      }
      if (this.stage === 2) {
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      }
      this.stage = 1;
      return (key, value) => {
        if (value instanceof NumericValue) {
          const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
          this.values.set(`"${v}"`, value.string);
          return v;
        }
        if (typeof value === "bigint") {
          const s = value.toString();
          const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
          this.values.set(`"${v}"`, s);
          return v;
        }
        return value;
      };
    }
    replaceInJson(json) {
      if (this.stage === 0) {
        throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      }
      if (this.stage === 2) {
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      }
      this.stage = 2;
      if (this.counter === 0) {
        return json;
      }
      for (const [key, value] of this.values) {
        json = json.replace(key, value);
      }
      return json;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
  var JsonShapeSerializer = class extends SerdeContextConfig {
    constructor(settings) {
      super();
      __publicField(this, "settings");
      __publicField(this, "buffer");
      __publicField(this, "useReplacer", false);
      __publicField(this, "rootSchema");
      this.settings = settings;
    }
    write(schema, value) {
      this.rootSchema = NormalizedSchema.of(schema);
      this.buffer = this._write(this.rootSchema, value);
    }
    flush() {
      const { rootSchema, useReplacer } = this;
      this.rootSchema = void 0;
      this.useReplacer = false;
      if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
        if (!useReplacer) {
          return JSON.stringify(this.buffer);
        }
        const replacer = new JsonReplacer();
        return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
      }
      return this.buffer;
    }
    writeDiscriminatedDocument(schema, value) {
      this.write(schema, value);
      if (typeof this.buffer === "object") {
        this.buffer.__type = NormalizedSchema.of(schema).getName(true);
      }
    }
    _write(schema, value, container) {
      const isObject = value !== null && typeof value === "object";
      const ns = NormalizedSchema.of(schema);
      if (isObject) {
        if (ns.isStructSchema()) {
          const record = value;
          const out = {};
          const { jsonName } = this.settings;
          let nameMap = void 0;
          if (jsonName) {
            nameMap = {};
          }
          let outCount = 0;
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const serializableValue = this._write(memberSchema, record[memberName], ns);
            if (serializableValue !== void 0) {
              let targetKey = memberName;
              if (jsonName) {
                targetKey = memberSchema.getMergedTraits().jsonName ?? memberName;
                nameMap[memberName] = targetKey;
              }
              out[targetKey] = serializableValue;
              outCount++;
            }
          }
          if (ns.isUnionSchema() && outCount === 0) {
            const { $unknown } = record;
            if (Array.isArray($unknown)) {
              const [k3, v] = $unknown;
              out[k3] = this._write(15, v);
            }
          } else if (typeof record.__type === "string") {
            for (const k3 in record) {
              const v = record[k3];
              const targetKey = jsonName ? nameMap[k3] ?? k3 : k3;
              if (!(targetKey in out)) {
                out[targetKey] = this._write(15, v);
              }
            }
          }
          return out;
        }
        if (Array.isArray(value) && ns.isListSchema()) {
          const listMember = ns.getValueSchema();
          const out = [];
          const sparse = !!ns.getMergedTraits().sparse;
          for (const item of value) {
            if (sparse || item != null) {
              out.push(this._write(listMember, item));
            }
          }
          return out;
        }
        if (ns.isMapSchema()) {
          const mapMember = ns.getValueSchema();
          const out = {};
          const sparse = !!ns.getMergedTraits().sparse;
          for (const _k2 in value) {
            const _v2 = value[_k2];
            if (sparse || _v2 != null) {
              out[_k2] = this._write(mapMember, _v2);
            }
          }
          return out;
        }
        if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
          if (ns === this.rootSchema) {
            return value;
          }
          return (this.serdeContext?.base64Encoder ?? toBase64)(value);
        }
        if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return value.toISOString().replace(".000Z", "Z");
            case 6:
              return dateToUtcString(value);
            case 7:
              return value.getTime() / 1e3;
            default:
              console.warn("Missing timestamp format, using epoch seconds", value);
              return value.getTime() / 1e3;
          }
        }
        if (value instanceof NumericValue) {
          this.useReplacer = true;
        }
      }
      if (value === null && container?.isStructSchema()) {
        return void 0;
      }
      if (ns.isStringSchema()) {
        if (typeof value === "undefined" && ns.isIdempotencyToken()) {
          return generateIdempotencyToken();
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (value != null && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString.from(value);
          }
        }
        return value;
      }
      if (typeof value === "number" && ns.isNumericSchema()) {
        if (Math.abs(value) === Infinity || isNaN(value)) {
          return String(value);
        }
        return value;
      }
      if (typeof value === "string" && ns.isBlobSchema()) {
        if (ns === this.rootSchema) {
          return value;
        }
        return (this.serdeContext?.base64Encoder ?? toBase64)(value);
      }
      if (typeof value === "bigint") {
        this.useReplacer = true;
      }
      if (ns.isDocumentSchema()) {
        if (isObject) {
          const out = Array.isArray(value) ? [] : {};
          for (const k3 in value) {
            const v = value[k3];
            if (v instanceof NumericValue) {
              this.useReplacer = true;
              out[k3] = v;
            } else {
              out[k3] = this._write(ns, v);
            }
          }
          return out;
        } else {
          return structuredClone(value);
        }
      }
      return value;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
  var JsonCodec = class extends SerdeContextConfig {
    constructor(settings) {
      super();
      __publicField(this, "settings");
      this.settings = settings;
    }
    createSerializer() {
      const serializer = new JsonShapeSerializer(this.settings);
      serializer.setSerdeContext(this.serdeContext);
      return serializer;
    }
    createDeserializer() {
      const deserializer = new JsonShapeDeserializer(this.settings);
      deserializer.setSerdeContext(this.serdeContext);
      return deserializer;
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
  var AwsJsonRpcProtocol = class extends RpcProtocol {
    constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries3, serviceTarget, awsQueryCompatible, jsonCodec }) {
      super({
        defaultNamespace,
        errorTypeRegistries: errorTypeRegistries3
      });
      __publicField(this, "serializer");
      __publicField(this, "deserializer");
      __publicField(this, "serviceTarget");
      __publicField(this, "codec");
      __publicField(this, "mixin");
      __publicField(this, "awsQueryCompatible");
      this.serviceTarget = serviceTarget;
      this.codec = jsonCodec ?? new JsonCodec({
        timestampFormat: {
          useTrait: true,
          default: 7
        },
        jsonName: false
      });
      this.serializer = this.codec.createSerializer();
      this.deserializer = this.codec.createDeserializer();
      this.awsQueryCompatible = !!awsQueryCompatible;
      this.mixin = new ProtocolLib(this.awsQueryCompatible);
    }
    async serializeRequest(operationSchema, input, context) {
      const request = await super.serializeRequest(operationSchema, input, context);
      if (!request.path.endsWith("/")) {
        request.path += "/";
      }
      request.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`;
      request.headers["x-amz-target"] = `${this.serviceTarget}.${operationSchema.name}`;
      if (this.awsQueryCompatible) {
        request.headers["x-amzn-query-mode"] = "true";
      }
      if (deref(operationSchema.input) === "unit" || !request.body) {
        request.body = "{}";
      }
      return request;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
      const { awsQueryCompatible } = this;
      if (awsQueryCompatible) {
        this.mixin.setQueryCompatError(dataObject, response);
      }
      const errorIdentifier = loadJsonRpcErrorCode(response, dataObject, awsQueryCompatible) ?? "Unknown";
      this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
      const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata, awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0);
      const ns = NormalizedSchema.of(errorSchema);
      const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
      const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
      const exception = new ErrorCtor({});
      const output = {};
      const errorDeserializer = this.codec.createDeserializer();
      for (const [name, member2] of ns.structIterator()) {
        if (dataObject[name] != null) {
          output[name] = errorDeserializer.readObject(member2, dataObject[name]);
        }
      }
      if (awsQueryCompatible) {
        this.mixin.queryCompatOutput(dataObject, output);
      }
      throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
        $fault: ns.getMergedTraits().error,
        message
      }, output), dataObject);
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
  var AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
    constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries3, serviceTarget, awsQueryCompatible, jsonCodec }) {
      super({
        defaultNamespace,
        errorTypeRegistries: errorTypeRegistries3,
        serviceTarget,
        awsQueryCompatible,
        jsonCodec
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  };

  // node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js
  var AwsRestJsonProtocol = class extends HttpBindingProtocol {
    constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries3 }) {
      super({
        defaultNamespace,
        errorTypeRegistries: errorTypeRegistries3
      });
      __publicField(this, "serializer");
      __publicField(this, "deserializer");
      __publicField(this, "codec");
      __publicField(this, "mixin", new ProtocolLib());
      const settings = {
        timestampFormat: {
          useTrait: true,
          default: 7
        },
        httpBindings: true,
        jsonName: true
      };
      this.codec = new JsonCodec(settings);
      this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
      this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(serdeContext) {
      this.codec.setSerdeContext(serdeContext);
      super.setSerdeContext(serdeContext);
    }
    async serializeRequest(operationSchema, input, context) {
      const request = await super.serializeRequest(operationSchema, input, context);
      const inputSchema = NormalizedSchema.of(operationSchema.input);
      if (!request.headers["content-type"]) {
        const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
        if (contentType) {
          request.headers["content-type"] = contentType;
        }
      }
      if (request.body == null && request.headers["content-type"] === this.getDefaultContentType()) {
        request.body = "{}";
      }
      return request;
    }
    async deserializeResponse(operationSchema, context, response) {
      const output = await super.deserializeResponse(operationSchema, context, response);
      const outputSchema = NormalizedSchema.of(operationSchema.output);
      for (const [name, member2] of outputSchema.structIterator()) {
        if (member2.getMemberTraits().httpPayload && !(name in output)) {
          output[name] = null;
        }
      }
      return output;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
      const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
      this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
      const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
      const ns = NormalizedSchema.of(errorSchema);
      const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
      const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
      const exception = new ErrorCtor({});
      await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
      const output = {};
      const errorDeserializer = this.codec.createDeserializer();
      for (const [name, member2] of ns.structIterator()) {
        const target = member2.getMergedTraits().jsonName ?? name;
        output[name] = errorDeserializer.readObject(member2, dataObject[target]);
      }
      throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
        $fault: ns.getMergedTraits().error,
        message
      }, output), dataObject);
    }
    getDefaultContentType() {
      return "application/json";
    }
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.shared.js
  init_index_browser2();

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/endpointResolver.js
  init_index_browser();

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/bdd.js
  init_index_browser();
  var m = "ref";
  var a = -1;
  var b = true;
  var c = "isSet";
  var d = "PartitionResult";
  var e = "booleanEquals";
  var f = "getAttr";
  var g = "stringEquals";
  var h = { [m]: "Endpoint" };
  var i = { [m]: d };
  var j = { [m]: "Region" };
  var k = {};
  var l = [j];
  var _data = {
    conditions: [
      [c, [h]],
      [c, l],
      ["aws.partition", l, d],
      [e, [{ [m]: "UseFIPS" }, b]],
      [e, [{ fn: f, argv: [i, "supportsFIPS"] }, b]],
      [e, [{ [m]: "UseDualStack" }, b]],
      [e, [{ fn: f, argv: [i, "supportsDualStack"] }, b]],
      [g, [{ fn: f, argv: [i, "name"] }, "aws"]],
      [g, [j, "us-east-1"]],
      [g, [j, "us-east-2"]],
      [g, [j, "us-west-1"]],
      [g, [j, "us-west-2"]]
    ],
    results: [
      [a],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [h, k],
      ["https://cognito-idp-fips.us-east-1.amazonaws.com", k],
      ["https://cognito-idp-fips.us-east-2.amazonaws.com", k],
      ["https://cognito-idp-fips.us-west-1.amazonaws.com", k],
      ["https://cognito-idp-fips.us-west-2.amazonaws.com", k],
      ["https://cognito-idp-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://cognito-idp-fips.{Region}.{PartitionResult#dnsSuffix}", k],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://cognito-idp.{Region}.amazonaws.com", k],
      ["https://cognito-idp.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      ["https://cognito-idp.{Region}.{PartitionResult#dnsSuffix}", k],
      [a, "Invalid Configuration: Missing Region"]
    ]
  };
  var root = 2;
  var r = 1e8;
  var nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    17,
    3,
    1,
    4,
    r + 16,
    2,
    5,
    r + 16,
    3,
    9,
    6,
    5,
    7,
    r + 15,
    6,
    8,
    r + 14,
    7,
    r + 12,
    r + 13,
    4,
    11,
    10,
    5,
    r + 9,
    r + 11,
    5,
    12,
    r + 10,
    6,
    13,
    r + 9,
    8,
    r + 4,
    14,
    9,
    r + 5,
    15,
    10,
    r + 6,
    16,
    11,
    r + 7,
    r + 8,
    3,
    r + 1,
    18,
    5,
    r + 2,
    r + 3
  ]);
  var bdd = BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/endpointResolver.js
  var cache = new EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  var defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => decideEndpoint(bdd, {
      endpointParams,
      logger: context.logger
    }));
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js
  var CognitoIdentityProviderServiceException = class _CognitoIdentityProviderServiceException extends ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, _CognitoIdentityProviderServiceException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/errors.js
  var AccessDeniedException = class _AccessDeniedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "AccessDeniedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _AccessDeniedException.prototype);
    }
  };
  var InternalErrorException = class _InternalErrorException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InternalErrorException",
        $fault: "server",
        ...opts
      });
      __publicField(this, "name", "InternalErrorException");
      __publicField(this, "$fault", "server");
      Object.setPrototypeOf(this, _InternalErrorException.prototype);
    }
  };
  var InvalidParameterException = class _InvalidParameterException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidParameterException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidParameterException");
      __publicField(this, "$fault", "client");
      __publicField(this, "reasonCode");
      Object.setPrototypeOf(this, _InvalidParameterException.prototype);
      this.reasonCode = opts.reasonCode;
    }
  };
  var NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "NotAuthorizedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "NotAuthorizedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
    }
  };
  var OperationNotEnabledException = class _OperationNotEnabledException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "OperationNotEnabledException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "OperationNotEnabledException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _OperationNotEnabledException.prototype);
    }
  };
  var ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ResourceNotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
    }
  };
  var TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "TooManyRequestsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
    }
  };
  var UserImportInProgressException = class _UserImportInProgressException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserImportInProgressException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserImportInProgressException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserImportInProgressException.prototype);
    }
  };
  var InternalServerException = class _InternalServerException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...opts
      });
      __publicField(this, "name", "InternalServerException");
      __publicField(this, "$fault", "server");
      Object.setPrototypeOf(this, _InternalServerException.prototype);
    }
  };
  var LimitExceededException = class _LimitExceededException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "LimitExceededException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "LimitExceededException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _LimitExceededException.prototype);
    }
  };
  var UserNotFoundException = class _UserNotFoundException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserNotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserNotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserNotFoundException.prototype);
    }
  };
  var InvalidLambdaResponseException = class _InvalidLambdaResponseException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidLambdaResponseException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidLambdaResponseException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidLambdaResponseException.prototype);
    }
  };
  var TooManyFailedAttemptsException = class _TooManyFailedAttemptsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "TooManyFailedAttemptsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "TooManyFailedAttemptsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _TooManyFailedAttemptsException.prototype);
    }
  };
  var UnexpectedLambdaException = class _UnexpectedLambdaException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnexpectedLambdaException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnexpectedLambdaException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnexpectedLambdaException.prototype);
    }
  };
  var UserLambdaValidationException = class _UserLambdaValidationException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserLambdaValidationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserLambdaValidationException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserLambdaValidationException.prototype);
    }
  };
  var CodeDeliveryFailureException = class _CodeDeliveryFailureException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "CodeDeliveryFailureException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "CodeDeliveryFailureException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _CodeDeliveryFailureException.prototype);
    }
  };
  var InvalidPasswordException = class _InvalidPasswordException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidPasswordException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidPasswordException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidPasswordException.prototype);
    }
  };
  var InvalidSmsRoleAccessPolicyException = class _InvalidSmsRoleAccessPolicyException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidSmsRoleAccessPolicyException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidSmsRoleAccessPolicyException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidSmsRoleAccessPolicyException.prototype);
    }
  };
  var InvalidSmsRoleTrustRelationshipException = class _InvalidSmsRoleTrustRelationshipException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidSmsRoleTrustRelationshipException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidSmsRoleTrustRelationshipException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidSmsRoleTrustRelationshipException.prototype);
    }
  };
  var PreconditionNotMetException = class _PreconditionNotMetException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "PreconditionNotMetException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "PreconditionNotMetException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _PreconditionNotMetException.prototype);
    }
  };
  var UnsupportedUserStateException = class _UnsupportedUserStateException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnsupportedUserStateException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnsupportedUserStateException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnsupportedUserStateException.prototype);
    }
  };
  var UsernameExistsException = class _UsernameExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UsernameExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UsernameExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UsernameExistsException.prototype);
    }
  };
  var AliasExistsException = class _AliasExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "AliasExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "AliasExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _AliasExistsException.prototype);
    }
  };
  var InvalidUserPoolConfigurationException = class _InvalidUserPoolConfigurationException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidUserPoolConfigurationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidUserPoolConfigurationException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidUserPoolConfigurationException.prototype);
    }
  };
  var InvalidEmailRoleAccessPolicyException = class _InvalidEmailRoleAccessPolicyException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidEmailRoleAccessPolicyException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidEmailRoleAccessPolicyException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidEmailRoleAccessPolicyException.prototype);
    }
  };
  var MFAMethodNotFoundException = class _MFAMethodNotFoundException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "MFAMethodNotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "MFAMethodNotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _MFAMethodNotFoundException.prototype);
    }
  };
  var PasswordResetRequiredException = class _PasswordResetRequiredException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "PasswordResetRequiredException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "PasswordResetRequiredException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _PasswordResetRequiredException.prototype);
    }
  };
  var UnsupportedOperationException = class _UnsupportedOperationException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnsupportedOperationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnsupportedOperationException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnsupportedOperationException.prototype);
    }
  };
  var UserNotConfirmedException = class _UserNotConfirmedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserNotConfirmedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserNotConfirmedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserNotConfirmedException.prototype);
    }
  };
  var UserPoolAddOnNotEnabledException = class _UserPoolAddOnNotEnabledException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserPoolAddOnNotEnabledException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserPoolAddOnNotEnabledException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserPoolAddOnNotEnabledException.prototype);
    }
  };
  var CodeMismatchException = class _CodeMismatchException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "CodeMismatchException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "CodeMismatchException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _CodeMismatchException.prototype);
    }
  };
  var ExpiredCodeException = class _ExpiredCodeException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ExpiredCodeException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ExpiredCodeException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ExpiredCodeException.prototype);
    }
  };
  var PasswordHistoryPolicyViolationException = class _PasswordHistoryPolicyViolationException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "PasswordHistoryPolicyViolationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "PasswordHistoryPolicyViolationException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _PasswordHistoryPolicyViolationException.prototype);
    }
  };
  var SoftwareTokenMFANotFoundException = class _SoftwareTokenMFANotFoundException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "SoftwareTokenMFANotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "SoftwareTokenMFANotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _SoftwareTokenMFANotFoundException.prototype);
    }
  };
  var ConcurrentModificationException = class _ConcurrentModificationException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ConcurrentModificationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ConcurrentModificationException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
    }
  };
  var ForbiddenException = class _ForbiddenException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ForbiddenException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ForbiddenException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ForbiddenException.prototype);
    }
  };
  var WebAuthnChallengeNotFoundException = class _WebAuthnChallengeNotFoundException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnChallengeNotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnChallengeNotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnChallengeNotFoundException.prototype);
    }
  };
  var WebAuthnClientMismatchException = class _WebAuthnClientMismatchException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnClientMismatchException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnClientMismatchException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnClientMismatchException.prototype);
    }
  };
  var WebAuthnCredentialNotSupportedException = class _WebAuthnCredentialNotSupportedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnCredentialNotSupportedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnCredentialNotSupportedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnCredentialNotSupportedException.prototype);
    }
  };
  var WebAuthnNotEnabledException = class _WebAuthnNotEnabledException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnNotEnabledException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnNotEnabledException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnNotEnabledException.prototype);
    }
  };
  var WebAuthnOriginNotAllowedException = class _WebAuthnOriginNotAllowedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnOriginNotAllowedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnOriginNotAllowedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnOriginNotAllowedException.prototype);
    }
  };
  var WebAuthnRelyingPartyMismatchException = class _WebAuthnRelyingPartyMismatchException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnRelyingPartyMismatchException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnRelyingPartyMismatchException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnRelyingPartyMismatchException.prototype);
    }
  };
  var DeviceKeyExistsException = class _DeviceKeyExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "DeviceKeyExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "DeviceKeyExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _DeviceKeyExistsException.prototype);
    }
  };
  var GroupExistsException = class _GroupExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "GroupExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "GroupExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _GroupExistsException.prototype);
    }
  };
  var DuplicateProviderException = class _DuplicateProviderException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "DuplicateProviderException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "DuplicateProviderException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _DuplicateProviderException.prototype);
    }
  };
  var ManagedLoginBrandingExistsException = class _ManagedLoginBrandingExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ManagedLoginBrandingExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ManagedLoginBrandingExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ManagedLoginBrandingExistsException.prototype);
    }
  };
  var TermsExistsException = class _TermsExistsException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "TermsExistsException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "TermsExistsException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _TermsExistsException.prototype);
    }
  };
  var FeatureUnavailableInTierException = class _FeatureUnavailableInTierException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "FeatureUnavailableInTierException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "FeatureUnavailableInTierException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _FeatureUnavailableInTierException.prototype);
    }
  };
  var TierChangeNotAllowedException = class _TierChangeNotAllowedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "TierChangeNotAllowedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "TierChangeNotAllowedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _TierChangeNotAllowedException.prototype);
    }
  };
  var UserPoolTaggingException = class _UserPoolTaggingException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UserPoolTaggingException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UserPoolTaggingException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UserPoolTaggingException.prototype);
    }
  };
  var InvalidOAuthFlowException = class _InvalidOAuthFlowException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "InvalidOAuthFlowException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidOAuthFlowException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidOAuthFlowException.prototype);
    }
  };
  var ScopeDoesNotExistException = class _ScopeDoesNotExistException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "ScopeDoesNotExistException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ScopeDoesNotExistException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ScopeDoesNotExistException.prototype);
    }
  };
  var UnsupportedIdentityProviderException = class _UnsupportedIdentityProviderException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnsupportedIdentityProviderException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnsupportedIdentityProviderException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnsupportedIdentityProviderException.prototype);
    }
  };
  var RefreshTokenReuseException = class _RefreshTokenReuseException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "RefreshTokenReuseException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "RefreshTokenReuseException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _RefreshTokenReuseException.prototype);
    }
  };
  var UnauthorizedException = class _UnauthorizedException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnauthorizedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnauthorizedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnauthorizedException.prototype);
    }
  };
  var UnsupportedTokenTypeException = class _UnsupportedTokenTypeException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "UnsupportedTokenTypeException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnsupportedTokenTypeException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnsupportedTokenTypeException.prototype);
    }
  };
  var WebAuthnConfigurationMissingException = class _WebAuthnConfigurationMissingException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "WebAuthnConfigurationMissingException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "WebAuthnConfigurationMissingException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _WebAuthnConfigurationMissingException.prototype);
    }
  };
  var EnableSoftwareTokenMFAException = class _EnableSoftwareTokenMFAException extends CognitoIdentityProviderServiceException {
    constructor(opts) {
      super({
        name: "EnableSoftwareTokenMFAException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "EnableSoftwareTokenMFAException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _EnableSoftwareTokenMFAException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/schemas/schemas_0.js
  var _A = "Actions";
  var _AA = "ApplicationArn";
  var _AACUO = "AllowAdminCreateUserOnly";
  var _AAl = "AliasAttributes";
  var _AAu = "AuthenticatorAttachment";
  var _AC = "AvailableChallenges";
  var _ACSUR = "AdminConfirmSignUpRequest";
  var _ACT = "AnalyticsConfigurationType";
  var _ACUC = "AdminCreateUserConfig";
  var _ACUCT = "AdminCreateUserConfigType";
  var _ACUR = "AdminCreateUserRequest";
  var _ACn = "AnalyticsConfiguration";
  var _ADE = "AccessDeniedException";
  var _ADT = "AttributeDataType";
  var _ADUAR = "AdminDeleteUserAttributesRequest";
  var _AEE = "AliasExistsException";
  var _AEI = "AnalyticsEndpointId";
  var _AF = "AuthFlow";
  var _AFAF = "AllowedFirstAuthFactors";
  var _AGURd = "AdminGetUserResponse";
  var _AI = "ApplicationId";
  var _AIAR = "AdminInitiateAuthRequest";
  var _AIARd = "AdminInitiateAuthResponse";
  var _ALTt = "AttributeListType";
  var _AM = "AnalyticsMetadata";
  var _AMT = "AnalyticsMetadataType";
  var _AMt = "AttributeMapping";
  var _AN = "AttributeName";
  var _AOAF = "AllowedOAuthFlows";
  var _AOAFUPC = "AllowedOAuthFlowsUserPoolClient";
  var _AOAS = "AllowedOAuthScopes";
  var _AP = "AuthParameters";
  var _APT = "AuthParametersType";
  var _AR = "AuthenticationResult";
  var _ARS = "AccountRecoverySetting";
  var _ARST = "AccountRecoverySettingType";
  var _ART = "AuthenticationResultType";
  var _ARTACR = "AdminRespondToAuthChallengeRequest";
  var _ARTACRd = "AdminRespondToAuthChallengeResponse";
  var _ARUPR = "AdminResetUserPasswordRequest";
  var _ARVBU = "AttributesRequireVerificationBeforeUpdate";
  var _ASAF = "AdvancedSecurityAdditionalFlows";
  var _ASAFT = "AdvancedSecurityAdditionalFlowsType";
  var _ASM = "AdvancedSecurityMode";
  var _ASV = "AuthSessionValidity";
  var _ATG = "AttributesToGet";
  var _ATV = "AccessTokenValidity";
  var _ATc = "AccessToken";
  var _ATt = "AttributeType";
  var _ATu = "AuthenticatorTransports";
  var _AUUAR = "AdminUpdateUserAttributesRequest";
  var _AVA = "AutoVerifiedAttributes";
  var _AVT = "AttributeValueType";
  var _Ar = "Arn";
  var _BIPRL = "BlockedIPRangeList";
  var _CAC = "CreateAuthChallenge";
  var _CAM = "CustomAuthMode";
  var _CAr = "CreatedAt";
  var _CC = "ConfirmationCode";
  var _CCAT = "CompromisedCredentialsActionsType";
  var _CCRCT = "CompromisedCredentialsRiskConfigurationType";
  var _CD = "ContextData";
  var _CDFE = "CodeDeliveryFailureException";
  var _CDT = "ContextDataType";
  var _CDr = "CreationDate";
  var _CDu = "CustomDomain";
  var _CELVCT = "CustomEmailLambdaVersionConfigType";
  var _CES = "CustomEmailSender";
  var _CFPR = "ConfirmForgotPasswordRequest";
  var _CI = "ClientId";
  var _CIPR = "CreateIdentityProviderRequest";
  var _CIT = "ClientIdType";
  var _CIr = "CredentialId";
  var _CM = "ClientMetadata";
  var _CME = "CodeMismatchException";
  var _CMEo = "ConcurrentModificationException";
  var _CMu = "CustomMessage";
  var _CN = "ChallengeName";
  var _CNl = "ClientName";
  var _CP = "ChallengeParameters";
  var _CR = "ChallengeResponses";
  var _CROND = "ChallengeRequiredOnNewDevice";
  var _CRTh = "ChallengeResponsesType";
  var _CS = "ClientSecret";
  var _CSMSLVCT = "CustomSMSLambdaVersionConfigType";
  var _CSMSS = "CustomSMSSender";
  var _CST = "ClientSecretType";
  var _CSUR = "ConfirmSignUpRequest";
  var _CSVH = "CSVHeader";
  var _CSa = "CaseSensitive";
  var _CSo = "ConfigurationSet";
  var _CTR = "CreateTermsRequest";
  var _CUAF = "ConfiguredUserAuthFactors";
  var _CUPCR = "CreateUserPoolClientRequest";
  var _CUPR = "CreateUserPoolRequest";
  var _CUPRR = "CreateUserPoolReplicaRequest";
  var _CURL = "CallbackURLs";
  var _DAC = "DefineAuthChallenge";
  var _DC = "DeviceConfiguration";
  var _DCT = "DeviceConfigurationType";
  var _DDM = "DesiredDeliveryMediums";
  var _DEO = "DefaultEmailOption";
  var _DGK = "DeviceGroupKey";
  var _DK = "DeviceKey";
  var _DKEE = "DeviceKeyExistsException";
  var _DM = "DeliveryMedium";
  var _DOA = "DeveloperOnlyAttribute";
  var _DOROUP = "DeviceOnlyRememberedOnUserPrompt";
  var _DP = "DeletionProtection";
  var _DPE = "DuplicateProviderException";
  var _DRURI = "DefaultRedirectURI";
  var _DUAR = "DeleteUserAttributesRequest";
  var _Do = "Domain";
  var _E = "Enabled";
  var _EA = "EventAction";
  var _EAF = "ExplicitAuthFlows";
  var _EC = "EmailConfiguration";
  var _ECE = "ExpiredCodeException";
  var _ECF = "EmailConfigurationFailure";
  var _ECT = "EmailConfigurationType";
  var _ED = "EncodedData";
  var _EFv = "EventFilter";
  var _EIx = "ExternalId";
  var _EIxp = "ExpiresIn";
  var _EM = "EmailMessage";
  var _EMBL = "EmailMessageByLink";
  var _ENOU = "EstimatedNumberOfUsers";
  var _EPAUCD = "EnablePropagateAdditionalUserContextData";
  var _ESA = "EmailSendingAccount";
  var _ESBL = "EmailSubjectByLink";
  var _ESTMFAE = "EnableSoftwareTokenMFAException";
  var _ESm = "EmailSubject";
  var _ETR = "EnableTokenRevocation";
  var _EVM = "EmailVerificationMessage";
  var _EVS = "EmailVerificationSubject";
  var _En = "Enforcement";
  var _F = "From";
  var _FAC = "ForceAliasCreation";
  var _FCN = "FriendlyCredentialName";
  var _FE = "ForbiddenException";
  var _FPR = "ForgotPasswordRequest";
  var _FUITE = "FeatureUnavailableInTierException";
  var _Fe = "Feature";
  var _Fi = "Filter";
  var _GCSVHRe = "GetCSVHeaderResponse";
  var _GEE = "GroupExistsException";
  var _GS = "GenerateSecret";
  var _GTFRTR = "GetTokensFromRefreshTokenRequest";
  var _GUAFRe = "GetUserAuthFactorsResponse";
  var _GUAVCR = "GetUserAttributeVerificationCodeRequest";
  var _GURe = "GetUserResponse";
  var _HH = "HttpHeaders";
  var _HHL = "HttpHeaderList";
  var _HHt = "HttpHeader";
  var _IA = "IpAddress";
  var _IAR = "InitiateAuthRequest";
  var _IARn = "InitiateAuthResponse";
  var _IAn = "InitiateAuth";
  var _IC = "IssuerConfiguration";
  var _ICT = "IssuerConfigurationType";
  var _IEE = "InternalErrorException";
  var _IERAPE = "InvalidEmailRoleAccessPolicyException";
  var _IF = "InboundFederation";
  var _IFLT = "InboundFederationLambdaType";
  var _II = "IdpIdentifiers";
  var _ILRE = "InvalidLambdaResponseException";
  var _IMT = "InviteMessageTemplate";
  var _IOAFE = "InvalidOAuthFlowException";
  var _IPE = "InvalidParameterException";
  var _IPEn = "InvalidPasswordException";
  var _IPT = "IdentityProviderType";
  var _ISE = "InternalServerException";
  var _ISRAPE = "InvalidSmsRoleAccessPolicyException";
  var _ISRTRE = "InvalidSmsRoleTrustRelationshipException";
  var _IT = "IdToken";
  var _ITV = "IdTokenValidity";
  var _IUPCE = "InvalidUserPoolConfigurationException";
  var _Id = "Id";
  var _KC = "KeyConfiguration";
  var _KCT = "KeyConfigurationType";
  var _KKA = "KmsKeyArn";
  var _KMSKID = "KMSKeyID";
  var _KT = "KeyType";
  var _L = "Limit";
  var _LAa = "LambdaArn";
  var _LC = "LambdaConfig";
  var _LCT = "LambdaConfigType";
  var _LEE = "LimitExceededException";
  var _LMD = "LastModifiedDate";
  var _LTFRRi = "ListTagsForResourceResponse";
  var _LUR = "ListUsersRequest";
  var _LURL = "LogoutURLs";
  var _LV = "LambdaVersion";
  var _Li = "Links";
  var _MAe = "MessageAction";
  var _MC = "MfaConfiguration";
  var _MFAMNFE = "MFAMethodNotFoundException";
  var _MFAO = "MFAOptions";
  var _MFAOLT = "MFAOptionListType";
  var _MFAOT = "MFAOptionType";
  var _ML = "MinimumLength";
  var _MLBEE = "ManagedLoginBrandingExistsException";
  var _MLa = "MaxLength";
  var _MLi = "MinLength";
  var _MTT = "MessageTemplateType";
  var _MV = "MinValue";
  var _MVa = "MaxValue";
  var _Mu = "Mutable";
  var _NAC = "NumberAttributeConstraints";
  var _NACT = "NumberAttributeConstraintsType";
  var _NAE = "NotAuthorizedException";
  var _NDM = "NewDeviceMetadata";
  var _NDMT = "NewDeviceMetadataType";
  var _Na = "Name";
  var _ONEE = "OperationNotEnabledException";
  var _P = "Password";
  var _PA = "PreAuthentication";
  var _PAo = "PostAuthentication";
  var _PC = "PostConfirmation";
  var _PD = "ProviderDetails";
  var _PHPVE = "PasswordHistoryPolicyViolationException";
  var _PHS = "PasswordHistorySize";
  var _PMS = "PreferredMfaSetting";
  var _PN = "ProviderName";
  var _PNME = "PreconditionNotMetException";
  var _PNo = "PoolName";
  var _PPT = "PasswordPolicyType";
  var _PPa = "PasswordPolicy";
  var _PRRE = "PasswordResetRequiredException";
  var _PSU = "PreSignUp";
  var _PT = "PasswordType";
  var _PTG = "PreTokenGeneration";
  var _PTGC = "PreTokenGenerationConfig";
  var _PTGVCT = "PreTokenGenerationVersionConfigType";
  var _PTa = "PaginationToken";
  var _PTr = "ProviderType";
  var _PUEE = "PreventUserExistenceErrors";
  var _Po = "Policies";
  var _Pri = "Priority";
  var _RA = "RoleArn";
  var _RAe = "ReadAttributes";
  var _RAes = "ResourceArn";
  var _RCCR = "ResendConfirmationCodeRequest";
  var _RECT = "RiskExceptionConfigurationType";
  var _RGPS = "RetryGracePeriodSeconds";
  var _RLe = "RequireLowercase";
  var _RM = "RecoveryMechanisms";
  var _RMT = "RecoveryMechanismsType";
  var _RN = "RegionName";
  var _RNFE = "ResourceNotFoundException";
  var _RNe = "RequireNumbers";
  var _ROT = "RecoveryOptionType";
  var _RPI = "RelyingPartyId";
  var _RR = "ReplicaRegions";
  var _RSeq = "RequireSymbols";
  var _RT = "RefreshToken";
  var _RTACR = "RespondToAuthChallengeRequest";
  var _RTACRe = "RespondToAuthChallengeResponse";
  var _RTEA = "ReplyToEmailAddress";
  var _RTR = "RefreshTokenRotation";
  var _RTRE = "RefreshTokenReuseException";
  var _RTRT = "RefreshTokenRotationType";
  var _RTV = "RefreshTokenValidity";
  var _RU = "RequireUppercase";
  var _Re = "Required";
  var _S = "Session";
  var _SA = "SourceArn";
  var _SAC = "StringAttributeConstraints";
  var _SACT = "StringAttributeConstraintsType";
  var _SALT = "SchemaAttributesListType";
  var _SAM = "SmsAuthenticationMessage";
  var _SAT = "SchemaAttributeType";
  var _SAc = "SchemaAttributes";
  var _SCA = "SnsCallerArn";
  var _SCF = "SmsConfigurationFailure";
  var _SCTm = "SmsConfigurationType";
  var _SCm = "SmsConfiguration";
  var _SDNEE = "ScopeDoesNotExistException";
  var _SH = "SecretHash";
  var _SHT = "SecretHashType";
  var _SIP = "SupportedIdentityProviders";
  var _SIPRL = "SkippedIPRangeList";
  var _SIPT = "SignInPolicyType";
  var _SIPi = "SignInPolicy";
  var _SM = "SmsMessage";
  var _SMSM = "SMSMessage";
  var _SN = "ServerName";
  var _SP = "ServerPath";
  var _SRn = "SnsRegion";
  var _ST = "SessionType";
  var _STMFANFE = "SoftwareTokenMFANotFoundException";
  var _SUR = "SignUpRequest";
  var _SVM = "SmsVerificationMessage";
  var _Sch = "Schema";
  var _St = "Status";
  var _TCNAE = "TierChangeNotAllowedException";
  var _TEE = "TermsExistsException";
  var _TI = "TermsId";
  var _TK = "TagKeys";
  var _TMFAE = "TooManyFailedAttemptsException";
  var _TMRE = "TooManyRequestsException";
  var _TMT = "TokenModelType";
  var _TN = "TermsName";
  var _TP = "TemporaryPassword";
  var _TPVD = "TemporaryPasswordValidityDays";
  var _TRR = "TagResourceRequest";
  var _TS = "TermsSource";
  var _TT = "TokenType";
  var _TTe = "TermsType";
  var _TVU = "TokenValidityUnits";
  var _TVUT = "TokenValidityUnitsType";
  var _Ta = "Tags";
  var _Ty = "Type";
  var _U = "Username";
  var _UA = "UserAttributes";
  var _UAN = "UserAttributeNames";
  var _UAUS = "UserAttributeUpdateSettings";
  var _UAUST = "UserAttributeUpdateSettingsType";
  var _UAVD = "UnusedAccountValidityDays";
  var _UAs = "UsernameAttributes";
  var _UC = "UsernameConfiguration";
  var _UCD = "UserCreateDate";
  var _UCDT = "UserContextDataType";
  var _UCDs = "UserContextData";
  var _UCT = "UsernameConfigurationType";
  var _UDS = "UserDataShared";
  var _UE = "UnauthorizedException";
  var _UEE = "UsernameExistsException";
  var _UIIPE = "UserImportInProgressException";
  var _UIPE = "UnsupportedIdentityProviderException";
  var _UIPR = "UpdateIdentityProviderRequest";
  var _ULE = "UnexpectedLambdaException";
  var _ULMD = "UserLastModifiedDate";
  var _ULVE = "UserLambdaValidationException";
  var _UM = "UserMigration";
  var _UMFASL = "UserMFASettingList";
  var _UNCE = "UserNotConfirmedException";
  var _UNFE = "UserNotFoundException";
  var _UOE = "UnsupportedOperationException";
  var _UPAO = "UserPoolAddOns";
  var _UPAONEE = "UserPoolAddOnNotEnabledException";
  var _UPAOT = "UserPoolAddOnsType";
  var _UPCT = "UserPoolClientType";
  var _UPDT = "UserPoolDescriptionType";
  var _UPI = "UserPoolId";
  var _UPPT = "UserPoolPolicyType";
  var _UPT = "UserPoolTags";
  var _UPTE = "UserPoolTaggingException";
  var _UPTs = "UserPoolTier";
  var _UPTse = "UserPoolType";
  var _URR = "UntagResourceRequest";
  var _US = "UserStatus";
  var _UT = "UsernameType";
  var _UTR = "UpdateTermsRequest";
  var _UTTE = "UnsupportedTokenTypeException";
  var _UUAR = "UpdateUserAttributesRequest";
  var _UUPCR = "UpdateUserPoolClientRequest";
  var _UUPR = "UpdateUserPoolRequest";
  var _UUSE = "UnsupportedUserStateException";
  var _V = "Value";
  var _VACR = "VerifyAuthChallengeResponse";
  var _VD = "ValidationData";
  var _VMT = "VerificationMessageTemplate";
  var _VMTT = "VerificationMessageTemplateType";
  var _WA = "WriteAttributes";
  var _WACD = "WebAuthnCredentialDescription";
  var _WACME = "WebAuthnClientMismatchException";
  var _WACMEe = "WebAuthnConfigurationMissingException";
  var _WACNFE = "WebAuthnChallengeNotFoundException";
  var _WACNSE = "WebAuthnCredentialNotSupportedException";
  var _WANEE = "WebAuthnNotEnabledException";
  var _WAONAE = "WebAuthnOriginNotAllowedException";
  var _WARPME = "WebAuthnRelyingPartyMismatchException";
  var _c = "client";
  var _e = "error";
  var _hE = "httpError";
  var _hN = "headerName";
  var _hV = "headerValue";
  var _m = "message";
  var _rC = "reasonCode";
  var _s = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentityprovider";
  var _se = "server";
  var n0 = "com.amazonaws.cognitoidentityprovider";
  var _s_registry = TypeRegistry.for(_s);
  var CognitoIdentityProviderServiceException$ = [-3, _s, "CognitoIdentityProviderServiceException", 0, [], []];
  _s_registry.registerError(CognitoIdentityProviderServiceException$, CognitoIdentityProviderServiceException);
  var n0_registry = TypeRegistry.for(n0);
  var AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
  var AliasExistsException$ = [
    -3,
    n0,
    _AEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(AliasExistsException$, AliasExistsException);
  var CodeDeliveryFailureException$ = [
    -3,
    n0,
    _CDFE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(CodeDeliveryFailureException$, CodeDeliveryFailureException);
  var CodeMismatchException$ = [
    -3,
    n0,
    _CME,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(CodeMismatchException$, CodeMismatchException);
  var ConcurrentModificationException$ = [
    -3,
    n0,
    _CMEo,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ConcurrentModificationException$, ConcurrentModificationException);
  var DeviceKeyExistsException$ = [
    -3,
    n0,
    _DKEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(DeviceKeyExistsException$, DeviceKeyExistsException);
  var DuplicateProviderException$ = [
    -3,
    n0,
    _DPE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(DuplicateProviderException$, DuplicateProviderException);
  var EnableSoftwareTokenMFAException$ = [
    -3,
    n0,
    _ESTMFAE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(EnableSoftwareTokenMFAException$, EnableSoftwareTokenMFAException);
  var ExpiredCodeException$ = [
    -3,
    n0,
    _ECE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ExpiredCodeException$, ExpiredCodeException);
  var FeatureUnavailableInTierException$ = [
    -3,
    n0,
    _FUITE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(FeatureUnavailableInTierException$, FeatureUnavailableInTierException);
  var ForbiddenException$ = [
    -3,
    n0,
    _FE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ForbiddenException$, ForbiddenException);
  var GroupExistsException$ = [
    -3,
    n0,
    _GEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(GroupExistsException$, GroupExistsException);
  var InternalErrorException$ = [
    -3,
    n0,
    _IEE,
    { [_e]: _se },
    [_m],
    [0]
  ];
  n0_registry.registerError(InternalErrorException$, InternalErrorException);
  var InternalServerException$ = [
    -3,
    n0,
    _ISE,
    { [_e]: _se },
    [_m],
    [0]
  ];
  n0_registry.registerError(InternalServerException$, InternalServerException);
  var InvalidEmailRoleAccessPolicyException$ = [
    -3,
    n0,
    _IERAPE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidEmailRoleAccessPolicyException$, InvalidEmailRoleAccessPolicyException);
  var InvalidLambdaResponseException$ = [
    -3,
    n0,
    _ILRE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidLambdaResponseException$, InvalidLambdaResponseException);
  var InvalidOAuthFlowException$ = [
    -3,
    n0,
    _IOAFE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidOAuthFlowException$, InvalidOAuthFlowException);
  var InvalidParameterException$ = [
    -3,
    n0,
    _IPE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _rC],
    [0, 0]
  ];
  n0_registry.registerError(InvalidParameterException$, InvalidParameterException);
  var InvalidPasswordException$ = [
    -3,
    n0,
    _IPEn,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidPasswordException$, InvalidPasswordException);
  var InvalidSmsRoleAccessPolicyException$ = [
    -3,
    n0,
    _ISRAPE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidSmsRoleAccessPolicyException$, InvalidSmsRoleAccessPolicyException);
  var InvalidSmsRoleTrustRelationshipException$ = [
    -3,
    n0,
    _ISRTRE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidSmsRoleTrustRelationshipException$, InvalidSmsRoleTrustRelationshipException);
  var InvalidUserPoolConfigurationException$ = [
    -3,
    n0,
    _IUPCE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidUserPoolConfigurationException$, InvalidUserPoolConfigurationException);
  var LimitExceededException$ = [
    -3,
    n0,
    _LEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(LimitExceededException$, LimitExceededException);
  var ManagedLoginBrandingExistsException$ = [
    -3,
    n0,
    _MLBEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ManagedLoginBrandingExistsException$, ManagedLoginBrandingExistsException);
  var MFAMethodNotFoundException$ = [
    -3,
    n0,
    _MFAMNFE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(MFAMethodNotFoundException$, MFAMethodNotFoundException);
  var NotAuthorizedException$ = [
    -3,
    n0,
    _NAE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(NotAuthorizedException$, NotAuthorizedException);
  var OperationNotEnabledException$ = [
    -3,
    n0,
    _ONEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(OperationNotEnabledException$, OperationNotEnabledException);
  var PasswordHistoryPolicyViolationException$ = [
    -3,
    n0,
    _PHPVE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(PasswordHistoryPolicyViolationException$, PasswordHistoryPolicyViolationException);
  var PasswordResetRequiredException$ = [
    -3,
    n0,
    _PRRE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(PasswordResetRequiredException$, PasswordResetRequiredException);
  var PreconditionNotMetException$ = [
    -3,
    n0,
    _PNME,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(PreconditionNotMetException$, PreconditionNotMetException);
  var RefreshTokenReuseException$ = [
    -3,
    n0,
    _RTRE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(RefreshTokenReuseException$, RefreshTokenReuseException);
  var ResourceNotFoundException$ = [
    -3,
    n0,
    _RNFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
  var ScopeDoesNotExistException$ = [
    -3,
    n0,
    _SDNEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ScopeDoesNotExistException$, ScopeDoesNotExistException);
  var SoftwareTokenMFANotFoundException$ = [
    -3,
    n0,
    _STMFANFE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(SoftwareTokenMFANotFoundException$, SoftwareTokenMFANotFoundException);
  var TermsExistsException$ = [
    -3,
    n0,
    _TEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(TermsExistsException$, TermsExistsException);
  var TierChangeNotAllowedException$ = [
    -3,
    n0,
    _TCNAE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(TierChangeNotAllowedException$, TierChangeNotAllowedException);
  var TooManyFailedAttemptsException$ = [
    -3,
    n0,
    _TMFAE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(TooManyFailedAttemptsException$, TooManyFailedAttemptsException);
  var TooManyRequestsException$ = [
    -3,
    n0,
    _TMRE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0]
  ];
  n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
  var UnauthorizedException$ = [
    -3,
    n0,
    _UE,
    { [_e]: _c, [_hE]: 401 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnauthorizedException$, UnauthorizedException);
  var UnexpectedLambdaException$ = [
    -3,
    n0,
    _ULE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnexpectedLambdaException$, UnexpectedLambdaException);
  var UnsupportedIdentityProviderException$ = [
    -3,
    n0,
    _UIPE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnsupportedIdentityProviderException$, UnsupportedIdentityProviderException);
  var UnsupportedOperationException$ = [
    -3,
    n0,
    _UOE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnsupportedOperationException$, UnsupportedOperationException);
  var UnsupportedTokenTypeException$ = [
    -3,
    n0,
    _UTTE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnsupportedTokenTypeException$, UnsupportedTokenTypeException);
  var UnsupportedUserStateException$ = [
    -3,
    n0,
    _UUSE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UnsupportedUserStateException$, UnsupportedUserStateException);
  var UserImportInProgressException$ = [
    -3,
    n0,
    _UIIPE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserImportInProgressException$, UserImportInProgressException);
  var UserLambdaValidationException$ = [
    -3,
    n0,
    _ULVE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserLambdaValidationException$, UserLambdaValidationException);
  var UsernameExistsException$ = [
    -3,
    n0,
    _UEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UsernameExistsException$, UsernameExistsException);
  var UserNotConfirmedException$ = [
    -3,
    n0,
    _UNCE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserNotConfirmedException$, UserNotConfirmedException);
  var UserNotFoundException$ = [
    -3,
    n0,
    _UNFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserNotFoundException$, UserNotFoundException);
  var UserPoolAddOnNotEnabledException$ = [
    -3,
    n0,
    _UPAONEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserPoolAddOnNotEnabledException$, UserPoolAddOnNotEnabledException);
  var UserPoolTaggingException$ = [
    -3,
    n0,
    _UPTE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(UserPoolTaggingException$, UserPoolTaggingException);
  var WebAuthnChallengeNotFoundException$ = [
    -3,
    n0,
    _WACNFE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnChallengeNotFoundException$, WebAuthnChallengeNotFoundException);
  var WebAuthnClientMismatchException$ = [
    -3,
    n0,
    _WACME,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnClientMismatchException$, WebAuthnClientMismatchException);
  var WebAuthnConfigurationMissingException$ = [
    -3,
    n0,
    _WACMEe,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnConfigurationMissingException$, WebAuthnConfigurationMissingException);
  var WebAuthnCredentialNotSupportedException$ = [
    -3,
    n0,
    _WACNSE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnCredentialNotSupportedException$, WebAuthnCredentialNotSupportedException);
  var WebAuthnNotEnabledException$ = [
    -3,
    n0,
    _WANEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnNotEnabledException$, WebAuthnNotEnabledException);
  var WebAuthnOriginNotAllowedException$ = [
    -3,
    n0,
    _WAONAE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnOriginNotAllowedException$, WebAuthnOriginNotAllowedException);
  var WebAuthnRelyingPartyMismatchException$ = [
    -3,
    n0,
    _WARPME,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(WebAuthnRelyingPartyMismatchException$, WebAuthnRelyingPartyMismatchException);
  var errorTypeRegistries = [
    _s_registry,
    n0_registry
  ];
  var AttributeValueType = [0, n0, _AVT, 8, 0];
  var ClientIdType = [0, n0, _CIT, 8, 0];
  var ClientSecretType = [0, n0, _CST, 8, 0];
  var PasswordType = [0, n0, _PT, 8, 0];
  var SecretHashType = [0, n0, _SHT, 8, 0];
  var SessionType = [0, n0, _ST, 8, 0];
  var TokenModelType = [0, n0, _TMT, 8, 0];
  var UsernameType = [0, n0, _UT, 8, 0];
  var AccountRecoverySettingType$ = [
    3,
    n0,
    _ARST,
    0,
    [_RM],
    [() => RecoveryMechanismsType]
  ];
  var AdminConfirmSignUpRequest$ = [
    3,
    n0,
    _ACSUR,
    0,
    [_UPI, _U, _CM],
    [0, [() => UsernameType, 0], 128 | 0],
    2
  ];
  var AdminCreateUserConfigType$ = [
    3,
    n0,
    _ACUCT,
    0,
    [_AACUO, _UAVD, _IMT],
    [2, 1, () => MessageTemplateType$]
  ];
  var AdminCreateUserRequest$ = [
    3,
    n0,
    _ACUR,
    0,
    [_UPI, _U, _UA, _VD, _TP, _FAC, _MAe, _DDM, _CM],
    [0, [() => UsernameType, 0], [() => AttributeListType, 0], [() => AttributeListType, 0], [() => PasswordType, 0], 2, 0, 64 | 0, 128 | 0],
    2
  ];
  var AdminDeleteUserAttributesRequest$ = [
    3,
    n0,
    _ADUAR,
    0,
    [_UPI, _U, _UAN],
    [0, [() => UsernameType, 0], 64 | 0],
    3
  ];
  var AdminGetUserResponse$ = [
    3,
    n0,
    _AGURd,
    0,
    [_U, _UA, _UCD, _ULMD, _E, _US, _MFAO, _PMS, _UMFASL],
    [[() => UsernameType, 0], [() => AttributeListType, 0], 4, 4, 2, 0, () => MFAOptionListType, 0, 64 | 0],
    1
  ];
  var AdminInitiateAuthRequest$ = [
    3,
    n0,
    _AIAR,
    0,
    [_UPI, _CI, _AF, _AP, _CM, _AM, _CD, _S],
    [0, [() => ClientIdType, 0], 0, [() => AuthParametersType, 0], 128 | 0, () => AnalyticsMetadataType$, () => ContextDataType$, [() => SessionType, 0]],
    3
  ];
  var AdminInitiateAuthResponse$ = [
    3,
    n0,
    _AIARd,
    0,
    [_CN, _S, _CP, _AR, _AC],
    [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType$, 0], 64 | 0]
  ];
  var AdminResetUserPasswordRequest$ = [
    3,
    n0,
    _ARUPR,
    0,
    [_UPI, _U, _CM],
    [0, [() => UsernameType, 0], 128 | 0],
    2
  ];
  var AdminRespondToAuthChallengeRequest$ = [
    3,
    n0,
    _ARTACR,
    0,
    [_UPI, _CI, _CN, _CR, _S, _AM, _CD, _CM],
    [0, [() => ClientIdType, 0], 0, [() => ChallengeResponsesType, 0], [() => SessionType, 0], () => AnalyticsMetadataType$, () => ContextDataType$, 128 | 0],
    3
  ];
  var AdminRespondToAuthChallengeResponse$ = [
    3,
    n0,
    _ARTACRd,
    0,
    [_CN, _S, _CP, _AR],
    [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType$, 0]]
  ];
  var AdminUpdateUserAttributesRequest$ = [
    3,
    n0,
    _AUUAR,
    0,
    [_UPI, _U, _UA, _CM],
    [0, [() => UsernameType, 0], [() => AttributeListType, 0], 128 | 0],
    3
  ];
  var AdvancedSecurityAdditionalFlowsType$ = [
    3,
    n0,
    _ASAFT,
    0,
    [_CAM],
    [0]
  ];
  var AnalyticsConfigurationType$ = [
    3,
    n0,
    _ACT,
    0,
    [_AI, _AA, _RA, _EIx, _UDS],
    [0, 0, 0, 0, 2]
  ];
  var AnalyticsMetadataType$ = [
    3,
    n0,
    _AMT,
    0,
    [_AEI],
    [0]
  ];
  var AttributeType$ = [
    3,
    n0,
    _ATt,
    0,
    [_Na, _V],
    [0, [() => AttributeValueType, 0]],
    1
  ];
  var AuthenticationResultType$ = [
    3,
    n0,
    _ART,
    0,
    [_ATc, _EIxp, _TT, _RT, _IT, _NDM],
    [[() => TokenModelType, 0], 1, 0, [() => TokenModelType, 0], [() => TokenModelType, 0], () => NewDeviceMetadataType$]
  ];
  var CompromisedCredentialsActionsType$ = [
    3,
    n0,
    _CCAT,
    0,
    [_EA],
    [0],
    1
  ];
  var CompromisedCredentialsRiskConfigurationType$ = [
    3,
    n0,
    _CCRCT,
    0,
    [_A, _EFv],
    [() => CompromisedCredentialsActionsType$, 64 | 0],
    1
  ];
  var ConfirmForgotPasswordRequest$ = [
    3,
    n0,
    _CFPR,
    0,
    [_CI, _U, _CC, _P, _SH, _AM, _UCDs, _CM],
    [[() => ClientIdType, 0], [() => UsernameType, 0], 0, [() => PasswordType, 0], [() => SecretHashType, 0], () => AnalyticsMetadataType$, [() => UserContextDataType$, 0], 128 | 0],
    4
  ];
  var ConfirmSignUpRequest$ = [
    3,
    n0,
    _CSUR,
    0,
    [_CI, _U, _CC, _SH, _FAC, _AM, _UCDs, _CM, _S],
    [[() => ClientIdType, 0], [() => UsernameType, 0], 0, [() => SecretHashType, 0], 2, () => AnalyticsMetadataType$, [() => UserContextDataType$, 0], 128 | 0, [() => SessionType, 0]],
    3
  ];
  var ContextDataType$ = [
    3,
    n0,
    _CDT,
    0,
    [_IA, _SN, _SP, _HH, _ED],
    [0, 0, 0, () => HttpHeaderList, 0],
    4
  ];
  var CreateIdentityProviderRequest$ = [
    3,
    n0,
    _CIPR,
    0,
    [_UPI, _PN, _PTr, _PD, _AMt, _II],
    [0, 0, 0, 128 | 0, 128 | 0, 64 | 0],
    4
  ];
  var CreateTermsRequest$ = [
    3,
    n0,
    _CTR,
    0,
    [_UPI, _CI, _TN, _TS, _En, _Li],
    [0, [() => ClientIdType, 0], 0, 0, 0, 128 | 0],
    5
  ];
  var CreateUserPoolClientRequest$ = [
    3,
    n0,
    _CUPCR,
    0,
    [_UPI, _CNl, _GS, _CS, _RTV, _ATV, _ITV, _TVU, _RAe, _WA, _EAF, _SIP, _CURL, _LURL, _DRURI, _AOAF, _AOAS, _AOAFUPC, _ACn, _PUEE, _ETR, _EPAUCD, _ASV, _RTR],
    [0, 0, 2, [() => ClientSecretType, 0], 1, 1, 1, () => TokenValidityUnitsType$, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0, 2, () => AnalyticsConfigurationType$, 0, 2, 2, 1, () => RefreshTokenRotationType$],
    2
  ];
  var CreateUserPoolReplicaRequest$ = [
    3,
    n0,
    _CUPRR,
    0,
    [_UPI, _RN, _UPT],
    [0, 0, 128 | 0],
    2
  ];
  var CreateUserPoolRequest$ = [
    3,
    n0,
    _CUPR,
    0,
    [_PNo, _Po, _DP, _LC, _AVA, _AAl, _UAs, _SVM, _EVM, _EVS, _VMT, _SAM, _MC, _UAUS, _DC, _EC, _SCm, _UPT, _ACUC, _Sch, _UPAO, _UC, _ARS, _UPTs, _KC, _IC],
    [0, () => UserPoolPolicyType$, 0, () => LambdaConfigType$, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => VerificationMessageTemplateType$, 0, 0, () => UserAttributeUpdateSettingsType$, () => DeviceConfigurationType$, () => EmailConfigurationType$, () => SmsConfigurationType$, 128 | 0, () => AdminCreateUserConfigType$, () => SchemaAttributesListType, () => UserPoolAddOnsType$, () => UsernameConfigurationType$, () => AccountRecoverySettingType$, 0, () => KeyConfigurationType$, () => IssuerConfigurationType$],
    1
  ];
  var CustomEmailLambdaVersionConfigType$ = [
    3,
    n0,
    _CELVCT,
    0,
    [_LV, _LAa],
    [0, 0],
    2
  ];
  var CustomSMSLambdaVersionConfigType$ = [
    3,
    n0,
    _CSMSLVCT,
    0,
    [_LV, _LAa],
    [0, 0],
    2
  ];
  var DeleteUserAttributesRequest$ = [
    3,
    n0,
    _DUAR,
    0,
    [_UAN, _ATc],
    [64 | 0, [() => TokenModelType, 0]],
    2
  ];
  var DeviceConfigurationType$ = [
    3,
    n0,
    _DCT,
    0,
    [_CROND, _DOROUP],
    [2, 2]
  ];
  var EmailConfigurationType$ = [
    3,
    n0,
    _ECT,
    0,
    [_SA, _RTEA, _ESA, _F, _CSo],
    [0, 0, 0, 0, 0]
  ];
  var ForgotPasswordRequest$ = [
    3,
    n0,
    _FPR,
    0,
    [_CI, _U, _SH, _UCDs, _AM, _CM],
    [[() => ClientIdType, 0], [() => UsernameType, 0], [() => SecretHashType, 0], [() => UserContextDataType$, 0], () => AnalyticsMetadataType$, 128 | 0],
    2
  ];
  var GetCSVHeaderResponse$ = [
    3,
    n0,
    _GCSVHRe,
    0,
    [_UPI, _CSVH],
    [0, 64 | 0]
  ];
  var GetTokensFromRefreshTokenRequest$ = [
    3,
    n0,
    _GTFRTR,
    0,
    [_RT, _CI, _CS, _DK, _CM],
    [[() => TokenModelType, 0], [() => ClientIdType, 0], [() => ClientSecretType, 0], 0, 128 | 0],
    2
  ];
  var GetUserAttributeVerificationCodeRequest$ = [
    3,
    n0,
    _GUAVCR,
    0,
    [_ATc, _AN, _CM],
    [[() => TokenModelType, 0], 0, 128 | 0],
    2
  ];
  var GetUserAuthFactorsResponse$ = [
    3,
    n0,
    _GUAFRe,
    0,
    [_U, _PMS, _UMFASL, _CUAF],
    [[() => UsernameType, 0], 0, 64 | 0, 64 | 0],
    1
  ];
  var GetUserResponse$ = [
    3,
    n0,
    _GURe,
    0,
    [_U, _UA, _MFAO, _PMS, _UMFASL],
    [[() => UsernameType, 0], [() => AttributeListType, 0], () => MFAOptionListType, 0, 64 | 0],
    2
  ];
  var HttpHeader$ = [
    3,
    n0,
    _HHt,
    0,
    [_hN, _hV],
    [0, 0]
  ];
  var IdentityProviderType$ = [
    3,
    n0,
    _IPT,
    0,
    [_UPI, _PN, _PTr, _PD, _AMt, _II, _LMD, _CDr],
    [0, 0, 0, 128 | 0, 128 | 0, 64 | 0, 4, 4]
  ];
  var InboundFederationLambdaType$ = [
    3,
    n0,
    _IFLT,
    0,
    [_LV, _LAa],
    [0, 0],
    2
  ];
  var InitiateAuthRequest$ = [
    3,
    n0,
    _IAR,
    0,
    [_AF, _CI, _AP, _CM, _AM, _UCDs, _S],
    [0, [() => ClientIdType, 0], [() => AuthParametersType, 0], 128 | 0, () => AnalyticsMetadataType$, [() => UserContextDataType$, 0], [() => SessionType, 0]],
    2
  ];
  var InitiateAuthResponse$ = [
    3,
    n0,
    _IARn,
    0,
    [_CN, _S, _CP, _AR, _AC],
    [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType$, 0], 64 | 0]
  ];
  var IssuerConfigurationType$ = [
    3,
    n0,
    _ICT,
    0,
    [_Ty],
    [0]
  ];
  var KeyConfigurationType$ = [
    3,
    n0,
    _KCT,
    0,
    [_KT, _KKA],
    [0, 0]
  ];
  var LambdaConfigType$ = [
    3,
    n0,
    _LCT,
    0,
    [_PSU, _CMu, _PC, _PA, _PAo, _DAC, _CAC, _VACR, _PTG, _UM, _PTGC, _CSMSS, _CES, _KMSKID, _IF],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => PreTokenGenerationVersionConfigType$, () => CustomSMSLambdaVersionConfigType$, () => CustomEmailLambdaVersionConfigType$, 0, () => InboundFederationLambdaType$]
  ];
  var ListTagsForResourceResponse$ = [
    3,
    n0,
    _LTFRRi,
    0,
    [_Ta],
    [128 | 0]
  ];
  var ListUsersRequest$ = [
    3,
    n0,
    _LUR,
    0,
    [_UPI, _ATG, _L, _PTa, _Fi],
    [0, 64 | 0, 1, 0, 0],
    1
  ];
  var MessageTemplateType$ = [
    3,
    n0,
    _MTT,
    0,
    [_SMSM, _EM, _ESm],
    [0, 0, 0]
  ];
  var MFAOptionType$ = [
    3,
    n0,
    _MFAOT,
    0,
    [_DM, _AN],
    [0, 0]
  ];
  var NewDeviceMetadataType$ = [
    3,
    n0,
    _NDMT,
    0,
    [_DK, _DGK],
    [0, 0]
  ];
  var NumberAttributeConstraintsType$ = [
    3,
    n0,
    _NACT,
    0,
    [_MV, _MVa],
    [0, 0]
  ];
  var PasswordPolicyType$ = [
    3,
    n0,
    _PPT,
    0,
    [_ML, _RU, _RLe, _RNe, _RSeq, _PHS, _TPVD],
    [1, 2, 2, 2, 2, 1, 1]
  ];
  var PreTokenGenerationVersionConfigType$ = [
    3,
    n0,
    _PTGVCT,
    0,
    [_LV, _LAa],
    [0, 0],
    2
  ];
  var RecoveryOptionType$ = [
    3,
    n0,
    _ROT,
    0,
    [_Pri, _Na],
    [1, 0],
    2
  ];
  var RefreshTokenRotationType$ = [
    3,
    n0,
    _RTRT,
    0,
    [_Fe, _RGPS],
    [0, 1],
    1
  ];
  var ResendConfirmationCodeRequest$ = [
    3,
    n0,
    _RCCR,
    0,
    [_CI, _U, _SH, _UCDs, _AM, _CM],
    [[() => ClientIdType, 0], [() => UsernameType, 0], [() => SecretHashType, 0], [() => UserContextDataType$, 0], () => AnalyticsMetadataType$, 128 | 0],
    2
  ];
  var RespondToAuthChallengeRequest$ = [
    3,
    n0,
    _RTACR,
    0,
    [_CI, _CN, _S, _CR, _AM, _UCDs, _CM],
    [[() => ClientIdType, 0], 0, [() => SessionType, 0], [() => ChallengeResponsesType, 0], () => AnalyticsMetadataType$, [() => UserContextDataType$, 0], 128 | 0],
    2
  ];
  var RespondToAuthChallengeResponse$ = [
    3,
    n0,
    _RTACRe,
    0,
    [_CN, _S, _CP, _AR],
    [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType$, 0]]
  ];
  var RiskExceptionConfigurationType$ = [
    3,
    n0,
    _RECT,
    0,
    [_BIPRL, _SIPRL],
    [64 | 0, 64 | 0]
  ];
  var SchemaAttributeType$ = [
    3,
    n0,
    _SAT,
    0,
    [_Na, _ADT, _DOA, _Mu, _Re, _NAC, _SAC],
    [0, 0, 2, 2, 2, () => NumberAttributeConstraintsType$, () => StringAttributeConstraintsType$]
  ];
  var SignInPolicyType$ = [
    3,
    n0,
    _SIPT,
    0,
    [_AFAF],
    [64 | 0]
  ];
  var SignUpRequest$ = [
    3,
    n0,
    _SUR,
    0,
    [_CI, _U, _SH, _P, _UA, _VD, _AM, _UCDs, _CM],
    [[() => ClientIdType, 0], [() => UsernameType, 0], [() => SecretHashType, 0], [() => PasswordType, 0], [() => AttributeListType, 0], [() => AttributeListType, 0], () => AnalyticsMetadataType$, [() => UserContextDataType$, 0], 128 | 0],
    2
  ];
  var SmsConfigurationType$ = [
    3,
    n0,
    _SCTm,
    0,
    [_SCA, _EIx, _SRn],
    [0, 0, 0],
    1
  ];
  var StringAttributeConstraintsType$ = [
    3,
    n0,
    _SACT,
    0,
    [_MLi, _MLa],
    [0, 0]
  ];
  var TagResourceRequest$ = [
    3,
    n0,
    _TRR,
    0,
    [_RAes, _Ta],
    [0, 128 | 0],
    2
  ];
  var TermsType$ = [
    3,
    n0,
    _TTe,
    0,
    [_TI, _UPI, _CI, _TN, _TS, _En, _Li, _CDr, _LMD],
    [0, 0, [() => ClientIdType, 0], 0, 0, 0, 128 | 0, 4, 4],
    9
  ];
  var TokenValidityUnitsType$ = [
    3,
    n0,
    _TVUT,
    0,
    [_ATc, _IT, _RT],
    [0, 0, 0]
  ];
  var UntagResourceRequest$ = [
    3,
    n0,
    _URR,
    0,
    [_RAes, _TK],
    [0, 64 | 0],
    2
  ];
  var UpdateIdentityProviderRequest$ = [
    3,
    n0,
    _UIPR,
    0,
    [_UPI, _PN, _PD, _AMt, _II],
    [0, 0, 128 | 0, 128 | 0, 64 | 0],
    2
  ];
  var UpdateTermsRequest$ = [
    3,
    n0,
    _UTR,
    0,
    [_TI, _UPI, _TN, _TS, _En, _Li],
    [0, 0, 0, 0, 0, 128 | 0],
    2
  ];
  var UpdateUserAttributesRequest$ = [
    3,
    n0,
    _UUAR,
    0,
    [_UA, _ATc, _CM],
    [[() => AttributeListType, 0], [() => TokenModelType, 0], 128 | 0],
    2
  ];
  var UpdateUserPoolClientRequest$ = [
    3,
    n0,
    _UUPCR,
    0,
    [_UPI, _CI, _CNl, _RTV, _ATV, _ITV, _TVU, _RAe, _WA, _EAF, _SIP, _CURL, _LURL, _DRURI, _AOAF, _AOAS, _AOAFUPC, _ACn, _PUEE, _ETR, _EPAUCD, _ASV, _RTR],
    [0, [() => ClientIdType, 0], 0, 1, 1, 1, () => TokenValidityUnitsType$, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0, 2, () => AnalyticsConfigurationType$, 0, 2, 2, 1, () => RefreshTokenRotationType$],
    2
  ];
  var UpdateUserPoolRequest$ = [
    3,
    n0,
    _UUPR,
    0,
    [_UPI, _Po, _DP, _LC, _AVA, _SVM, _EVM, _EVS, _VMT, _SAM, _UAUS, _MC, _DC, _EC, _SCm, _UPT, _ACUC, _UPAO, _ARS, _PNo, _UPTs, _KC, _IC],
    [0, () => UserPoolPolicyType$, 0, () => LambdaConfigType$, 64 | 0, 0, 0, 0, () => VerificationMessageTemplateType$, 0, () => UserAttributeUpdateSettingsType$, 0, () => DeviceConfigurationType$, () => EmailConfigurationType$, () => SmsConfigurationType$, 128 | 0, () => AdminCreateUserConfigType$, () => UserPoolAddOnsType$, () => AccountRecoverySettingType$, 0, 0, () => KeyConfigurationType$, () => IssuerConfigurationType$],
    1
  ];
  var UserAttributeUpdateSettingsType$ = [
    3,
    n0,
    _UAUST,
    0,
    [_ARVBU],
    [64 | 0]
  ];
  var UserContextDataType$ = [
    3,
    n0,
    _UCDT,
    8,
    [_IA, _ED],
    [0, 0]
  ];
  var UsernameConfigurationType$ = [
    3,
    n0,
    _UCT,
    0,
    [_CSa],
    [2],
    1
  ];
  var UserPoolAddOnsType$ = [
    3,
    n0,
    _UPAOT,
    0,
    [_ASM, _ASAF],
    [0, () => AdvancedSecurityAdditionalFlowsType$],
    1
  ];
  var UserPoolClientType$ = [
    3,
    n0,
    _UPCT,
    0,
    [_UPI, _CNl, _CI, _CS, _LMD, _CDr, _RTV, _ATV, _ITV, _TVU, _RAe, _WA, _EAF, _SIP, _CURL, _LURL, _DRURI, _AOAF, _AOAS, _AOAFUPC, _ACn, _PUEE, _ETR, _EPAUCD, _ASV, _RTR],
    [0, 0, [() => ClientIdType, 0], [() => ClientSecretType, 0], 4, 4, 1, 1, 1, () => TokenValidityUnitsType$, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0, 2, () => AnalyticsConfigurationType$, 0, 2, 2, 1, () => RefreshTokenRotationType$]
  ];
  var UserPoolDescriptionType$ = [
    3,
    n0,
    _UPDT,
    0,
    [_Id, _Na, _LC, _St, _LMD, _CDr, _RR],
    [0, 0, () => LambdaConfigType$, 0, 4, 4, 64 | 0]
  ];
  var UserPoolPolicyType$ = [
    3,
    n0,
    _UPPT,
    0,
    [_PPa, _SIPi],
    [() => PasswordPolicyType$, () => SignInPolicyType$]
  ];
  var UserPoolType$ = [
    3,
    n0,
    _UPTse,
    0,
    [_Id, _Na, _Po, _DP, _LC, _St, _LMD, _CDr, _SAc, _AVA, _AAl, _UAs, _SVM, _EVM, _EVS, _VMT, _SAM, _UAUS, _MC, _DC, _ENOU, _EC, _SCm, _UPT, _SCF, _ECF, _Do, _CDu, _ACUC, _UPAO, _UC, _Ar, _ARS, _UPTs, _KC, _IC],
    [0, 0, () => UserPoolPolicyType$, 0, () => LambdaConfigType$, 0, 4, 4, () => SchemaAttributesListType, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => VerificationMessageTemplateType$, 0, () => UserAttributeUpdateSettingsType$, 0, () => DeviceConfigurationType$, 1, () => EmailConfigurationType$, () => SmsConfigurationType$, 128 | 0, 0, 0, 0, 0, () => AdminCreateUserConfigType$, () => UserPoolAddOnsType$, () => UsernameConfigurationType$, 0, () => AccountRecoverySettingType$, 0, () => KeyConfigurationType$, () => IssuerConfigurationType$]
  ];
  var VerificationMessageTemplateType$ = [
    3,
    n0,
    _VMTT,
    0,
    [_SM, _EM, _ESm, _EMBL, _ESBL, _DEO],
    [0, 0, 0, 0, 0, 0]
  ];
  var WebAuthnCredentialDescription$ = [
    3,
    n0,
    _WACD,
    0,
    [_CIr, _FCN, _RPI, _ATu, _CAr, _AAu],
    [0, 0, 0, 64 | 0, 4, 0],
    5
  ];
  var AliasAttributesListType = 64 | 0;
  var AllowedFirstAuthFactorsListType = 64 | 0;
  var AttributeListType = [
    1,
    n0,
    _ALTt,
    0,
    [
      () => AttributeType$,
      0
    ]
  ];
  var AttributeNameListType = 64 | 0;
  var AttributesRequireVerificationBeforeUpdateType = 64 | 0;
  var AvailableChallengeListType = 64 | 0;
  var BlockedIPRangeListType = 64 | 0;
  var CallbackURLsListType = 64 | 0;
  var ClientPermissionListType = 64 | 0;
  var ConfiguredUserAuthFactorsListType = 64 | 0;
  var DeliveryMediumListType = 64 | 0;
  var EventFiltersType = 64 | 0;
  var ExplicitAuthFlowsListType = 64 | 0;
  var HttpHeaderList = [
    1,
    n0,
    _HHL,
    0,
    () => HttpHeader$
  ];
  var IdpIdentifiersListType = 64 | 0;
  var ListOfStringTypes = 64 | 0;
  var LogoutURLsListType = 64 | 0;
  var MFAOptionListType = [
    1,
    n0,
    _MFAOLT,
    0,
    () => MFAOptionType$
  ];
  var OAuthFlowsType = 64 | 0;
  var RecoveryMechanismsType = [
    1,
    n0,
    _RMT,
    0,
    () => RecoveryOptionType$
  ];
  var ReplicaRegionsType = 64 | 0;
  var SchemaAttributesListType = [
    1,
    n0,
    _SALT,
    0,
    () => SchemaAttributeType$
  ];
  var ScopeListType = 64 | 0;
  var SearchedAttributeNamesListType = 64 | 0;
  var SkippedIPRangeListType = 64 | 0;
  var SupportedIdentityProvidersListType = 64 | 0;
  var UserMFASettingListType = 64 | 0;
  var UsernameAttributesListType = 64 | 0;
  var UserPoolTagsListType = 64 | 0;
  var VerifiedAttributesListType = 64 | 0;
  var WebAuthnAuthenticatorTransportsList = 64 | 0;
  var AttributeMappingType = 128 | 0;
  var AuthParametersType = [
    2,
    n0,
    _APT,
    8,
    0,
    0
  ];
  var ChallengeParametersType = 128 | 0;
  var ChallengeResponsesType = [
    2,
    n0,
    _CRTh,
    8,
    0,
    0
  ];
  var ClientMetadataType = 128 | 0;
  var LinksType = 128 | 0;
  var ProviderDetailsType = 128 | 0;
  var UserPoolTagsType = 128 | 0;
  var InitiateAuth$ = [
    9,
    n0,
    _IAn,
    0,
    () => InitiateAuthRequest$,
    () => InitiateAuthResponse$
  ];

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig = (config) => {
    return {
      apiVersion: "2016-04-18",
      base64Decoder: config?.base64Decoder ?? fromBase64,
      base64Encoder: config?.base64Encoder ?? toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoIdentityProviderHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new AwsSdkSigV4Signer()
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new NoAuthSigner()
        }
      ],
      logger: config?.logger ?? new NoOpLogger(),
      protocol: config?.protocol ?? AwsJson1_1Protocol,
      protocolSettings: config?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.cognitoidentityprovider",
        errorTypeRegistries,
        xmlNamespace: "http://cognito-idp.amazonaws.com/doc/2016-04-18/",
        version: "2016-04-18",
        serviceTarget: "AWSCognitoIdentityProviderService"
      },
      serviceId: config?.serviceId ?? "Cognito Identity Provider",
      urlParser: config?.urlParser ?? parseUrl,
      utf8Decoder: config?.utf8Decoder ?? fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? toUtf8
    };
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.browser.js
  var getRuntimeConfig2 = (config) => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    return {
      ...clientSharedValues,
      ...config,
      runtime: "browser",
      defaultsMode,
      bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
      credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
      maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
      region: config?.region ?? invalidProvider("Region is missing"),
      requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
      sha256: config?.sha256 ?? Sha2563,
      streamCollector: config?.streamCollector ?? streamCollector2,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
      useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    };
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeExtensions.js
  var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js
  var CognitoIdentityProviderClient = class extends Client {
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig2(configuration || {});
      super(_config_0);
      __publicField(this, "config");
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = resolveUserAgentConfig(_config_1);
      const _config_3 = resolveRetryConfig(_config_2);
      const _config_4 = resolveRegionConfig(_config_3);
      const _config_5 = resolveHostHeaderConfig(_config_4);
      const _config_6 = resolveEndpointConfig(_config_5);
      const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
      const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
      this.config = _config_8;
      this.middlewareStack.use(getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(getUserAgentPlugin(this.config));
      this.middlewareStack.use(getRetryPlugin(this.config));
      this.middlewareStack.use(getContentLengthPlugin(this.config));
      this.middlewareStack.use(getHostHeaderPlugin(this.config));
      this.middlewareStack.use(getLoggerPlugin(this.config));
      this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        })
      }));
      this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };

  // node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/InitiateAuthCommand.js
  init_index_browser();
  var InitiateAuthCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config, o) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityProviderService", "InitiateAuth", {}).n("CognitoIdentityProviderClient", "InitiateAuthCommand").sc(InitiateAuth$).build() {
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/BedrockAgentCoreClient.js
  init_index_browser();
  init_index_browser3();

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthSchemeProvider.js
  var defaultBedrockAgentCoreHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: getSmithyContext(context).operation,
      region: await normalizeProvider(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  function createAwsAuthSigv4HttpAuthOption2(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "bedrock-agentcore",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  var defaultBedrockAgentCoreHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
      }
    }
    return options;
  };
  var resolveHttpAuthSchemeConfig2 = (config) => {
    const config_0 = resolveAwsSdkSigV4Config(config);
    return Object.assign(config_0, {
      authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
    });
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters2 = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "bedrock-agentcore"
    });
  };
  var commonParams2 = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/package.json
  var package_default2 = {
    name: "@aws-sdk/client-bedrock-agentcore",
    description: "AWS SDK for JavaScript Bedrock Agentcore Client for Node.js, Browser and React Native",
    version: "3.1075.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline",
      "build:es": "premove dist-es && tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "premove dist-types && tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "^3.974.23",
      "@aws-sdk/credential-provider-node": "^3.972.58",
      "@aws-sdk/types": "^3.973.13",
      "@smithy/core": "^3.24.6",
      "@smithy/fetch-http-handler": "^5.4.6",
      "@smithy/node-http-handler": "^4.7.6",
      "@smithy/types": "^4.14.3",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3"
    },
    engines: {
      node: ">=20.0.0"
    },
    typesVersions: {
      "<4.5": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/sdk-for-javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-agentcore",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-bedrock-agentcore"
    }
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.browser.js
  init_index_browser3();
  init_index_browser2();

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.shared.js
  init_index_browser2();

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/endpointResolver.js
  init_index_browser();

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/bdd.js
  init_index_browser();
  var k2 = "ref";
  var a2 = -1;
  var b2 = true;
  var c2 = "isSet";
  var d2 = "PartitionResult";
  var e2 = "booleanEquals";
  var f2 = "getAttr";
  var g2 = { [k2]: "Endpoint" };
  var h2 = { [k2]: d2 };
  var i2 = {};
  var j2 = [{ [k2]: "Region" }];
  var _data2 = {
    conditions: [
      [c2, [g2]],
      [c2, j2],
      ["aws.partition", j2, d2],
      [e2, [{ [k2]: "UseFIPS" }, b2]],
      [e2, [{ [k2]: "UseDualStack" }, b2]],
      [e2, [{ fn: f2, argv: [h2, "supportsDualStack"] }, b2]],
      [e2, [{ fn: f2, argv: [h2, "supportsFIPS"] }, b2]]
    ],
    results: [
      [a2],
      [a2, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a2, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [g2, i2],
      ["https://bedrock-agentcore-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i2],
      [a2, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://bedrock-agentcore-fips.{Region}.{PartitionResult#dnsSuffix}", i2],
      [a2, "FIPS is enabled but this partition does not support FIPS"],
      ["https://bedrock-agentcore.{Region}.{PartitionResult#dualStackDnsSuffix}", i2],
      [a2, "DualStack is enabled but this partition does not support DualStack"],
      ["https://bedrock-agentcore.{Region}.{PartitionResult#dnsSuffix}", i2],
      [a2, "Invalid Configuration: Missing Region"]
    ]
  };
  var root2 = 2;
  var r2 = 1e8;
  var nodes2 = new Int32Array([
    -1,
    1,
    -1,
    0,
    12,
    3,
    1,
    4,
    r2 + 11,
    2,
    5,
    r2 + 11,
    3,
    8,
    6,
    4,
    7,
    r2 + 10,
    5,
    r2 + 8,
    r2 + 9,
    4,
    10,
    9,
    6,
    r2 + 6,
    r2 + 7,
    5,
    11,
    r2 + 5,
    6,
    r2 + 4,
    r2 + 5,
    3,
    r2 + 1,
    13,
    4,
    r2 + 2,
    r2 + 3
  ]);
  var bdd2 = BinaryDecisionDiagram.from(nodes2, root2, _data2.conditions, _data2.results);

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/endpointResolver.js
  var cache2 = new EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  var defaultEndpointResolver2 = (endpointParams, context = {}) => {
    return cache2.get(endpointParams, () => decideEndpoint(bdd2, {
      endpointParams,
      logger: context.logger
    }));
  };
  customEndpointFunctions.aws = awsEndpointFunctions;

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/BedrockAgentCoreServiceException.js
  var BedrockAgentCoreServiceException = class _BedrockAgentCoreServiceException extends ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, _BedrockAgentCoreServiceException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/errors.js
  var AccessDeniedException2 = class _AccessDeniedException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "AccessDeniedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _AccessDeniedException.prototype);
    }
  };
  var InternalServerException2 = class _InternalServerException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...opts
      });
      __publicField(this, "name", "InternalServerException");
      __publicField(this, "$fault", "server");
      Object.setPrototypeOf(this, _InternalServerException.prototype);
    }
  };
  var ResourceNotFoundException2 = class _ResourceNotFoundException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ResourceNotFoundException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
    }
  };
  var RetryableConflictException = class _RetryableConflictException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "RetryableConflictException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "RetryableConflictException");
      __publicField(this, "$fault", "client");
      __publicField(this, "$retryable", {});
      Object.setPrototypeOf(this, _RetryableConflictException.prototype);
    }
  };
  var RuntimeClientError = class _RuntimeClientError extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "RuntimeClientError",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "RuntimeClientError");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _RuntimeClientError.prototype);
    }
  };
  var ServiceQuotaExceededException = class _ServiceQuotaExceededException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ServiceQuotaExceededException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ServiceQuotaExceededException.prototype);
    }
  };
  var ThrottlingException = class _ThrottlingException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ThrottlingException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ThrottlingException.prototype);
    }
  };
  var ValidationException = class _ValidationException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ValidationException");
      __publicField(this, "$fault", "client");
      __publicField(this, "reason");
      __publicField(this, "fieldList");
      Object.setPrototypeOf(this, _ValidationException.prototype);
      this.reason = opts.reason;
      this.fieldList = opts.fieldList;
    }
  };
  var ConflictException = class _ConflictException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ConflictException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ConflictException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ConflictException.prototype);
    }
  };
  var UnauthorizedException2 = class _UnauthorizedException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "UnauthorizedException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "UnauthorizedException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _UnauthorizedException.prototype);
    }
  };
  var DuplicateIdException = class _DuplicateIdException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "DuplicateIdException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "DuplicateIdException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _DuplicateIdException.prototype);
    }
  };
  var ServiceException2 = class _ServiceException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ServiceException",
        $fault: "server",
        ...opts
      });
      __publicField(this, "name", "ServiceException");
      __publicField(this, "$fault", "server");
      Object.setPrototypeOf(this, _ServiceException.prototype);
    }
  };
  var ThrottledException = class _ThrottledException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "ThrottledException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "ThrottledException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _ThrottledException.prototype);
    }
  };
  var InvalidInputException = class _InvalidInputException extends BedrockAgentCoreServiceException {
    constructor(opts) {
      super({
        name: "InvalidInputException",
        $fault: "client",
        ...opts
      });
      __publicField(this, "name", "InvalidInputException");
      __publicField(this, "$fault", "client");
      Object.setPrototypeOf(this, _InvalidInputException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/schemas/schemas_0.js
  var _A2 = "Amount";
  var _ABTEC = "ABTestEvaluationConfig";
  var _ABTR = "ABTestResults";
  var _ABTS = "ABTestSummary";
  var _ABTSL = "ABTestSummaryList";
  var _ACD = "AgentCardDefinition";
  var _AD = "A2aDescriptor";
  var _ADE2 = "AccessDeniedException";
  var _AKT = "ApiKeyType";
  var _AL = "AvailableLimits";
  var _AS = "ActorSummary";
  var _ASD = "AgentSkillsDescriptor";
  var _ASL = "ActorSummaryList";
  var _ASLf = "AffectedSessionList";
  var _ASU = "AutomationStreamUpdate";
  var _ASf = "AffectedSession";
  var _ASu = "AutomationStream";
  var _ATC = "AgentTracesConfig";
  var _ATT = "AccessTokenType";
  var _AUT = "AuthorizationUrlType";
  var _Ac = "Accept";
  var _B = "Body";
  var _BA = "BasicAuth";
  var _BAR = "BrowserActionResult";
  var _BAr = "BrowserAction";
  var _BCMR = "BatchCreateMemoryRecords";
  var _BCMRI = "BatchCreateMemoryRecordsInput";
  var _BCMRO = "BatchCreateMemoryRecordsOutput";
  var _BDMR = "BatchDeleteMemoryRecords";
  var _BDMRI = "BatchDeleteMemoryRecordsInput";
  var _BDMRO = "BatchDeleteMemoryRecordsOutput";
  var _BE = "BrowserExtension";
  var _BEP = "BrowserEnterprisePolicy";
  var _BEPr = "BrowserEnterprisePolicies";
  var _BES = "BatchEvaluationSummary";
  var _BESL = "BatchEvaluationSummaryList";
  var _BETC = "BatchEvaluationTraceConfig";
  var _BEr = "BrowserExtensions";
  var _BF = "BranchFilter";
  var _BPC = "BrowserProfileConfiguration";
  var _BSS = "BrowserSessionStream";
  var _BSSr = "BrowserSessionSummary";
  var _BSSro = "BrowserSessionSummaries";
  var _BUMR = "BatchUpdateMemoryRecords";
  var _BUMRI = "BatchUpdateMemoryRecordsInput";
  var _BUMRO = "BatchUpdateMemoryRecordsOutput";
  var _Br = "Branch";
  var _C = "Certificate";
  var _CABT = "CreateABTest";
  var _CABTR = "CreateABTestRequest";
  var _CABTRr = "CreateABTestResponse";
  var _CB = "ContentBlock";
  var _CBL = "ContentBlockList";
  var _CBR = "ConfigurationBundleRef";
  var _CBTE = "ConfigurationBundleToolEntry";
  var _CBTEL = "ConfigurationBundleToolEntryList";
  var _CCPJTT = "CoinbaseCdpPaymentJwtTokenType";
  var _CCTRI = "CoinbaseCdpTokenRequestInput";
  var _CCTRO = "CoinbaseCdpTokenResponseOutput";
  var _CD2 = "CustomDescriptor";
  var _CDE = "ContentDeltaEvent";
  var _CE = "ConflictException";
  var _CEI = "CreateEventInput";
  var _CEO = "CreateEventOutput";
  var _CEr = "CreateEvent";
  var _CI2 = "ConfidenceInterval";
  var _CIR = "CodeInterpreterResult";
  var _CISO = "CodeInterpreterStreamOutput";
  var _CISS = "CodeInterpreterSessionSummary";
  var _CISSo = "CodeInterpreterSessionSummaries";
  var _CL = "CertificateLocation";
  var _CPI = "CreatePaymentInstrument";
  var _CPIR = "CreatePaymentInstrumentRequest";
  var _CPIRr = "CreatePaymentInstrumentResponse";
  var _CPS = "CreatePaymentSession";
  var _CPSR = "CreatePaymentSessionRequest";
  var _CPSRr = "CreatePaymentSessionResponse";
  var _CRPT = "CustomRequestParametersType";
  var _CRTA = "CompleteResourceTokenAuth";
  var _CRTAR = "CompleteResourceTokenAuthRequest";
  var _CRTARo = "CompleteResourceTokenAuthResponse";
  var _CRVT = "CustomRequestValueType";
  var _CS2 = "ControlStats";
  var _CSE = "ContentStartEvent";
  var _CSEo = "ContentStopEvent";
  var _CT = "Content-Type";
  var _CWFC = "CloudWatchFilterConfig";
  var _CWLF = "CloudWatchLogsFilter";
  var _CWLFL = "CloudWatchLogsFilterList";
  var _CWLR = "CloudWatchLogsRule";
  var _CWLS = "CloudWatchLogsSource";
  var _CWLTC = "CloudWatchLogsTraceConfig";
  var _CWOC = "CloudWatchOutputConfig";
  var _CXPI = "CryptoX402PaymentInput";
  var _CXPO = "CryptoX402PaymentOutput";
  var _Ce = "Certificates";
  var _Co = "Conversational";
  var _Con = "Content";
  var _Cont = "Context";
  var _D = "Description";
  var _DABT = "DeleteABTest";
  var _DABTR = "DeleteABTestRequest";
  var _DABTRe = "DeleteABTestResponse";
  var _DBE = "DeleteBatchEvaluation";
  var _DBER = "DeleteBatchEvaluationRequest";
  var _DBERe = "DeleteBatchEvaluationResponse";
  var _DE = "DeleteEvent";
  var _DEI = "DeleteEventInput";
  var _DEO2 = "DeleteEventOutput";
  var _DIE = "DuplicateIdException";
  var _DMR = "DeleteMemoryRecord";
  var _DMRI = "DeleteMemoryRecordInput";
  var _DMRO = "DeleteMemoryRecordOutput";
  var _DPI = "DeletePaymentInstrument";
  var _DPIR = "DeletePaymentInstrumentRequest";
  var _DPIRe = "DeletePaymentInstrumentResponse";
  var _DPS = "DeletePaymentSession";
  var _DPSR = "DeletePaymentSessionRequest";
  var _DPSRe = "DeletePaymentSessionResponse";
  var _DR = "DeleteRecommendation";
  var _DRR = "DeleteRecommendationRequest";
  var _DRRe = "DeleteRecommendationResponse";
  var _DSC = "DataSourceConfig";
  var _De = "Descriptors";
  var _E2 = "Email";
  var _EC2 = "EvaluationContent";
  var _ECL = "EvaluationContentList";
  var _ECW = "EmbeddedCryptoWallet";
  var _EE = "EvaluationExplanation";
  var _EET = "EvaluationExpectedTrajectory";
  var _EI = "EvaluationInput";
  var _EJ = "ExtractionJob";
  var _EJFI = "ExtractionJobFilterInput";
  var _EJM = "ExtractionJobMetadata";
  var _EJML = "ExtractionJobMetadataList";
  var _EJMx = "ExtractionJobMessages";
  var _EJR = "EvaluationJobResults";
  var _EL = "EvaluatorList";
  var _ELv = "EventList";
  var _EM2 = "EvaluatorMetric";
  var _EMFE = "EventMetadataFilterExpression";
  var _EMFL = "EventMetadataFilterList";
  var _EML = "EvaluatorMetricList";
  var _EMv = "EvaluationMetadata";
  var _EP = "ExternalProxy";
  var _ER = "EvaluateRequest";
  var _ERC = "EvaluationResultContent";
  var _ERI = "EvaluationReferenceInput";
  var _ERIv = "EvaluationReferenceInputs";
  var _ERv = "EvaluateResponse";
  var _ERva = "EvaluationResults";
  var _ES = "EvaluatorStatistics";
  var _ESAS = "ExecutionSummaryAffectedSession";
  var _ESASL = "ExecutionSummaryAffectedSessionList";
  var _ESC = "ExecutionSummaryCluster";
  var _ESCL = "ExecutionSummaryClusterList";
  var _ESCRC = "ExecutionSummaryClusteringResultContent";
  var _ESL = "EvaluatorSummaryList";
  var _ESv = "EvaluatorSummary";
  var _ET = "EvaluationTarget";
  var _Ev = "Evaluator";
  var _Eva = "Evaluate";
  var _Eve = "Event";
  var _FARC = "FailureAnalysisResultContent";
  var _FCC = "FailureCategoryCluster";
  var _FCCL = "FailureCategoryClusterList";
  var _FI = "FilterInput";
  var _FSCC = "FailureSubCategoryCluster";
  var _FSCCL = "FailureSubCategoryClusterList";
  var _FSD = "FailureSpanDetail";
  var _FSDL = "FailureSpanDetailList";
  var _FV = "FilterValue";
  var _GABT = "GetABTest";
  var _GABTR = "GetABTestRequest";
  var _GABTRe = "GetABTestResponse";
  var _GAC = "GetAgentCard";
  var _GACR = "GetAgentCardRequest";
  var _GACRe = "GetAgentCardResponse";
  var _GBE = "GetBatchEvaluation";
  var _GBER = "GetBatchEvaluationRequest";
  var _GBERe = "GetBatchEvaluationResponse";
  var _GBS = "GetBrowserSession";
  var _GBSR = "GetBrowserSessionRequest";
  var _GBSRe = "GetBrowserSessionResponse";
  var _GCIS = "GetCodeInterpreterSession";
  var _GCISR = "GetCodeInterpreterSessionRequest";
  var _GCISRe = "GetCodeInterpreterSessionResponse";
  var _GE = "GetEvent";
  var _GEI = "GetEventInput";
  var _GEO = "GetEventOutput";
  var _GF = "GatewayFilter";
  var _GMR = "GetMemoryRecord";
  var _GMRI = "GetMemoryRecordInput";
  var _GMRO = "GetMemoryRecordOutput";
  var _GPI = "GetPaymentInstrument";
  var _GPIB = "GetPaymentInstrumentBalance";
  var _GPIBR = "GetPaymentInstrumentBalanceRequest";
  var _GPIBRe = "GetPaymentInstrumentBalanceResponse";
  var _GPIR = "GetPaymentInstrumentRequest";
  var _GPIRe = "GetPaymentInstrumentResponse";
  var _GPS = "GetPaymentSession";
  var _GPSR = "GetPaymentSessionRequest";
  var _GPSRe = "GetPaymentSessionResponse";
  var _GR = "GetRecommendation";
  var _GRAK = "GetResourceApiKey";
  var _GRAKR = "GetResourceApiKeyRequest";
  var _GRAKRe = "GetResourceApiKeyResponse";
  var _GROT = "GetResourceOauth2Token";
  var _GROTR = "GetResourceOauth2TokenRequest";
  var _GROTRe = "GetResourceOauth2TokenResponse";
  var _GRPT = "GetResourcePaymentToken";
  var _GRPTR = "GetResourcePaymentTokenRequest";
  var _GRPTRe = "GetResourcePaymentTokenResponse";
  var _GRR = "GetRecommendationRequest";
  var _GRRe = "GetRecommendationResponse";
  var _GTS = "GroundTruthSource";
  var _GTT = "GroundTruthTurn";
  var _GTTI = "GroundTruthTurnInput";
  var _GTTL = "GroundTruthTurnList";
  var _GWAT = "GetWorkloadAccessToken";
  var _GWATFJWT = "GetWorkloadAccessTokenForJWT";
  var _GWATFJWTR = "GetWorkloadAccessTokenForJWTRequest";
  var _GWATFJWTRe = "GetWorkloadAccessTokenForJWTResponse";
  var _GWATFUI = "GetWorkloadAccessTokenForUserId";
  var _GWATFUIR = "GetWorkloadAccessTokenForUserIdRequest";
  var _GWATFUIRe = "GetWorkloadAccessTokenForUserIdResponse";
  var _GWATR = "GetWorkloadAccessTokenRequest";
  var _GWATRe = "GetWorkloadAccessTokenResponse";
  var _HACBC = "HarnessAgentCoreBrowserConfig";
  var _HACCIC = "HarnessAgentCoreCodeInterpreterConfig";
  var _HACGC = "HarnessAgentCoreGatewayConfig";
  var _HBMC = "HarnessBedrockModelConfig";
  var _HCB = "HarnessContentBlocks";
  var _HCBD = "HarnessContentBlockDelta";
  var _HCBDE = "HarnessContentBlockDeltaEvent";
  var _HCBS = "HarnessContentBlockStart";
  var _HCBSE = "HarnessContentBlockStartEvent";
  var _HCBSEa = "HarnessContentBlockStopEvent";
  var _HCBa = "HarnessContentBlock";
  var _HGMC = "HarnessGeminiModelConfig";
  var _HGOA = "HarnessGatewayOutboundAuth";
  var _HHM = "HttpHeadersMap";
  var _HIFC = "HarnessInlineFunctionConfig";
  var _HIFD = "HarnessInlineFunctionDescription";
  var _HLLAB = "HarnessLiteLlmApiBase";
  var _HLLMC = "HarnessLiteLlmModelConfig";
  var _HM = "HarnessMessage";
  var _HMC = "HarnessModelConfiguration";
  var _HME = "HarnessMetadataEvent";
  var _HMSE = "HarnessMessageStartEvent";
  var _HMSEa = "HarnessMessageStopEvent";
  var _HMa = "HarnessMessages";
  var _HOAMC = "HarnessOpenAiModelConfig";
  var _HRCB = "HarnessReasoningContentBlock";
  var _HRCBD = "HarnessReasoningContentBlockDelta";
  var _HRMC = "HarnessRemoteMcpConfig";
  var _HRMU = "HarnessRemoteMcpUrl";
  var _HRTB = "HarnessReasoningTextBlock";
  var _HS = "HarnessSkills";
  var _HSASS = "HarnessSkillAwsSkillsSource";
  var _HSCB = "HarnessSystemContentBlock";
  var _HSGA = "HarnessSkillGitAuth";
  var _HSGS = "HarnessSkillGitSource";
  var _HSM = "HarnessStreamMetrics";
  var _HSP = "HarnessSystemPrompt";
  var _HSSS = "HarnessSkillS3Source";
  var _HSa = "HarnessSkill";
  var _HT = "HarnessTool";
  var _HTC = "HarnessToolConfiguration";
  var _HTRB = "HarnessToolResultBlock";
  var _HTRBD = "HarnessToolResultBlocksDelta";
  var _HTRBDa = "HarnessToolResultBlockDelta";
  var _HTRBS = "HarnessToolResultBlockStart";
  var _HTRCB = "HarnessToolResultContentBlocks";
  var _HTRCBa = "HarnessToolResultContentBlock";
  var _HTU = "HarnessTokenUsage";
  var _HTUB = "HarnessToolUseBlock";
  var _HTUBD = "HarnessToolUseBlockDelta";
  var _HTUBS = "HarnessToolUseBlockStart";
  var _HTa = "HarnessTools";
  var _I = "Insight";
  var _IAR2 = "InvokeAgentRuntime";
  var _IARC = "InvokeAgentRuntimeCommand";
  var _IARCR = "InvokeAgentRuntimeCommandRequest";
  var _IARCRB = "InvokeAgentRuntimeCommandRequestBody";
  var _IARCRn = "InvokeAgentRuntimeCommandResponse";
  var _IARCSO = "InvokeAgentRuntimeCommandStreamOutput";
  var _IARR = "InvokeAgentRuntimeRequest";
  var _IARRn = "InvokeAgentRuntimeResponse";
  var _IB = "InvokeBrowser";
  var _IBR = "InvokeBrowserRequest";
  var _IBRn = "InvokeBrowserResponse";
  var _ICB = "InputContentBlock";
  var _ICBL = "InputContentBlockList";
  var _ICI = "InvokeCodeInterpreter";
  var _ICIR = "InvokeCodeInterpreterRequest";
  var _ICIRn = "InvokeCodeInterpreterResponse";
  var _IFS = "InsightsFailureSignal";
  var _IFSL = "InsightsFailureSignalList";
  var _IGT = "InlineGroundTruth";
  var _IH = "InvokeHarness";
  var _IHR = "InvokeHarnessRequest";
  var _IHRn = "InvokeHarnessResponse";
  var _IHSO = "InvokeHarnessStreamOutput";
  var _IIE = "InvalidInputException";
  var _IL = "InsightList";
  var _ISE2 = "InternalServerException";
  var _KPA = "KeyPressArguments";
  var _KPR = "KeyPressResult";
  var _KSA = "KeyShortcutArguments";
  var _KSR = "KeyShortcutResult";
  var _KTA = "KeyTypeArguments";
  var _KTR = "KeyTypeResult";
  var _LA = "LinkedAccount";
  var _LABT = "ListABTests";
  var _LABTR = "ListABTestsRequest";
  var _LABTRi = "ListABTestsResponse";
  var _LADJ = "LinkedAccountDeveloperJwt";
  var _LAE = "LinkedAccountEmail";
  var _LAI = "ListActorsInput";
  var _LAL = "LinkedAccountList";
  var _LAO = "ListActorsOutput";
  var _LAOA = "LinkedAccountOAuth2";
  var _LAS = "LinkedAccountSms";
  var _LAi = "ListActors";
  var _LBE = "ListBatchEvaluations";
  var _LBER = "ListBatchEvaluationsRequest";
  var _LBERi = "ListBatchEvaluationsResponse";
  var _LBS = "ListBrowserSessions";
  var _LBSR = "ListBrowserSessionsRequest";
  var _LBSRi = "ListBrowserSessionsResponse";
  var _LCIS = "ListCodeInterpreterSessions";
  var _LCISR = "ListCodeInterpreterSessionsRequest";
  var _LCISRi = "ListCodeInterpreterSessionsResponse";
  var _LE = "LeftExpression";
  var _LEI = "ListEventsInput";
  var _LEO = "ListEventsOutput";
  var _LEi = "ListEvents";
  var _LMEJ = "ListMemoryExtractionJobs";
  var _LMEJI = "ListMemoryExtractionJobsInput";
  var _LMEJO = "ListMemoryExtractionJobsOutput";
  var _LMR = "ListMemoryRecords";
  var _LMRI = "ListMemoryRecordsInput";
  var _LMRO = "ListMemoryRecordsOutput";
  var _LPI = "ListPaymentInstruments";
  var _LPIR = "ListPaymentInstrumentsRequest";
  var _LPIRi = "ListPaymentInstrumentsResponse";
  var _LPS = "ListPaymentSessions";
  var _LPSR = "ListPaymentSessionsRequest";
  var _LPSRi = "ListPaymentSessionsResponse";
  var _LR = "ListRecommendations";
  var _LRR = "ListRecommendationsRequest";
  var _LRRi = "ListRecommendationsResponse";
  var _LS = "ListSessions";
  var _LSI = "ListSessionsInput";
  var _LSO = "ListSessionsOutput";
  var _LVS = "LiveViewStream";
  var _MC2 = "MemoryContent";
  var _MCA = "MouseClickArguments";
  var _MCR = "MouseClickResult";
  var _MD = "MemoryDocument";
  var _MDA = "MouseDragArguments";
  var _MDR = "MouseDragResult";
  var _MDc = "McpDescriptor";
  var _ML2 = "MessagesList";
  var _MM = "MessageMetadata";
  var _MMA = "MouseMoveArguments";
  var _MMFE = "MemoryMetadataFilterExpression";
  var _MMFL = "MemoryMetadataFilterList";
  var _MMR = "MouseMoveResult";
  var _MMe = "MetadataMap";
  var _MPV = "Mcp-Protocol-Version";
  var _MR = "MemoryRecord";
  var _MRCI = "MemoryRecordCreateInput";
  var _MRCIL = "MemoryRecordsCreateInputList";
  var _MRDI = "MemoryRecordDeleteInput";
  var _MRDIL = "MemoryRecordsDeleteInputList";
  var _MRLE = "MemoryRecordLeftExpression";
  var _MRMM = "MemoryRecordMetadataMap";
  var _MRMV = "MemoryRecordMetadataValue";
  var _MRO = "MemoryRecordOutput";
  var _MROL = "MemoryRecordsOutputList";
  var _MRRE = "MemoryRecordRightExpression";
  var _MRS = "MemoryRecordSummary";
  var _MRSL = "MemoryRecordSummaryList";
  var _MRUI = "MemoryRecordUpdateInput";
  var _MRUIL = "MemoryRecordsUpdateInputList";
  var _MSA = "MouseScrollArguments";
  var _MSI = "Mcp-Session-Id";
  var _MSR = "MouseScrollResult";
  var _MV2 = "MetadataValue";
  var _OAA = "OAuth2Authentication";
  var _OACP = "OAuthCredentialProvider";
  var _OACPV = "OAuthCustomParametersValue";
  var _OACPu = "OAuthCustomParameters";
  var _OC = "OutputConfig";
  var _OECS = "OnlineEvaluationConfigSource";
  var _P2 = "Proxies";
  var _PB = "ProxyBypass";
  var _PC2 = "ProxyConfiguration";
  var _PCr = "ProxyCredentials";
  var _PD2 = "PaymentDocument";
  var _PI = "PaymentInstrument";
  var _PID = "PaymentInstrumentDetails";
  var _PIS = "PaymentInstrumentSummary";
  var _PISL = "PaymentInstrumentSummaryList";
  var _PIa = "PaymentInput";
  var _PN2 = "PhoneNumber";
  var _PO = "PaymentOutput";
  var _PP = "ProcessPayment";
  var _PPR = "ProcessPaymentRequest";
  var _PPRr = "ProcessPaymentResponse";
  var _PS = "PaymentSession";
  var _PSS = "PaymentSessionSummary";
  var _PSSL = "PaymentSessionSummaryList";
  var _PT2 = "PayloadType";
  var _PTL = "PayloadTypeList";
  var _PTRI = "PaymentTokenRequestInput";
  var _PTRO = "PaymentTokenResponseOutput";
  var _PVOEC = "PerVariantOnlineEvaluationConfig";
  var _PVOECL = "PerVariantOnlineEvaluationConfigList";
  var _Pr = "Proxy";
  var _RC = "ResourceContent";
  var _RCC = "RootCauseCluster";
  var _RCCL = "RootCauseClusterList";
  var _RCE = "RetryableConflictException";
  var _RCEu = "RuntimeClientError";
  var _RCe = "ResponseChunk";
  var _RCec = "RecommendationConfig";
  var _RE = "RightExpression";
  var _REC = "RecommendationEvaluationConfig";
  var _REL = "RecommendationEvaluatorList";
  var _RER = "RecommendationEvaluatorReference";
  var _RL = "ResourceLocation";
  var _RMR = "RetrieveMemoryRecords";
  var _RMRI = "RetrieveMemoryRecordsInput";
  var _RMRO = "RetrieveMemoryRecordsOutput";
  var _RNFE2 = "ResourceNotFoundException";
  var _RR2 = "RecommendationResult";
  var _RRCB = "RecommendationResultConfigurationBundle";
  var _RRS = "RegistryRecordSummary";
  var _RRSL = "RegistryRecordSummaryList";
  var _RS = "ResponseStream";
  var _RSL = "RecommendationSummaryList";
  var _RSe = "RecommendationSummary";
  var _S2 = "State";
  var _SA2 = "ScreenshotArguments";
  var _SBE = "StartBatchEvaluation";
  var _SBER = "StartBatchEvaluationRequest";
  var _SBERt = "StartBatchEvaluationResponse";
  var _SBERto = "StopBatchEvaluationRequest";
  var _SBERtop = "StopBatchEvaluationResponse";
  var _SBEt = "StopBatchEvaluation";
  var _SBS = "StartBrowserSession";
  var _SBSP = "SaveBrowserSessionProfile";
  var _SBSPR = "SaveBrowserSessionProfileRequest";
  var _SBSPRa = "SaveBrowserSessionProfileResponse";
  var _SBSR = "StartBrowserSessionRequest";
  var _SBSRt = "StartBrowserSessionResponse";
  var _SBSRto = "StopBrowserSessionRequest";
  var _SBSRtop = "StopBrowserSessionResponse";
  var _SBSt = "StopBrowserSession";
  var _SC = "SearchCriteria";
  var _SCIS = "StartCodeInterpreterSession";
  var _SCISR = "StartCodeInterpreterSessionRequest";
  var _SCISRt = "StartCodeInterpreterSessionResponse";
  var _SCISRto = "StopCodeInterpreterSessionRequest";
  var _SCISRtop = "StopCodeInterpreterSessionResponse";
  var _SCISt = "StopCodeInterpreterSession";
  var _SCp = "SpanContext";
  var _SD = "ServerDefinition";
  var _SDk = "SkillDefinition";
  var _SE = "ServiceException";
  var _SF = "SessionFilter";
  var _SFC = "SessionFilterConfig";
  var _SJ = "SensitiveJson";
  var _SL = "S3Location";
  var _SLe = "SessionLimits";
  var _SMD = "SkillMdDefinition";
  var _SMEJ = "StartMemoryExtractionJob";
  var _SMEJI = "StartMemoryExtractionJobInput";
  var _SMEJO = "StartMemoryExtractionJobOutput";
  var _SML = "SecretsManagerLocation";
  var _SMLe = "SessionMetadataList";
  var _SMS = "SessionMetadataShape";
  var _SPAST = "StripePrivyAuthorizationSignatureType";
  var _SPBATT = "StripePrivyBasicAuthTokenType";
  var _SPC = "SystemPromptConfig";
  var _SPCB = "SystemPromptConfigurationBundle";
  var _SPRBT = "StripePrivyRequestBodyType";
  var _SPRC = "SystemPromptRecommendationConfig";
  var _SPRR = "SystemPromptRecommendationResult";
  var _SPT = "SystemPromptText";
  var _SPTRI = "StripePrivyTokenRequestInput";
  var _SPTRO = "StripePrivyTokenResponseOutput";
  var _SQEE = "ServiceQuotaExceededException";
  var _SR = "ScreenshotResult";
  var _SRR = "StartRecommendationRequest";
  var _SRRR = "SearchRegistryRecordsRequest";
  var _SRRRe = "SearchRegistryRecordsResponse";
  var _SRRe = "SearchRegistryRecords";
  var _SRRt = "StartRecommendationResponse";
  var _SRS = "StopRuntimeSession";
  var _SRSR = "StopRuntimeSessionRequest";
  var _SRSRt = "StopRuntimeSessionResponse";
  var _SRt = "StartRecommendation";
  var _SS = "SensitiveString";
  var _SSL = "SessionSummaryList";
  var _SSe = "SessionSummary";
  var _ST2 = "SensitiveText";
  var _SU = "StreamUpdate";
  var _Sp = "Spans";
  var _TA = "ToolArguments";
  var _TB = "TokenBalance";
  var _TD = "ToolsDefinition";
  var _TDC = "ToolDescriptionConfig";
  var _TDCB = "ToolDescriptionConfigurationBundle";
  var _TDI = "ToolDescriptionInput";
  var _TDL = "ToolDescriptionList";
  var _TDO = "ToolDescriptionOutput";
  var _TDRC = "ToolDescriptionRecommendationConfig";
  var _TDRL = "ToolDescriptionResultList";
  var _TDRR = "ToolDescriptionRecommendationResult";
  var _TDS = "ToolDescriptionSource";
  var _TDT = "ToolDescriptionText";
  var _TDTI = "ToolDescriptionTextInput";
  var _TE = "ThrottledException";
  var _TEh = "ThrottlingException";
  var _TR = "TargetRef";
  var _TRSC = "ToolResultStructuredContent";
  var _TU = "TokenUsage";
  var _UABT = "UpdateABTest";
  var _UABTR = "UpdateABTestRequest";
  var _UABTRp = "UpdateABTestResponse";
  var _UBS = "UpdateBrowserStream";
  var _UBSR = "UpdateBrowserStreamRequest";
  var _UBSRp = "UpdateBrowserStreamResponse";
  var _UE2 = "UnauthorizedException";
  var _UI = "UserIdentifier";
  var _UIAS = "UserIntentAffectedSession";
  var _UIASL = "UserIntentAffectedSessionList";
  var _UIC = "UserIntentCluster";
  var _UICL = "UserIntentClusterList";
  var _UICRC = "UserIntentClusteringResultContent";
  var _UTT = "UserTokenType";
  var _V2 = "Variant";
  var _VC = "VariantConfiguration";
  var _VE = "ValidationException";
  var _VEF = "ValidationExceptionField";
  var _VEFL = "ValidationExceptionFieldList";
  var _VL = "VariantList";
  var _VP = "ViewPort";
  var _VR = "VariantResult";
  var _VRL = "VariantResultList";
  var _WITT = "WorkloadIdentityTokenType";
  var _XABAPAN = "X-Amzn-Bedrock-AgentCore-Payments-Agent-Name";
  var _XABAPUI = "X-Amzn-Bedrock-AgentCore-Payments-User-Id";
  var _XABARSI = "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id";
  var _XABARUI = "X-Amzn-Bedrock-AgentCore-Runtime-User-Id";
  var _XATI = "X-Amzn-Trace-Id";
  var _a2 = "a2a";
  var _aB = "apiBase";
  var _aC = "agentCard";
  var _aCB = "agentCoreBrowser";
  var _aCCI = "agentCoreCodeInterpreter";
  var _aCG = "agentCoreGateway";
  var _aCb = "absoluteChange";
  var _aDE = "accessDeniedException";
  var _aF = "apiFormat";
  var _aI = "actorId";
  var _aIc = "accountId";
  var _aIp = "appId";
  var _aIw = "awsIam";
  var _aK = "apiKey";
  var _aKA = "apiKeyArn";
  var _aL = "availableLimits";
  var _aN = "agentName";
  var _aP = "additionalParams";
  var _aRA = "agentRuntimeArn";
  var _aS = "automationStream";
  var _aSA = "availableSpendAmount";
  var _aSC = "affectedSessionCount";
  var _aSU = "automationStreamUpdate";
  var _aSc = "actorSummaries";
  var _aSf = "affectedSessions";
  var _aSg = "agentSkills";
  var _aSu = "authorizationSignature";
  var _aSv = "averageScore";
  var _aSw = "awsSkills";
  var _aT = "analysisTimestamp";
  var _aTA = "abTestArn";
  var _aTI = "abTestId";
  var _aTb = "abTests";
  var _aTc = "accessToken";
  var _aTg = "agentTraces";
  var _aTl = "allowedTools";
  var _aTp = "approachTaken";
  var _aU = "authorizationUrl";
  var _ac = "accept";
  var _act = "action";
  var _am = "amount";
  var _ap = "apple";
  var _ar = "arguments";
  var _as = "assertions";
  var _au = "audiences";
  var _aut = "auth";
  var _b = "branch";
  var _bA = "bundleArn";
  var _bAT = "basicAuthToken";
  var _bAa = "basicAuth";
  var _bAr = "browserArn";
  var _bE = "batchEvaluations";
  var _bEA = "batchEvaluationArn";
  var _bEI = "batchEvaluationId";
  var _bEN = "batchEvaluationName";
  var _bEa = "batchEvaluation";
  var _bI = "browserIdentifier";
  var _bMC = "bedrockModelConfig";
  var _bT = "bearerToken";
  var _bV = "bundleVersion";
  var _bVo = "booleanValue";
  var _ba = "baggage";
  var _bl = "blob";
  var _bo = "body";
  var _bu = "button";
  var _buc = "bucket";
  var _by = "bypass";
  var _c2 = "client";
  var _cA = "createdAt";
  var _cAr = "credentialArn";
  var _cB = "configurationBundle";
  var _cBD = "contentBlockDelta";
  var _cBI = "contentBlockIndex";
  var _cBS = "contentBlockStart";
  var _cBSo = "contentBlockStop";
  var _cC = "clickCount";
  var _cCTR = "coinbaseCdpTokenRequest";
  var _cCTRo = "coinbaseCdpTokenResponse";
  var _cCl = "clearContext";
  var _cD = "contentDelta";
  var _cE = "conflictException";
  var _cI = "clusterId";
  var _cIA = "codeInterpreterArn";
  var _cII = "codeInterpreterIdentifier";
  var _cIo = "confidenceInterval";
  var _cL = "cloudwatchLogs";
  var _cP = "customParameters";
  var _cRI = "currentRunId";
  var _cRIT = "cacheReadInputTokens";
  var _cS = "controlStats";
  var _cSo = "contentStart";
  var _cSon = "contentStop";
  var _cSu = "customState";
  var _cT = "clientToken";
  var _cTo = "contentType";
  var _cWC = "cloudWatchConfig";
  var _cWIT = "cacheWriteInputTokens";
  var _cWL = "cloudWatchLogs";
  var _cX = "cryptoX402";
  var _ca = "category";
  var _ce = "certificates";
  var _ch = "chain";
  var _chu = "chunk";
  var _co = "content";
  var _cod = "code";
  var _com = "command";
  var _con = "context";
  var _conf = "config";
  var _confi = "confidence";
  var _conv = "conversational";
  var _cr = "credentials";
  var _cu = "currency";
  var _cus = "custom";
  var _d = "description";
  var _dJ = "developerJwt";
  var _dP = "domainPatterns";
  var _dPi = "directoryPath";
  var _dRU = "defaultReturnUrl";
  var _dSC = "dataSourceConfig";
  var _dT = "descriptorType";
  var _dTV = "dateTimeValue";
  var _dV = "doubleValue";
  var _dX = "deltaX";
  var _dY = "deltaY";
  var _da = "data";
  var _de = "delta";
  var _dec = "decimals";
  var _des = "descriptors";
  var _e2 = "error";
  var _eA = "evaluatorArn";
  var _eAm = "emailAddress";
  var _eC = "exitCode";
  var _eCW = "embeddedCryptoWallet";
  var _eCr = "errorCode";
  var _eCv = "evaluationConfig";
  var _eD = "errorDetails";
  var _eF = "eventFilter";
  var _eI = "eventId";
  var _eIv = "evaluatorId";
  var _eIva = "evaluationInput";
  var _eJ = "extractionJob";
  var _eM = "evaluatorMetrics";
  var _eMr = "errorMessage";
  var _eMv = "eventMetadata";
  var _eMva = "evaluationMetadata";
  var _eMx = "extractionMode";
  var _eN = "evaluatorName";
  var _eOC = "enableOnCreate";
  var _eP = "enterprisePolicies";
  var _ePx = "externalProxy";
  var _eR = "evaluationResults";
  var _eRI = "evaluationReferenceInputs";
  var _eRx = "expectedResponse";
  var _eS = "executionStatus";
  var _eSR = "executionSummaryResult";
  var _eSv = "evaluatorSummaries";
  var _eSx = "executionSummaries";
  var _eT = "endTime";
  var _eTIM = "expiryTimeInMinutes";
  var _eTv = "eventTimestamp";
  var _eTva = "evaluationTarget";
  var _eTx = "expectedTrajectory";
  var _eTxe = "executionTime";
  var _eX = "endX";
  var _eY = "endY";
  var _em = "email";
  var _ev = "evaluators";
  var _eve = "event";
  var _even = "events";
  var _evi = "evidence";
  var _ex = "explanation";
  var _ext = "extensions";
  var _f = "filters";
  var _fA = "forceAuthentication";
  var _fAR = "failureAnalysisResult";
  var _fC = "filterConfig";
  var _fL = "fieldList";
  var _fO = "finalOutcome";
  var _fR = "failedRecords";
  var _fRa = "failureReason";
  var _fS = "failureSpans";
  var _fT = "fixType";
  var _fa = "failures";
  var _fi = "filter";
  var _fo = "format";
  var _g = "git";
  var _gA = "gatewayArn";
  var _gF = "gatewayFilter";
  var _gMC = "geminiModelConfig";
  var _gT = "grantType";
  var _gTr = "groundTruth";
  var _gi = "github";
  var _go = "google";
  var _h = "headers";
  var _hA = "harnessArn";
  var _hE2 = "httpError";
  var _hH = "httpHeader";
  var _hQ = "httpQuery";
  var _he = "height";
  var _ht = "http";
  var _i = "insights";
  var _iAS = "includeAuthorizationSignature";
  var _iC = "inlineContent";
  var _iE = "isError";
  var _iF = "inlineFunction";
  var _iI = "insightId";
  var _iP = "includePayloads";
  var _iPB = "includeParentBranches";
  var _iRIF = "ignoredReferenceInputFields";
  var _iS = "inputSchema";
  var _iSE = "internalServerException";
  var _iSs = "isSignificant";
  var _iT = "idempotencyToken";
  var _iTn = "inputTokens";
  var _iWAT = "includeWalletAuthToken";
  var _in = "input";
  var _inl = "inline";
  var _it = "items";
  var _j = "jobs";
  var _jI = "jobId";
  var _jID = "jobID";
  var _js = "json";
  var _k = "key";
  var _kKA = "kmsKeyArn";
  var _kP = "keyPress";
  var _kS = "keyShortcut";
  var _kT = "keyType";
  var _ke = "keys";
  var _ki = "kid";
  var _l = "location";
  var _lA = "linkedAccounts";
  var _lGA = "logGroupArns";
  var _lGN = "logGroupNames";
  var _lGNo = "logGroupName";
  var _lLMC = "liteLlmModelConfig";
  var _lM = "latencyMs";
  var _lSN = "logStreamName";
  var _lUA = "lastUpdatedAt";
  var _lVS = "liveViewStream";
  var _la = "label";
  var _lan = "language";
  var _le = "left";
  var _li = "limits";
  var _lo = "lower";
  var _m2 = "message";
  var _mC = "mouseClick";
  var _mD = "mouseDrag";
  var _mDEA = "maxDurationExpiresAt";
  var _mF = "metadataFilters";
  var _mI = "memoryId";
  var _mIa = "maxIterations";
  var _mIe = "messageIndex";
  var _mIo = "modelId";
  var _mK = "metadataKey";
  var _mL = "messagesList";
  var _mM = "mouseMove";
  var _mPV = "mcpProtocolVersion";
  var _mR = "memoryRecord";
  var _mRI = "memoryRecordId";
  var _mRS = "memoryRecordSummaries";
  var _mRa = "maxResults";
  var _mS = "mouseScroll";
  var _mSA = "maxSpendAmount";
  var _mSI = "mcpSessionId";
  var _mSIe = "memoryStrategyId";
  var _mSe = "messageStart";
  var _mSes = "messageStop";
  var _mT = "mimeType";
  var _mTa = "maxTokens";
  var _mV = "metadataValue";
  var _mc = "mcp";
  var _me = "mean";
  var _mes = "messages";
  var _met = "metadata";
  var _metr = "metrics";
  var _mo = "model";
  var _n = "name";
  var _nOSC = "numberOfSessionsCompleted";
  var _nOSF = "numberOfSessionsFailed";
  var _nOSI = "numberOfSessionsIgnored";
  var _nOSIP = "numberOfSessionsInProgress";
  var _nP = "namespacePath";
  var _nT = "nextToken";
  var _nV = "numberValue";
  var _na = "namespace";
  var _nam = "namespaces";
  var _ne = "network";
  var _no = "none";
  var _o = "operator";
  var _oA = "outboundAuth";
  var _oAMC = "openAiModelConfig";
  var _oAu = "oAuth2";
  var _oC = "outputConfig";
  var _oECA = "onlineEvaluationConfigArn";
  var _oECS = "onlineEvaluationConfigSource";
  var _oF = "oauth2Flow";
  var _oT = "outputTokens";
  var _oa = "oauth";
  var _p = "payload";
  var _pA = "providerArn";
  var _pC = "profileConfiguration";
  var _pCI = "paymentConnectorId";
  var _pCe = "percentChange";
  var _pCr = "proxyConfiguration";
  var _pI = "profileIdentifier";
  var _pID = "paymentInstrumentDetails";
  var _pII = "paymentInstrumentId";
  var _pIT = "paymentInstrumentType";
  var _pIa = "paymentInstrument";
  var _pIay = "paymentInstruments";
  var _pIaym = "paymentInput";
  var _pMA = "paymentManagerArn";
  var _pN = "phoneNumber";
  var _pO = "paymentOutput";
  var _pPI = "processPaymentId";
  var _pS = "paymentSession";
  var _pSI = "paymentSessionId";
  var _pSa = "paymentSessions";
  var _pT = "paymentType";
  var _pTR = "paymentTokenRequest";
  var _pTRa = "paymentTokenResponse";
  var _pV = "protocolVersion";
  var _pVOEC = "perVariantOnlineEvaluationConfig";
  var _pVa = "pValue";
  var _pa = "paths";
  var _pat = "path";
  var _po = "port";
  var _pr = "presses";
  var _pre = "prefix";
  var _pro = "proxies";
  var _prom = "prompt";
  var _q = "qualifier";
  var _r = "reason";
  var _rA = "roleArn";
  var _rAe = "recommendationArn";
  var _rAec = "recordArn";
  var _rAeg = "registryArn";
  var _rB = "requestBody";
  var _rC2 = "rootCauses";
  var _rCE = "runtimeClientError";
  var _rCPN = "resourceCredentialProviderName";
  var _rCe = "recommendationConfig";
  var _rCea = "reasoningContent";
  var _rCed = "redactedContent";
  var _rCo = "rootCause";
  var _rE = "requestExpiry";
  var _rEI = "rootEventId";
  var _rH = "requestHost";
  var _rI = "recommendationId";
  var _rIe = "requestIdentifier";
  var _rIec = "recordId";
  var _rIeg = "registryIds";
  var _rM = "requestMethod";
  var _rMe = "remoteMcp";
  var _rNFE = "resourceNotFoundException";
  var _rORU = "resourceOauth2ReturnUrl";
  var _rP = "requestPath";
  var _rR = "recommendationResult";
  var _rRe = "registryRecords";
  var _rS = "recommendationSummaries";
  var _rSI = "runtimeSessionId";
  var _rSP = "recommendedSystemPrompt";
  var _rT = "reasoningText";
  var _rTD = "recommendedToolDescription";
  var _rU = "redirectUrl";
  var _rUI = "runtimeUserId";
  var _re = "recommendation";
  var _rec = "records";
  var _res = "resource";
  var _reso = "resources";
  var _resp = "response";
  var _resu = "results";
  var _resul = "result";
  var _ri = "right";
  var _ro = "role";
  var _ru = "rule";
  var _run = "runtime";
  var _s2 = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockagentcore";
  var _sA = "secretArn";
  var _sAt = "startedAt";
  var _sAto = "stoppedAt";
  var _sC = "structuredContent";
  var _sCe = "searchCriteria";
  var _sCp = "spanContext";
  var _sCt = "statusCode";
  var _sCu = "subCategories";
  var _sD = "skillDefinition";
  var _sE = "streamEndpoint";
  var _sF = "statusFilter";
  var _sI = "sessionId";
  var _sIe = "sessionIds";
  var _sIp = "spanId";
  var _sIpa = "spanIds";
  var _sIt = "strategyId";
  var _sLV = "stringListValue";
  var _sM = "skillMd";
  var _sMe = "secretsManager";
  var _sMes = "sessionMetadata";
  var _sN = "serviceNames";
  var _sNe = "serverName";
  var _sP = "systemPrompt";
  var _sPJP = "systemPromptJsonPath";
  var _sPRC = "systemPromptRecommendationConfig";
  var _sPRR = "systemPromptRecommendationResult";
  var _sPTR = "stripePrivyTokenRequest";
  var _sPTRt = "stripePrivyTokenResponse";
  var _sQ = "searchQuery";
  var _sQEE = "serviceQuotaExceededException";
  var _sR = "successfulRecords";
  var _sRA = "sessionReplayArtifact";
  var _sRt = "stopReason";
  var _sS = "streamStatus";
  var _sSa = "sampleSize";
  var _sSe = "sessionStatus";
  var _sSes = "sessionSummaries";
  var _sSess = "sessionSpans";
  var _sT = "startTime";
  var _sTS = "sessionTimeoutSeconds";
  var _sU = "sessionUri";
  var _sUt = "streamUpdate";
  var _sV = "schemaVersion";
  var _sVt = "stringValue";
  var _sX = "startX";
  var _sY = "startY";
  var _s_ = "s3";
  var _sc = "scopes";
  var _sco = "score";
  var _scr = "screenshot";
  var _se2 = "server";
  var _sen = "sensitive";
  var _si = "size";
  var _sig = "signals";
  var _sign = "signature";
  var _sk = "skills";
  var _sm = "sms";
  var _st = "streaming";
  var _sta = "status";
  var _star = "start";
  var _stat = "statistics";
  var _std = "stdout";
  var _stde = "stderr";
  var _str = "streams";
  var _stre = "stream";
  var _su = "sub";
  var _t = "type";
  var _tB = "tokenBalance";
  var _tD = "toolDescription";
  var _tDJP = "toolDescriptionJsonPath";
  var _tDRC = "toolDescriptionRecommendationConfig";
  var _tDRR = "toolDescriptionRecommendationResult";
  var _tDT = "toolDescriptionText";
  var _tE = "totalEvaluated";
  var _tEh = "throttlingException";
  var _tF = "totalFailed";
  var _tI = "traceId";
  var _tIa = "taskId";
  var _tIr = "traceIds";
  var _tK = "topK";
  var _tN = "toolName";
  var _tNOS = "totalNumberOfSessions";
  var _tNo = "toolNames";
  var _tP = "targetPaths";
  var _tPo = "topP";
  var _tPr = "traceParent";
  var _tR = "timeRange";
  var _tRo = "toolResult";
  var _tS = "traceState";
  var _tSI = "testScenarioId";
  var _tSa = "taskStatus";
  var _tSi = "timeoutSeconds";
  var _tT = "totalTokens";
  var _tU = "tokenUsage";
  var _tUI = "toolUseId";
  var _tUo = "toolUse";
  var _ta = "tags";
  var _tar = "target";
  var _te = "text";
  var _tel = "telegram";
  var _tem = "temperature";
  var _ti = "timeout";
  var _tim = "timestamp";
  var _to = "token";
  var _too = "tools";
  var _tr = "traceparent";
  var _tra = "tracestate";
  var _tu = "turns";
  var _u = "upper";
  var _uA = "updatedAt";
  var _uI = "userIdentifier";
  var _uIR = "userIntentResult";
  var _uIs = "userId";
  var _uIse = "userIntents";
  var _uM = "userMessages";
  var _uT = "userToken";
  var _ur = "uri";
  var _url = "url";
  var _us = "usage";
  var _use = "username";
  var _v = "value";
  var _vC = "variantConfiguration";
  var _vE = "validationException";
  var _vI = "versionId";
  var _vN = "variantName";
  var _vP = "viewPort";
  var _vR = "variantResults";
  var _va = "variants";
  var _ve = "version";
  var _w = "weight";
  var _wA = "walletAddress";
  var _wAT = "walletAuthToken";
  var _wATo = "workloadAccessToken";
  var _wIT = "workloadIdentityToken";
  var _wN = "workloadName";
  var _wi = "width";
  var _x = "x";
  var _xabsi = "x-amzn-browser-session-id";
  var _xacisi = "x-amzn-code-interpreter-session-id";
  var _y = "y";
  var n02 = "com.amazonaws.bedrockagentcore";
  var _s_registry2 = TypeRegistry.for(_s2);
  var BedrockAgentCoreServiceException$ = [-3, _s2, "BedrockAgentCoreServiceException", 0, [], []];
  _s_registry2.registerError(BedrockAgentCoreServiceException$, BedrockAgentCoreServiceException);
  var n0_registry2 = TypeRegistry.for(n02);
  var AccessDeniedException$2 = [
    -3,
    n02,
    _ADE2,
    { [_e2]: _c2, [_hE2]: 403 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(AccessDeniedException$2, AccessDeniedException2);
  var ConflictException$ = [
    -3,
    n02,
    _CE,
    { [_e2]: _c2, [_hE2]: 409 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(ConflictException$, ConflictException);
  var DuplicateIdException$ = [
    -3,
    n02,
    _DIE,
    { [_e2]: _c2, [_hE2]: 409 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(DuplicateIdException$, DuplicateIdException);
  var InternalServerException$2 = [
    -3,
    n02,
    _ISE2,
    { [_e2]: _se2, [_hE2]: 500 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(InternalServerException$2, InternalServerException2);
  var InvalidInputException$ = [
    -3,
    n02,
    _IIE,
    { [_e2]: _c2, [_hE2]: 400 },
    [_m2],
    [0],
    1
  ];
  n0_registry2.registerError(InvalidInputException$, InvalidInputException);
  var ResourceNotFoundException$2 = [
    -3,
    n02,
    _RNFE2,
    { [_e2]: _c2, [_hE2]: 404 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(ResourceNotFoundException$2, ResourceNotFoundException2);
  var RetryableConflictException$ = [
    -3,
    n02,
    _RCE,
    { [_e2]: _c2, [_hE2]: 409 },
    [_m2],
    [0],
    1
  ];
  n0_registry2.registerError(RetryableConflictException$, RetryableConflictException);
  var RuntimeClientError$ = [
    -3,
    n02,
    _RCEu,
    { [_e2]: _c2, [_hE2]: 424 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(RuntimeClientError$, RuntimeClientError);
  var ServiceException$ = [
    -3,
    n02,
    _SE,
    { [_e2]: _se2, [_hE2]: 500 },
    [_m2],
    [0],
    1
  ];
  n0_registry2.registerError(ServiceException$, ServiceException2);
  var ServiceQuotaExceededException$ = [
    -3,
    n02,
    _SQEE,
    { [_e2]: _c2, [_hE2]: 402 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
  var ThrottledException$ = [
    -3,
    n02,
    _TE,
    { [_e2]: _c2, [_hE2]: 429 },
    [_m2],
    [0],
    1
  ];
  n0_registry2.registerError(ThrottledException$, ThrottledException);
  var ThrottlingException$ = [
    -3,
    n02,
    _TEh,
    { [_e2]: _c2, [_hE2]: 429 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(ThrottlingException$, ThrottlingException);
  var UnauthorizedException$2 = [
    -3,
    n02,
    _UE2,
    { [_e2]: _c2, [_hE2]: 401 },
    [_m2],
    [0]
  ];
  n0_registry2.registerError(UnauthorizedException$2, UnauthorizedException2);
  var ValidationException$ = [
    -3,
    n02,
    _VE,
    { [_e2]: _c2, [_hE2]: 400 },
    [_m2, _r, _fL],
    [0, 0, () => ValidationExceptionFieldList],
    2
  ];
  n0_registry2.registerError(ValidationException$, ValidationException);
  var errorTypeRegistries2 = [
    _s_registry2,
    n0_registry2
  ];
  var AccessTokenType = [0, n02, _ATT, 8, 0];
  var ApiKeyType = [0, n02, _AKT, 8, 0];
  var AuthorizationUrlType = [0, n02, _AUT, 8, 0];
  var Body = [0, n02, _B, 8, 21];
  var CoinbaseCdpPaymentJwtTokenType = [0, n02, _CCPJTT, 8, 0];
  var CustomRequestValueType = [0, n02, _CRVT, 8, 0];
  var Description = [0, n02, _D, 8, 0];
  var Email = [0, n02, _E2, 8, 0];
  var EvaluationExplanation = [0, n02, _EE, 8, 0];
  var HarnessInlineFunctionDescription = [0, n02, _HIFD, 8, 0];
  var HarnessLiteLlmApiBase = [0, n02, _HLLAB, 8, 0];
  var HarnessRemoteMcpUrl = [0, n02, _HRMU, 8, 0];
  var MemoryDocument = [0, n02, _MD, 8, 15];
  var OAuthCustomParametersValue = [0, n02, _OACPV, 8, 0];
  var PaymentDocument = [0, n02, _PD2, 8, 15];
  var PhoneNumber = [0, n02, _PN2, 8, 0];
  var ResponseStream = [0, n02, _RS, { [_sen]: 1, [_st]: 1 }, 42];
  var SensitiveJson = [0, n02, _SJ, 8, 15];
  var SensitiveString = [0, n02, _SS, 8, 0];
  var SensitiveText = [0, n02, _ST2, 8, 0];
  var State = [0, n02, _S2, 8, 0];
  var StripePrivyAuthorizationSignatureType = [0, n02, _SPAST, 8, 0];
  var StripePrivyBasicAuthTokenType = [0, n02, _SPBATT, 8, 0];
  var StripePrivyRequestBodyType = [0, n02, _SPRBT, 8, 0];
  var SystemPromptText = [0, n02, _SPT, 8, 0];
  var ToolDescriptionText = [0, n02, _TDT, 8, 0];
  var UserTokenType = [0, n02, _UTT, 8, 0];
  var WorkloadIdentityTokenType = [0, n02, _WITT, 8, 0];
  var A2aDescriptor$ = [
    3,
    n02,
    _AD,
    0,
    [_aC],
    [() => AgentCardDefinition$],
    1
  ];
  var ABTestResults$ = [
    3,
    n02,
    _ABTR,
    0,
    [_eM, _aT],
    [() => EvaluatorMetricList, 4],
    1
  ];
  var ABTestSummary$ = [
    3,
    n02,
    _ABTS,
    0,
    [_aTI, _aTA, _n, _sta, _eS, _cA, _uA, _d, _gA],
    [0, 0, 0, 0, 0, 4, 4, 0, 0],
    7
  ];
  var ActorSummary$ = [
    3,
    n02,
    _AS,
    0,
    [_aI],
    [0],
    1
  ];
  var AffectedSession$ = [
    3,
    n02,
    _ASf,
    0,
    [_sI, _ex, _fT, _re, _fS],
    [0, 0, 0, 0, () => FailureSpanDetailList],
    5
  ];
  var AgentCardDefinition$ = [
    3,
    n02,
    _ACD,
    0,
    [_sV, _iC],
    [0, 0]
  ];
  var AgentSkillsDescriptor$ = [
    3,
    n02,
    _ASD,
    0,
    [_sM, _sD],
    [() => SkillMdDefinition$, () => SkillDefinition$],
    1
  ];
  var Amount$ = [
    3,
    n02,
    _A2,
    0,
    [_v, _cu],
    [0, 0],
    2
  ];
  var AutomationStream$ = [
    3,
    n02,
    _ASu,
    0,
    [_sE, _sS],
    [0, 0],
    2
  ];
  var AutomationStreamUpdate$ = [
    3,
    n02,
    _ASU,
    0,
    [_sS],
    [0]
  ];
  var AvailableLimits$ = [
    3,
    n02,
    _AL,
    0,
    [_aSA, _uA],
    [() => Amount$, 5]
  ];
  var BasicAuth$ = [
    3,
    n02,
    _BA,
    0,
    [_sA],
    [0],
    1
  ];
  var BatchCreateMemoryRecordsInput$ = [
    3,
    n02,
    _BCMRI,
    0,
    [_mI, _rec, _cT],
    [[0, 1], [() => MemoryRecordsCreateInputList, 0], [0, 4]],
    2
  ];
  var BatchCreateMemoryRecordsOutput$ = [
    3,
    n02,
    _BCMRO,
    0,
    [_sR, _fR],
    [() => MemoryRecordsOutputList, () => MemoryRecordsOutputList],
    2
  ];
  var BatchDeleteMemoryRecordsInput$ = [
    3,
    n02,
    _BDMRI,
    0,
    [_mI, _rec],
    [[0, 1], () => MemoryRecordsDeleteInputList],
    2
  ];
  var BatchDeleteMemoryRecordsOutput$ = [
    3,
    n02,
    _BDMRO,
    0,
    [_sR, _fR],
    [() => MemoryRecordsOutputList, () => MemoryRecordsOutputList],
    2
  ];
  var BatchEvaluationSummary$ = [
    3,
    n02,
    _BES,
    0,
    [_bEI, _bEA, _bEN, _sta, _cA, _d, _ev, _i, _eR, _eD, _kKA, _uA],
    [0, 0, 0, 0, 5, 0, () => EvaluatorList, () => InsightList, () => EvaluationJobResults$, 64 | 0, 0, 5],
    5
  ];
  var BatchEvaluationTraceConfig$ = [
    3,
    n02,
    _BETC,
    0,
    [_bEA],
    [0],
    1
  ];
  var BatchUpdateMemoryRecordsInput$ = [
    3,
    n02,
    _BUMRI,
    0,
    [_mI, _rec],
    [[0, 1], [() => MemoryRecordsUpdateInputList, 0]],
    2
  ];
  var BatchUpdateMemoryRecordsOutput$ = [
    3,
    n02,
    _BUMRO,
    0,
    [_sR, _fR],
    [() => MemoryRecordsOutputList, () => MemoryRecordsOutputList],
    2
  ];
  var Branch$ = [
    3,
    n02,
    _Br,
    0,
    [_n, _rEI],
    [0, 0],
    1
  ];
  var BranchFilter$ = [
    3,
    n02,
    _BF,
    0,
    [_n, _iPB],
    [0, 2],
    1
  ];
  var BrowserEnterprisePolicy$ = [
    3,
    n02,
    _BEP,
    0,
    [_l, _t],
    [() => ResourceLocation$, 0],
    1
  ];
  var BrowserExtension$ = [
    3,
    n02,
    _BE,
    0,
    [_l],
    [() => ResourceLocation$],
    1
  ];
  var BrowserProfileConfiguration$ = [
    3,
    n02,
    _BPC,
    0,
    [_pI],
    [0],
    1
  ];
  var BrowserSessionStream$ = [
    3,
    n02,
    _BSS,
    0,
    [_aS, _lVS],
    [() => AutomationStream$, () => LiveViewStream$],
    1
  ];
  var BrowserSessionSummary$ = [
    3,
    n02,
    _BSSr,
    0,
    [_bI, _sI, _sta, _cA, _n, _lUA],
    [0, 0, 0, 5, 0, 5],
    4
  ];
  var Certificate$ = [
    3,
    n02,
    _C,
    0,
    [_l],
    [() => CertificateLocation$],
    1
  ];
  var CloudWatchFilterConfig$ = [
    3,
    n02,
    _CWFC,
    0,
    [_sIe, _tR],
    [64 | 0, () => SessionFilterConfig$]
  ];
  var CloudWatchLogsFilter$ = [
    3,
    n02,
    _CWLF,
    0,
    [_k, _o, _v],
    [0, 0, () => FilterValue$],
    3
  ];
  var CloudWatchLogsRule$ = [
    3,
    n02,
    _CWLR,
    0,
    [_f],
    [() => CloudWatchLogsFilterList]
  ];
  var CloudWatchLogsSource$ = [
    3,
    n02,
    _CWLS,
    0,
    [_sN, _lGN, _fC],
    [64 | 0, 64 | 0, () => CloudWatchFilterConfig$],
    2
  ];
  var CloudWatchLogsTraceConfig$ = [
    3,
    n02,
    _CWLTC,
    0,
    [_lGA, _sN, _sT, _eT, _ru],
    [64 | 0, 64 | 0, 5, 5, () => CloudWatchLogsRule$],
    4
  ];
  var CloudWatchOutputConfig$ = [
    3,
    n02,
    _CWOC,
    0,
    [_lGNo, _lSN],
    [0, 0],
    2
  ];
  var CodeInterpreterResult$ = [
    3,
    n02,
    _CIR,
    0,
    [_co, _sC, _iE],
    [() => ContentBlockList, () => ToolResultStructuredContent$, 2],
    1
  ];
  var CodeInterpreterSessionSummary$ = [
    3,
    n02,
    _CISS,
    0,
    [_cII, _sI, _sta, _cA, _n, _lUA],
    [0, 0, 0, 5, 0, 5],
    4
  ];
  var CoinbaseCdpTokenRequestInput$ = [
    3,
    n02,
    _CCTRI,
    0,
    [_rM, _rP, _rH, _iWAT, _rB],
    [0, 0, 0, 2, 0],
    2
  ];
  var CoinbaseCdpTokenResponseOutput$ = [
    3,
    n02,
    _CCTRO,
    0,
    [_bT, _wAT],
    [[() => CoinbaseCdpPaymentJwtTokenType, 0], [() => CoinbaseCdpPaymentJwtTokenType, 0]],
    1
  ];
  var CompleteResourceTokenAuthRequest$ = [
    3,
    n02,
    _CRTAR,
    0,
    [_uI, _sU],
    [[() => UserIdentifier$, 0], 0],
    2
  ];
  var CompleteResourceTokenAuthResponse$ = [
    3,
    n02,
    _CRTARo,
    0,
    [],
    []
  ];
  var ConfidenceInterval$ = [
    3,
    n02,
    _CI2,
    0,
    [_lo, _u],
    [1, 1]
  ];
  var ConfigurationBundleRef$ = [
    3,
    n02,
    _CBR,
    0,
    [_bA, _bV],
    [0, 0],
    2
  ];
  var ConfigurationBundleToolEntry$ = [
    3,
    n02,
    _CBTE,
    0,
    [_tN, _tDJP],
    [0, 0],
    2
  ];
  var ContentBlock$ = [
    3,
    n02,
    _CB,
    0,
    [_t, _te, _da, _mT, _ur, _n, _d, _si, _res],
    [0, 0, 21, 0, 0, 0, 0, 1, () => ResourceContent$],
    1
  ];
  var ContentDeltaEvent$ = [
    3,
    n02,
    _CDE,
    0,
    [_std, _stde],
    [0, 0]
  ];
  var ContentStartEvent$ = [
    3,
    n02,
    _CSE,
    0,
    [],
    []
  ];
  var ContentStopEvent$ = [
    3,
    n02,
    _CSEo,
    0,
    [_eC, _sta],
    [1, 0],
    2
  ];
  var ControlStats$ = [
    3,
    n02,
    _CS2,
    0,
    [_vN, _sSa, _me],
    [0, 1, 1],
    3
  ];
  var Conversational$ = [
    3,
    n02,
    _Co,
    0,
    [_co, _ro],
    [[() => Content$, 0], 0],
    2
  ];
  var CreateABTestRequest$ = [
    3,
    n02,
    _CABTR,
    0,
    [_n, _gA, _va, _eCv, _rA, _d, _gF, _eOC, _cT, _ta],
    [0, 0, () => VariantList, () => ABTestEvaluationConfig$, 0, 0, () => GatewayFilter$, 2, [0, 4], 128 | 0],
    5
  ];
  var CreateABTestResponse$ = [
    3,
    n02,
    _CABTRr,
    0,
    [_aTI, _aTA, _sta, _eS, _cA, _n],
    [0, 0, 0, 0, 4, 0],
    5
  ];
  var CreateEventInput$ = [
    3,
    n02,
    _CEI,
    0,
    [_mI, _aI, _eTv, _p, _sI, _b, _cT, _met, _eMx],
    [[0, 1], 0, 4, [() => PayloadTypeList, 0], 0, () => Branch$, [0, 4], () => MetadataMap, 0],
    4
  ];
  var CreateEventOutput$ = [
    3,
    n02,
    _CEO,
    0,
    [_eve],
    [[() => Event$, 0]],
    1
  ];
  var CreatePaymentInstrumentRequest$ = [
    3,
    n02,
    _CPIR,
    0,
    [_pMA, _pCI, _pIT, _pID, _uIs, _aN, _cT],
    [0, 0, 0, [() => PaymentInstrumentDetails$, 0], [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], [0, 4]],
    4
  ];
  var CreatePaymentInstrumentResponse$ = [
    3,
    n02,
    _CPIRr,
    0,
    [_pIa],
    [[() => PaymentInstrument$, 0]],
    1
  ];
  var CreatePaymentSessionRequest$ = [
    3,
    n02,
    _CPSR,
    0,
    [_pMA, _eTIM, _uIs, _aN, _li, _cT],
    [0, 1, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], () => SessionLimits$, [0, 4]],
    2
  ];
  var CreatePaymentSessionResponse$ = [
    3,
    n02,
    _CPSRr,
    0,
    [_pS],
    [() => PaymentSession$],
    1
  ];
  var CryptoX402PaymentInput$ = [
    3,
    n02,
    _CXPI,
    0,
    [_ve, _p],
    [0, [() => PaymentDocument, 0]],
    2
  ];
  var CryptoX402PaymentOutput$ = [
    3,
    n02,
    _CXPO,
    0,
    [_ve, _p],
    [0, [() => PaymentDocument, 0]],
    2
  ];
  var CustomDescriptor$ = [
    3,
    n02,
    _CD2,
    0,
    [_iC],
    [0]
  ];
  var DeleteABTestRequest$ = [
    3,
    n02,
    _DABTR,
    0,
    [_aTI],
    [[0, 1]],
    1
  ];
  var DeleteABTestResponse$ = [
    3,
    n02,
    _DABTRe,
    0,
    [_aTI, _aTA, _sta],
    [0, 0, 0],
    3
  ];
  var DeleteBatchEvaluationRequest$ = [
    3,
    n02,
    _DBER,
    0,
    [_bEI],
    [[0, 1]],
    1
  ];
  var DeleteBatchEvaluationResponse$ = [
    3,
    n02,
    _DBERe,
    0,
    [_bEI, _bEA, _sta],
    [0, 0, 0],
    3
  ];
  var DeleteEventInput$ = [
    3,
    n02,
    _DEI,
    0,
    [_mI, _sI, _eI, _aI],
    [[0, 1], [0, 1], [0, 1], [0, 1]],
    4
  ];
  var DeleteEventOutput$ = [
    3,
    n02,
    _DEO2,
    0,
    [_eI],
    [0],
    1
  ];
  var DeleteMemoryRecordInput$ = [
    3,
    n02,
    _DMRI,
    0,
    [_mI, _mRI],
    [[0, 1], [0, 1]],
    2
  ];
  var DeleteMemoryRecordOutput$ = [
    3,
    n02,
    _DMRO,
    0,
    [_mRI],
    [0],
    1
  ];
  var DeletePaymentInstrumentRequest$ = [
    3,
    n02,
    _DPIR,
    0,
    [_pMA, _pCI, _pII, _uIs],
    [0, 0, 0, [0, { [_hH]: _XABAPUI }]],
    3
  ];
  var DeletePaymentInstrumentResponse$ = [
    3,
    n02,
    _DPIRe,
    0,
    [_sta],
    [0],
    1
  ];
  var DeletePaymentSessionRequest$ = [
    3,
    n02,
    _DPSR,
    0,
    [_pMA, _pSI, _uIs],
    [0, 0, [0, { [_hH]: _XABAPUI }]],
    2
  ];
  var DeletePaymentSessionResponse$ = [
    3,
    n02,
    _DPSRe,
    0,
    [_sta],
    [0],
    1
  ];
  var DeleteRecommendationRequest$ = [
    3,
    n02,
    _DRR,
    0,
    [_rI],
    [[0, 1]],
    1
  ];
  var DeleteRecommendationResponse$ = [
    3,
    n02,
    _DRRe,
    0,
    [_rI, _sta],
    [0, 0],
    2
  ];
  var Descriptors$ = [
    3,
    n02,
    _De,
    0,
    [_mc, _a2, _cus, _aSg],
    [() => McpDescriptor$, () => A2aDescriptor$, () => CustomDescriptor$, () => AgentSkillsDescriptor$]
  ];
  var EmbeddedCryptoWallet$ = [
    3,
    n02,
    _ECW,
    0,
    [_ne, _lA, _wA, _rU],
    [0, [() => LinkedAccountList, 0], 0, 0],
    2
  ];
  var EvaluateRequest$ = [
    3,
    n02,
    _ER,
    0,
    [_eIv, _eIva, _eTva, _eRI],
    [[0, 1], [() => EvaluationInput$, 0], () => EvaluationTarget$, [() => EvaluationReferenceInputs, 0]],
    2
  ];
  var EvaluateResponse$ = [
    3,
    n02,
    _ERv,
    0,
    [_eR],
    [[() => EvaluationResults, 0]],
    1
  ];
  var EvaluationExpectedTrajectory$ = [
    3,
    n02,
    _EET,
    0,
    [_tNo],
    [64 | 0]
  ];
  var EvaluationJobResults$ = [
    3,
    n02,
    _EJR,
    0,
    [_nOSC, _nOSIP, _nOSF, _tNOS, _nOSI, _eSv],
    [1, 1, 1, 1, 1, () => EvaluatorSummaryList]
  ];
  var EvaluationReferenceInput$ = [
    3,
    n02,
    _ERI,
    0,
    [_con, _eRx, _as, _eTx],
    [() => Context$, () => EvaluationContent$, () => EvaluationContentList, () => EvaluationExpectedTrajectory$],
    1
  ];
  var EvaluationResultContent$ = [
    3,
    n02,
    _ERC,
    0,
    [_eA, _eIv, _eN, _con, _ex, _v, _la, _tU, _eMr, _eCr, _iRIF],
    [0, 0, 0, () => Context$, [() => EvaluationExplanation, 0], 1, 0, () => TokenUsage$, 0, 0, 64 | 0],
    4
  ];
  var Evaluator$ = [
    3,
    n02,
    _Ev,
    0,
    [_eIv],
    [0],
    1
  ];
  var EvaluatorMetric$ = [
    3,
    n02,
    _EM2,
    0,
    [_eA, _cS, _vR],
    [0, () => ControlStats$, () => VariantResultList],
    3
  ];
  var EvaluatorStatistics$ = [
    3,
    n02,
    _ES,
    0,
    [_aSv],
    [1]
  ];
  var EvaluatorSummary$ = [
    3,
    n02,
    _ESv,
    0,
    [_eIv, _stat, _tE, _tF],
    [0, () => EvaluatorStatistics$, 1, 1]
  ];
  var Event$ = [
    3,
    n02,
    _Eve,
    0,
    [_mI, _aI, _sI, _eI, _eTv, _p, _b, _met],
    [0, 0, 0, 0, 4, [() => PayloadTypeList, 0], () => Branch$, () => MetadataMap],
    6
  ];
  var EventMetadataFilterExpression$ = [
    3,
    n02,
    _EMFE,
    0,
    [_le, _o, _ri],
    [() => LeftExpression$, 0, () => RightExpression$],
    2
  ];
  var ExecutionSummaryAffectedSession$ = [
    3,
    n02,
    _ESAS,
    0,
    [_sI, _aTp, _fO],
    [0, 0, 0],
    3
  ];
  var ExecutionSummaryCluster$ = [
    3,
    n02,
    _ESC,
    0,
    [_cI, _n, _d, _aSC, _aSf],
    [1, 0, 0, 1, () => ExecutionSummaryAffectedSessionList],
    5
  ];
  var ExecutionSummaryClusteringResultContent$ = [
    3,
    n02,
    _ESCRC,
    0,
    [_eSx],
    [() => ExecutionSummaryClusterList],
    1
  ];
  var ExternalProxy$ = [
    3,
    n02,
    _EP,
    0,
    [_se2, _po, _dP, _cr],
    [0, 1, 64 | 0, () => ProxyCredentials$],
    2
  ];
  var ExtractionJob$ = [
    3,
    n02,
    _EJ,
    0,
    [_jI],
    [0],
    1
  ];
  var ExtractionJobFilterInput$ = [
    3,
    n02,
    _EJFI,
    0,
    [_sIt, _sI, _aI, _sta],
    [0, 0, 0, 0]
  ];
  var ExtractionJobMetadata$ = [
    3,
    n02,
    _EJM,
    0,
    [_jID, _mes, _sta, _fRa, _sIt, _sI, _aI],
    [0, () => ExtractionJobMessages$, 0, 0, 0, 0, 0],
    2
  ];
  var FailureAnalysisResultContent$ = [
    3,
    n02,
    _FARC,
    0,
    [_fa],
    [() => FailureCategoryClusterList],
    1
  ];
  var FailureCategoryCluster$ = [
    3,
    n02,
    _FCC,
    0,
    [_cI, _n, _d, _aSC, _sCu],
    [1, 0, 0, 1, () => FailureSubCategoryClusterList],
    5
  ];
  var FailureSpanDetail$ = [
    3,
    n02,
    _FSD,
    0,
    [_sIp, _tI, _sig],
    [0, 0, () => InsightsFailureSignalList],
    3
  ];
  var FailureSubCategoryCluster$ = [
    3,
    n02,
    _FSCC,
    0,
    [_cI, _n, _d, _aSC, _rC2],
    [1, 0, 0, 1, () => RootCauseClusterList],
    5
  ];
  var FilterInput$ = [
    3,
    n02,
    _FI,
    0,
    [_b, _eMv],
    [() => BranchFilter$, () => EventMetadataFilterList]
  ];
  var GatewayFilter$ = [
    3,
    n02,
    _GF,
    0,
    [_tP],
    [64 | 0]
  ];
  var GetABTestRequest$ = [
    3,
    n02,
    _GABTR,
    0,
    [_aTI],
    [[0, 1]],
    1
  ];
  var GetABTestResponse$ = [
    3,
    n02,
    _GABTRe,
    0,
    [_aTI, _aTA, _n, _sta, _eS, _gA, _va, _eCv, _cA, _uA, _d, _gF, _rA, _cRI, _eD, _sAt, _sAto, _mDEA, _resu],
    [0, 0, 0, 0, 0, 0, () => VariantList, () => ABTestEvaluationConfig$, 4, 4, 0, () => GatewayFilter$, 0, 0, 64 | 0, 4, 4, 4, () => ABTestResults$],
    10
  ];
  var GetAgentCardRequest$ = [
    3,
    n02,
    _GACR,
    0,
    [_aRA, _rSI, _q],
    [[0, 1], [0, { [_hH]: _XABARSI, [_iT]: 1 }], [0, { [_hQ]: _q }]],
    1
  ];
  var GetAgentCardResponse$ = [
    3,
    n02,
    _GACRe,
    0,
    [_aC, _rSI, _sCt],
    [[15, 16], [0, { [_hH]: _XABARSI }], [1, 32]],
    1
  ];
  var GetBatchEvaluationRequest$ = [
    3,
    n02,
    _GBER,
    0,
    [_bEI],
    [[0, 1]],
    1
  ];
  var GetBatchEvaluationResponse$ = [
    3,
    n02,
    _GBERe,
    0,
    [_bEI, _bEA, _bEN, _sta, _cA, _ev, _i, _dSC, _oC, _eR, _fAR, _uIR, _eSR, _eD, _d, _uA, _kKA],
    [0, 0, 0, 0, 5, () => EvaluatorList, () => InsightList, () => DataSourceConfig$, () => OutputConfig$, () => EvaluationJobResults$, () => FailureAnalysisResultContent$, () => UserIntentClusteringResultContent$, () => ExecutionSummaryClusteringResultContent$, 64 | 0, 0, 5, 0],
    5
  ];
  var GetBrowserSessionRequest$ = [
    3,
    n02,
    _GBSR,
    0,
    [_bI, _sI],
    [[0, 1], [0, { [_hQ]: _sI }]],
    2
  ];
  var GetBrowserSessionResponse$ = [
    3,
    n02,
    _GBSRe,
    0,
    [_bI, _sI, _cA, _n, _vP, _ext, _eP, _pC, _sTS, _sta, _str, _pCr, _ce, _sRA, _lUA],
    [0, 0, 5, 0, () => ViewPort$, () => BrowserExtensions, () => BrowserEnterprisePolicies, () => BrowserProfileConfiguration$, 1, 0, () => BrowserSessionStream$, () => ProxyConfiguration$, () => Certificates, 0, 5],
    3
  ];
  var GetCodeInterpreterSessionRequest$ = [
    3,
    n02,
    _GCISR,
    0,
    [_cII, _sI],
    [[0, 1], [0, { [_hQ]: _sI }]],
    2
  ];
  var GetCodeInterpreterSessionResponse$ = [
    3,
    n02,
    _GCISRe,
    0,
    [_cII, _sI, _cA, _n, _sTS, _sta, _ce],
    [0, 0, 5, 0, 1, 0, () => Certificates],
    3
  ];
  var GetEventInput$ = [
    3,
    n02,
    _GEI,
    0,
    [_mI, _sI, _aI, _eI],
    [[0, 1], [0, 1], [0, 1], [0, 1]],
    4
  ];
  var GetEventOutput$ = [
    3,
    n02,
    _GEO,
    0,
    [_eve],
    [[() => Event$, 0]],
    1
  ];
  var GetMemoryRecordInput$ = [
    3,
    n02,
    _GMRI,
    0,
    [_mI, _mRI],
    [[0, 1], [0, 1]],
    2
  ];
  var GetMemoryRecordOutput$ = [
    3,
    n02,
    _GMRO,
    0,
    [_mR],
    [[() => MemoryRecord$, 0]],
    1
  ];
  var GetPaymentInstrumentBalanceRequest$ = [
    3,
    n02,
    _GPIBR,
    0,
    [_pMA, _pCI, _pII, _ch, _to, _uIs, _aN],
    [0, 0, 0, 0, 0, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }]],
    5
  ];
  var GetPaymentInstrumentBalanceResponse$ = [
    3,
    n02,
    _GPIBRe,
    0,
    [_pII, _tB],
    [0, () => TokenBalance$],
    2
  ];
  var GetPaymentInstrumentRequest$ = [
    3,
    n02,
    _GPIR,
    0,
    [_pMA, _pII, _uIs, _aN, _pCI],
    [0, 0, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], 0],
    2
  ];
  var GetPaymentInstrumentResponse$ = [
    3,
    n02,
    _GPIRe,
    0,
    [_pIa],
    [[() => PaymentInstrument$, 0]],
    1
  ];
  var GetPaymentSessionRequest$ = [
    3,
    n02,
    _GPSR,
    0,
    [_pMA, _pSI, _uIs, _aN],
    [0, 0, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }]],
    2
  ];
  var GetPaymentSessionResponse$ = [
    3,
    n02,
    _GPSRe,
    0,
    [_pS],
    [() => PaymentSession$],
    1
  ];
  var GetRecommendationRequest$ = [
    3,
    n02,
    _GRR,
    0,
    [_rI],
    [[0, 1]],
    1
  ];
  var GetRecommendationResponse$ = [
    3,
    n02,
    _GRRe,
    0,
    [_rI, _rAe, _n, _t, _rCe, _sta, _cA, _uA, _d, _rR, _kKA],
    [0, 0, 0, 0, [() => RecommendationConfig$, 0], 0, 5, 5, 0, [() => RecommendationResult$, 0], 0],
    8
  ];
  var GetResourceApiKeyRequest$ = [
    3,
    n02,
    _GRAKR,
    0,
    [_wIT, _rCPN],
    [[() => WorkloadIdentityTokenType, 0], 0],
    2
  ];
  var GetResourceApiKeyResponse$ = [
    3,
    n02,
    _GRAKRe,
    0,
    [_aK],
    [[() => ApiKeyType, 0]],
    1
  ];
  var GetResourceOauth2TokenRequest$ = [
    3,
    n02,
    _GROTR,
    0,
    [_wIT, _rCPN, _sc, _oF, _sU, _rORU, _fA, _cP, _cSu, _reso, _au],
    [[() => WorkloadIdentityTokenType, 0], 0, 64 | 0, 0, 0, 0, 2, [() => CustomRequestParametersType, 0], [() => State, 0], 64 | 0, 64 | 0],
    4
  ];
  var GetResourceOauth2TokenResponse$ = [
    3,
    n02,
    _GROTRe,
    0,
    [_aU, _aTc, _sU, _sSe],
    [[() => AuthorizationUrlType, 0], [() => AccessTokenType, 0], 0, 0]
  ];
  var GetResourcePaymentTokenRequest$ = [
    3,
    n02,
    _GRPTR,
    0,
    [_wIT, _rCPN, _pTR],
    [[() => WorkloadIdentityTokenType, 0], 0, [() => PaymentTokenRequestInput$, 0]],
    3
  ];
  var GetResourcePaymentTokenResponse$ = [
    3,
    n02,
    _GRPTRe,
    0,
    [_pTRa],
    [[() => PaymentTokenResponseOutput$, 0]],
    1
  ];
  var GetWorkloadAccessTokenForJWTRequest$ = [
    3,
    n02,
    _GWATFJWTR,
    0,
    [_wN, _uT],
    [0, [() => UserTokenType, 0]],
    2
  ];
  var GetWorkloadAccessTokenForJWTResponse$ = [
    3,
    n02,
    _GWATFJWTRe,
    0,
    [_wATo],
    [[() => WorkloadIdentityTokenType, 0]],
    1
  ];
  var GetWorkloadAccessTokenForUserIdRequest$ = [
    3,
    n02,
    _GWATFUIR,
    0,
    [_wN, _uIs],
    [0, 0],
    2
  ];
  var GetWorkloadAccessTokenForUserIdResponse$ = [
    3,
    n02,
    _GWATFUIRe,
    0,
    [_wATo],
    [[() => WorkloadIdentityTokenType, 0]],
    1
  ];
  var GetWorkloadAccessTokenRequest$ = [
    3,
    n02,
    _GWATR,
    0,
    [_wN],
    [0],
    1
  ];
  var GetWorkloadAccessTokenResponse$ = [
    3,
    n02,
    _GWATRe,
    0,
    [_wATo],
    [[() => WorkloadIdentityTokenType, 0]],
    1
  ];
  var GroundTruthTurn$ = [
    3,
    n02,
    _GTT,
    0,
    [_in, _eRx],
    [() => GroundTruthTurnInput$, () => EvaluationContent$]
  ];
  var HarnessAgentCoreBrowserConfig$ = [
    3,
    n02,
    _HACBC,
    0,
    [_bAr],
    [0]
  ];
  var HarnessAgentCoreCodeInterpreterConfig$ = [
    3,
    n02,
    _HACCIC,
    0,
    [_cIA],
    [0]
  ];
  var HarnessAgentCoreGatewayConfig$ = [
    3,
    n02,
    _HACGC,
    0,
    [_gA, _oA],
    [0, [() => HarnessGatewayOutboundAuth$, 0]],
    1
  ];
  var HarnessBedrockModelConfig$ = [
    3,
    n02,
    _HBMC,
    0,
    [_mIo, _mTa, _tem, _tPo, _aF, _aP],
    [0, 1, 1, 1, 0, 15],
    1
  ];
  var HarnessContentBlockDeltaEvent$ = [
    3,
    n02,
    _HCBDE,
    0,
    [_cBI, _de],
    [1, [() => HarnessContentBlockDelta$, 0]],
    2
  ];
  var HarnessContentBlockStartEvent$ = [
    3,
    n02,
    _HCBSE,
    0,
    [_cBI, _star],
    [1, () => HarnessContentBlockStart$],
    2
  ];
  var HarnessContentBlockStopEvent$ = [
    3,
    n02,
    _HCBSEa,
    0,
    [_cBI],
    [1],
    1
  ];
  var HarnessGeminiModelConfig$ = [
    3,
    n02,
    _HGMC,
    0,
    [_mIo, _aKA, _mTa, _tem, _tPo, _tK],
    [0, 0, 1, 1, 1, 1],
    2
  ];
  var HarnessInlineFunctionConfig$ = [
    3,
    n02,
    _HIFC,
    0,
    [_d, _iS],
    [[() => HarnessInlineFunctionDescription, 0], [() => SensitiveJson, 0]],
    2
  ];
  var HarnessLiteLlmModelConfig$ = [
    3,
    n02,
    _HLLMC,
    0,
    [_mIo, _aKA, _aB, _mTa, _tem, _tPo, _aP],
    [0, 0, [() => HarnessLiteLlmApiBase, 0], 1, 1, 1, 15],
    1
  ];
  var HarnessMessage$ = [
    3,
    n02,
    _HM,
    0,
    [_ro, _co],
    [0, [() => HarnessContentBlocks, 0]],
    2
  ];
  var HarnessMessageStartEvent$ = [
    3,
    n02,
    _HMSE,
    0,
    [_ro],
    [0],
    1
  ];
  var HarnessMessageStopEvent$ = [
    3,
    n02,
    _HMSEa,
    0,
    [_sRt],
    [0],
    1
  ];
  var HarnessMetadataEvent$ = [
    3,
    n02,
    _HME,
    0,
    [_us, _metr],
    [() => HarnessTokenUsage$, () => HarnessStreamMetrics$],
    2
  ];
  var HarnessOpenAiModelConfig$ = [
    3,
    n02,
    _HOAMC,
    0,
    [_mIo, _aKA, _mTa, _tem, _tPo, _aF, _aP],
    [0, 0, 1, 1, 1, 0, 15],
    2
  ];
  var HarnessReasoningTextBlock$ = [
    3,
    n02,
    _HRTB,
    8,
    [_te, _sign],
    [0, 0],
    1
  ];
  var HarnessRemoteMcpConfig$ = [
    3,
    n02,
    _HRMC,
    0,
    [_url, _h],
    [[() => HarnessRemoteMcpUrl, 0], [() => HttpHeadersMap, 0]],
    1
  ];
  var HarnessSkillAwsSkillsSource$ = [
    3,
    n02,
    _HSASS,
    0,
    [_pa],
    [64 | 0]
  ];
  var HarnessSkillGitAuth$ = [
    3,
    n02,
    _HSGA,
    0,
    [_cAr, _use],
    [0, 0],
    1
  ];
  var HarnessSkillGitSource$ = [
    3,
    n02,
    _HSGS,
    0,
    [_url, _pat, _aut],
    [0, 0, () => HarnessSkillGitAuth$],
    1
  ];
  var HarnessSkillS3Source$ = [
    3,
    n02,
    _HSSS,
    0,
    [_ur],
    [0],
    1
  ];
  var HarnessStreamMetrics$ = [
    3,
    n02,
    _HSM,
    0,
    [_lM],
    [1],
    1
  ];
  var HarnessTokenUsage$ = [
    3,
    n02,
    _HTU,
    0,
    [_iTn, _oT, _tT, _cRIT, _cWIT],
    [1, 1, 1, 1, 1],
    3
  ];
  var HarnessTool$ = [
    3,
    n02,
    _HT,
    0,
    [_t, _n, _conf],
    [0, 0, [() => HarnessToolConfiguration$, 0]],
    1
  ];
  var HarnessToolResultBlock$ = [
    3,
    n02,
    _HTRB,
    0,
    [_tUI, _co, _sta, _t],
    [0, [() => HarnessToolResultContentBlocks, 0], 0, 0],
    2
  ];
  var HarnessToolResultBlockStart$ = [
    3,
    n02,
    _HTRBS,
    0,
    [_tUI, _sta],
    [0, 0],
    1
  ];
  var HarnessToolUseBlock$ = [
    3,
    n02,
    _HTUB,
    0,
    [_n, _tUI, _in, _t, _sNe],
    [0, 0, [() => SensitiveJson, 0], 0, 0],
    3
  ];
  var HarnessToolUseBlockDelta$ = [
    3,
    n02,
    _HTUBD,
    0,
    [_in],
    [[() => SensitiveText, 0]],
    1
  ];
  var HarnessToolUseBlockStart$ = [
    3,
    n02,
    _HTUBS,
    0,
    [_tUI, _n, _t, _sNe],
    [0, 0, 0, 0],
    2
  ];
  var InlineGroundTruth$ = [
    3,
    n02,
    _IGT,
    0,
    [_as, _eTx, _tu],
    [() => EvaluationContentList, () => EvaluationExpectedTrajectory$, () => GroundTruthTurnList]
  ];
  var InputContentBlock$ = [
    3,
    n02,
    _ICB,
    0,
    [_pat, _te, _bl],
    [0, 0, [() => Body, 0]],
    1
  ];
  var Insight$ = [
    3,
    n02,
    _I,
    0,
    [_iI],
    [0],
    1
  ];
  var InsightsFailureSignal$ = [
    3,
    n02,
    _IFS,
    0,
    [_ca, _evi, _confi],
    [0, 0, 1],
    3
  ];
  var InvokeAgentRuntimeCommandRequest$ = [
    3,
    n02,
    _IARCR,
    0,
    [_aRA, _bo, _cTo, _ac, _rSI, _tI, _tPr, _tS, _ba, _q, _aIc],
    [[0, 1], [() => InvokeAgentRuntimeCommandRequestBody$, 16], [0, { [_hH]: _CT }], [0, { [_hH]: _Ac }], [0, { [_hH]: _XABARSI, [_iT]: 1 }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, { [_hH]: _tra }], [0, { [_hH]: _ba }], [0, { [_hQ]: _q }], [0, { [_hQ]: _aIc }]],
    2
  ];
  var InvokeAgentRuntimeCommandRequestBody$ = [
    3,
    n02,
    _IARCRB,
    0,
    [_com, _ti],
    [0, 1],
    1
  ];
  var InvokeAgentRuntimeCommandResponse$ = [
    3,
    n02,
    _IARCRn,
    0,
    [_cTo, _stre, _rSI, _tI, _tPr, _tS, _ba, _sCt],
    [[0, { [_hH]: _CT }], [() => InvokeAgentRuntimeCommandStreamOutput$, 16], [0, { [_hH]: _XABARSI }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, { [_hH]: _tra }], [0, { [_hH]: _ba }], [1, 32]],
    2
  ];
  var InvokeAgentRuntimeRequest$ = [
    3,
    n02,
    _IARR,
    0,
    [_aRA, _p, _cTo, _ac, _mSI, _rSI, _mPV, _rUI, _tI, _tPr, _tS, _ba, _q, _aIc],
    [[0, 1], [() => Body, 16], [0, { [_hH]: _CT }], [0, { [_hH]: _Ac }], [0, { [_hH]: _MSI }], [0, { [_hH]: _XABARSI, [_iT]: 1 }], [0, { [_hH]: _MPV }], [0, { [_hH]: _XABARUI }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, { [_hH]: _tra }], [0, { [_hH]: _ba }], [0, { [_hQ]: _q }], [0, { [_hQ]: _aIc }]],
    2
  ];
  var InvokeAgentRuntimeResponse$ = [
    3,
    n02,
    _IARRn,
    0,
    [_cTo, _rSI, _mSI, _mPV, _tI, _tPr, _tS, _ba, _resp, _sCt],
    [[0, { [_hH]: _CT }], [0, { [_hH]: _XABARSI }], [0, { [_hH]: _MSI }], [0, { [_hH]: _MPV }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, { [_hH]: _tra }], [0, { [_hH]: _ba }], [() => ResponseStream, 16], [1, 32]],
    1
  ];
  var InvokeBrowserRequest$ = [
    3,
    n02,
    _IBR,
    0,
    [_bI, _sI, _act],
    [[0, 1], [0, { [_hH]: _xabsi }], () => BrowserAction$],
    3
  ];
  var InvokeBrowserResponse$ = [
    3,
    n02,
    _IBRn,
    0,
    [_resul, _sI],
    [() => BrowserActionResult$, [0, { [_hH]: _xabsi }]],
    2
  ];
  var InvokeCodeInterpreterRequest$ = [
    3,
    n02,
    _ICIR,
    0,
    [_cII, _n, _sI, _tI, _tPr, _ar],
    [[0, 1], 0, [0, { [_hH]: _xacisi }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [() => ToolArguments$, 0]],
    2
  ];
  var InvokeCodeInterpreterResponse$ = [
    3,
    n02,
    _ICIRn,
    0,
    [_stre, _sI],
    [[() => CodeInterpreterStreamOutput$, 16], [0, { [_hH]: _xacisi }]],
    1
  ];
  var InvokeHarnessRequest$ = [
    3,
    n02,
    _IHR,
    0,
    [_hA, _rSI, _mes, _q, _rUI, _mo, _sP, _too, _sk, _aTl, _mIa, _mTa, _tSi, _aI],
    [[0, { [_hQ]: _hA }], [0, { [_hH]: _XABARSI }], [() => HarnessMessages, 0], [0, { [_hQ]: _q }], [0, { [_hH]: _XABARUI }], [() => HarnessModelConfiguration$, 0], [() => HarnessSystemPrompt, 0], [() => HarnessTools, 0], () => HarnessSkills, 64 | 0, 1, 1, 1, 0],
    3
  ];
  var InvokeHarnessResponse$ = [
    3,
    n02,
    _IHRn,
    0,
    [_stre],
    [[() => InvokeHarnessStreamOutput$, 16]],
    1
  ];
  var KeyPressArguments$ = [
    3,
    n02,
    _KPA,
    0,
    [_k, _pr],
    [0, 1],
    1
  ];
  var KeyPressResult$ = [
    3,
    n02,
    _KPR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var KeyShortcutArguments$ = [
    3,
    n02,
    _KSA,
    0,
    [_ke],
    [64 | 0],
    1
  ];
  var KeyShortcutResult$ = [
    3,
    n02,
    _KSR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var KeyTypeArguments$ = [
    3,
    n02,
    _KTA,
    0,
    [_te],
    [0],
    1
  ];
  var KeyTypeResult$ = [
    3,
    n02,
    _KTR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var LinkedAccountDeveloperJwt$ = [
    3,
    n02,
    _LADJ,
    0,
    [_ki, _su],
    [0, 0],
    2
  ];
  var LinkedAccountEmail$ = [
    3,
    n02,
    _LAE,
    8,
    [_eAm],
    [[() => Email, 0]],
    1
  ];
  var LinkedAccountSms$ = [
    3,
    n02,
    _LAS,
    8,
    [_pN],
    [[() => PhoneNumber, 0]],
    1
  ];
  var ListABTestsRequest$ = [
    3,
    n02,
    _LABTR,
    0,
    [_mRa, _nT],
    [[1, { [_hQ]: _mRa }], [0, { [_hQ]: _nT }]]
  ];
  var ListABTestsResponse$ = [
    3,
    n02,
    _LABTRi,
    0,
    [_aTb, _nT],
    [() => ABTestSummaryList, 0],
    1
  ];
  var ListActorsInput$ = [
    3,
    n02,
    _LAI,
    0,
    [_mI, _mRa, _nT],
    [[0, 1], 1, 0],
    1
  ];
  var ListActorsOutput$ = [
    3,
    n02,
    _LAO,
    0,
    [_aSc, _nT],
    [() => ActorSummaryList, 0],
    1
  ];
  var ListBatchEvaluationsRequest$ = [
    3,
    n02,
    _LBER,
    0,
    [_mRa, _nT],
    [[1, { [_hQ]: _mRa }], [0, { [_hQ]: _nT }]]
  ];
  var ListBatchEvaluationsResponse$ = [
    3,
    n02,
    _LBERi,
    0,
    [_bE, _nT],
    [() => BatchEvaluationSummaryList, 0],
    1
  ];
  var ListBrowserSessionsRequest$ = [
    3,
    n02,
    _LBSR,
    0,
    [_bI, _mRa, _nT, _sta],
    [[0, 1], 1, 0, 0],
    1
  ];
  var ListBrowserSessionsResponse$ = [
    3,
    n02,
    _LBSRi,
    0,
    [_it, _nT],
    [() => BrowserSessionSummaries, 0],
    1
  ];
  var ListCodeInterpreterSessionsRequest$ = [
    3,
    n02,
    _LCISR,
    0,
    [_cII, _mRa, _nT, _sta],
    [[0, 1], 1, 0, 0],
    1
  ];
  var ListCodeInterpreterSessionsResponse$ = [
    3,
    n02,
    _LCISRi,
    0,
    [_it, _nT],
    [() => CodeInterpreterSessionSummaries, 0],
    1
  ];
  var ListEventsInput$ = [
    3,
    n02,
    _LEI,
    0,
    [_mI, _sI, _aI, _iP, _fi, _mRa, _nT],
    [[0, 1], [0, 1], [0, 1], 2, () => FilterInput$, 1, 0],
    3
  ];
  var ListEventsOutput$ = [
    3,
    n02,
    _LEO,
    0,
    [_even, _nT],
    [[() => EventList, 0], 0],
    1
  ];
  var ListMemoryExtractionJobsInput$ = [
    3,
    n02,
    _LMEJI,
    0,
    [_mI, _mRa, _fi, _nT],
    [[0, 1], 1, () => ExtractionJobFilterInput$, 0],
    1
  ];
  var ListMemoryExtractionJobsOutput$ = [
    3,
    n02,
    _LMEJO,
    0,
    [_j, _nT],
    [() => ExtractionJobMetadataList, 0],
    1
  ];
  var ListMemoryRecordsInput$ = [
    3,
    n02,
    _LMRI,
    0,
    [_mI, _na, _nP, _mSIe, _mRa, _nT, _mF],
    [[0, 1], 0, 0, 0, 1, 0, () => MemoryMetadataFilterList],
    1
  ];
  var ListMemoryRecordsOutput$ = [
    3,
    n02,
    _LMRO,
    0,
    [_mRS, _nT],
    [[() => MemoryRecordSummaryList, 0], 0],
    1
  ];
  var ListPaymentInstrumentsRequest$ = [
    3,
    n02,
    _LPIR,
    0,
    [_pMA, _uIs, _aN, _pCI, _nT, _mRa],
    [0, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], 0, 0, 1],
    1
  ];
  var ListPaymentInstrumentsResponse$ = [
    3,
    n02,
    _LPIRi,
    0,
    [_pIay, _nT],
    [() => PaymentInstrumentSummaryList, 0],
    1
  ];
  var ListPaymentSessionsRequest$ = [
    3,
    n02,
    _LPSR,
    0,
    [_pMA, _uIs, _aN, _nT, _mRa],
    [0, [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], 0, 1],
    1
  ];
  var ListPaymentSessionsResponse$ = [
    3,
    n02,
    _LPSRi,
    0,
    [_pSa, _nT],
    [() => PaymentSessionSummaryList, 0],
    1
  ];
  var ListRecommendationsRequest$ = [
    3,
    n02,
    _LRR,
    0,
    [_mRa, _nT, _sF],
    [[1, { [_hQ]: _mRa }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sta }]]
  ];
  var ListRecommendationsResponse$ = [
    3,
    n02,
    _LRRi,
    0,
    [_rS, _nT],
    [() => RecommendationSummaryList, 0],
    1
  ];
  var ListSessionsInput$ = [
    3,
    n02,
    _LSI,
    0,
    [_mI, _aI, _mRa, _nT, _fi],
    [[0, 1], [0, 1], 1, 0, () => SessionFilter$],
    2
  ];
  var ListSessionsOutput$ = [
    3,
    n02,
    _LSO,
    0,
    [_sSes, _nT],
    [() => SessionSummaryList, 0],
    1
  ];
  var LiveViewStream$ = [
    3,
    n02,
    _LVS,
    0,
    [_sE],
    [0]
  ];
  var McpDescriptor$ = [
    3,
    n02,
    _MDc,
    0,
    [_se2, _too],
    [() => ServerDefinition$, () => ToolsDefinition$],
    2
  ];
  var MemoryMetadataFilterExpression$ = [
    3,
    n02,
    _MMFE,
    0,
    [_le, _o, _ri],
    [() => MemoryRecordLeftExpression$, 0, () => MemoryRecordRightExpression$],
    2
  ];
  var MemoryRecord$ = [
    3,
    n02,
    _MR,
    0,
    [_mRI, _co, _mSIe, _nam, _cA, _met],
    [0, [() => MemoryContent$, 0], 0, 64 | 0, 4, () => MemoryRecordMetadataMap],
    5
  ];
  var MemoryRecordCreateInput$ = [
    3,
    n02,
    _MRCI,
    0,
    [_rIe, _nam, _co, _tim, _mSIe, _met],
    [0, 64 | 0, [() => MemoryContent$, 0], 4, 0, () => MemoryRecordMetadataMap],
    4
  ];
  var MemoryRecordDeleteInput$ = [
    3,
    n02,
    _MRDI,
    0,
    [_mRI],
    [0],
    1
  ];
  var MemoryRecordOutput$ = [
    3,
    n02,
    _MRO,
    0,
    [_mRI, _sta, _rIe, _eCr, _eMr],
    [0, 0, 0, 1, 0],
    2
  ];
  var MemoryRecordSummary$ = [
    3,
    n02,
    _MRS,
    0,
    [_mRI, _co, _mSIe, _nam, _cA, _sco, _met],
    [0, [() => MemoryContent$, 0], 0, 64 | 0, 4, 1, () => MemoryRecordMetadataMap],
    5
  ];
  var MemoryRecordUpdateInput$ = [
    3,
    n02,
    _MRUI,
    0,
    [_mRI, _tim, _co, _nam, _mSIe, _met],
    [0, 4, [() => MemoryContent$, 0], 64 | 0, 0, () => MemoryRecordMetadataMap],
    2
  ];
  var MessageMetadata$ = [
    3,
    n02,
    _MM,
    0,
    [_eI, _mIe],
    [0, 1],
    2
  ];
  var MouseClickArguments$ = [
    3,
    n02,
    _MCA,
    0,
    [_x, _y, _bu, _cC],
    [1, 1, 0, 1],
    2
  ];
  var MouseClickResult$ = [
    3,
    n02,
    _MCR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var MouseDragArguments$ = [
    3,
    n02,
    _MDA,
    0,
    [_eX, _eY, _sX, _sY, _bu],
    [1, 1, 1, 1, 0],
    4
  ];
  var MouseDragResult$ = [
    3,
    n02,
    _MDR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var MouseMoveArguments$ = [
    3,
    n02,
    _MMA,
    0,
    [_x, _y],
    [1, 1],
    2
  ];
  var MouseMoveResult$ = [
    3,
    n02,
    _MMR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var MouseScrollArguments$ = [
    3,
    n02,
    _MSA,
    0,
    [_x, _y, _dX, _dY],
    [1, 1, 1, 1],
    2
  ];
  var MouseScrollResult$ = [
    3,
    n02,
    _MSR,
    0,
    [_sta, _e2],
    [0, 0],
    1
  ];
  var OAuth2Authentication$ = [
    3,
    n02,
    _OAA,
    8,
    [_su, _eAm, _n, _use],
    [0, [() => Email, 0], 0, 0],
    1
  ];
  var OAuthCredentialProvider$ = [
    3,
    n02,
    _OACP,
    0,
    [_pA, _sc, _cP, _gT, _dRU],
    [0, 64 | 0, [() => OAuthCustomParameters, 0], 0, 0],
    2
  ];
  var OnlineEvaluationConfigSource$ = [
    3,
    n02,
    _OECS,
    0,
    [_oECA, _tR],
    [0, () => SessionFilterConfig$],
    1
  ];
  var PaymentInstrument$ = [
    3,
    n02,
    _PI,
    0,
    [_pII, _pMA, _pCI, _uIs, _pIT, _pID, _cA, _sta, _uA],
    [0, 0, 0, 0, 0, [() => PaymentInstrumentDetails$, 0], 5, 0, 5],
    9
  ];
  var PaymentInstrumentSummary$ = [
    3,
    n02,
    _PIS,
    0,
    [_pII, _pMA, _pCI, _uIs, _pIT, _sta, _cA, _uA],
    [0, 0, 0, 0, 0, 0, 5, 5],
    8
  ];
  var PaymentSession$ = [
    3,
    n02,
    _PS,
    0,
    [_pSI, _pMA, _uIs, _eTIM, _cA, _uA, _li, _aL],
    [0, 0, 0, 1, 5, 5, () => SessionLimits$, () => AvailableLimits$],
    6
  ];
  var PaymentSessionSummary$ = [
    3,
    n02,
    _PSS,
    0,
    [_pSI, _pMA, _uIs, _eTIM, _cA, _uA],
    [0, 0, 0, 1, 5, 5],
    6
  ];
  var PerVariantOnlineEvaluationConfig$ = [
    3,
    n02,
    _PVOEC,
    0,
    [_n, _oECA],
    [0, 0],
    2
  ];
  var ProcessPaymentRequest$ = [
    3,
    n02,
    _PPR,
    0,
    [_pMA, _pSI, _pII, _pT, _pIaym, _uIs, _aN, _cT],
    [0, 0, 0, 0, [() => PaymentInput$, 0], [0, { [_hH]: _XABAPUI }], [0, { [_hH]: _XABAPAN }], [0, 4]],
    5
  ];
  var ProcessPaymentResponse$ = [
    3,
    n02,
    _PPRr,
    0,
    [_pPI, _pMA, _pSI, _pII, _pT, _sta, _pO, _cA, _uA],
    [0, 0, 0, 0, 0, 0, [() => PaymentOutput$, 0], 5, 5],
    9
  ];
  var ProxyBypass$ = [
    3,
    n02,
    _PB,
    0,
    [_dP],
    [64 | 0]
  ];
  var ProxyConfiguration$ = [
    3,
    n02,
    _PC2,
    0,
    [_pro, _by],
    [() => Proxies, () => ProxyBypass$],
    1
  ];
  var RecommendationEvaluationConfig$ = [
    3,
    n02,
    _REC,
    0,
    [_ev],
    [() => RecommendationEvaluatorList],
    1
  ];
  var RecommendationEvaluatorReference$ = [
    3,
    n02,
    _RER,
    0,
    [_eA],
    [0],
    1
  ];
  var RecommendationResultConfigurationBundle$ = [
    3,
    n02,
    _RRCB,
    0,
    [_bA, _vI],
    [0, 0],
    2
  ];
  var RecommendationSummary$ = [
    3,
    n02,
    _RSe,
    0,
    [_rI, _rAe, _n, _t, _sta, _cA, _uA, _d],
    [0, 0, 0, 0, 0, 5, 5, 0],
    7
  ];
  var RegistryRecordSummary$ = [
    3,
    n02,
    _RRS,
    0,
    [_rAeg, _rAec, _rIec, _n, _dT, _des, _ve, _sta, _cA, _uA, _d],
    [0, 0, 0, 0, 0, () => Descriptors$, 0, 0, 5, 5, [() => Description, 0]],
    10
  ];
  var ResourceContent$ = [
    3,
    n02,
    _RC,
    0,
    [_t, _ur, _mT, _te, _bl],
    [0, 0, 0, 0, 21],
    1
  ];
  var ResponseChunk$ = [
    3,
    n02,
    _RCe,
    0,
    [_cSo, _cD, _cSon],
    [() => ContentStartEvent$, () => ContentDeltaEvent$, () => ContentStopEvent$]
  ];
  var RetrieveMemoryRecordsInput$ = [
    3,
    n02,
    _RMRI,
    0,
    [_mI, _sCe, _na, _nP, _nT, _mRa],
    [[0, 1], [() => SearchCriteria$, 0], 0, 0, 0, 1],
    2
  ];
  var RetrieveMemoryRecordsOutput$ = [
    3,
    n02,
    _RMRO,
    0,
    [_mRS, _nT],
    [[() => MemoryRecordSummaryList, 0], 0],
    1
  ];
  var RootCauseCluster$ = [
    3,
    n02,
    _RCC,
    0,
    [_cI, _n, _rCo, _re, _aSC, _aSf],
    [1, 0, 0, 0, 1, () => AffectedSessionList],
    6
  ];
  var S3Location$ = [
    3,
    n02,
    _SL,
    0,
    [_buc, _pre, _vI],
    [0, 0, 0],
    2
  ];
  var SaveBrowserSessionProfileRequest$ = [
    3,
    n02,
    _SBSPR,
    0,
    [_pI, _bI, _sI, _tI, _tPr, _cT],
    [[0, 1], 0, 0, [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, 4]],
    3
  ];
  var SaveBrowserSessionProfileResponse$ = [
    3,
    n02,
    _SBSPRa,
    0,
    [_pI, _bI, _sI, _lUA],
    [0, 0, 0, 5],
    4
  ];
  var ScreenshotArguments$ = [
    3,
    n02,
    _SA2,
    0,
    [_fo],
    [0]
  ];
  var ScreenshotResult$ = [
    3,
    n02,
    _SR,
    0,
    [_sta, _e2, _da],
    [0, 0, 21],
    1
  ];
  var SearchCriteria$ = [
    3,
    n02,
    _SC,
    0,
    [_sQ, _mSIe, _tK, _mF],
    [[() => SensitiveString, 0], 0, 1, () => MemoryMetadataFilterList],
    1
  ];
  var SearchRegistryRecordsRequest$ = [
    3,
    n02,
    _SRRR,
    0,
    [_sQ, _rIeg, _mRa, _f],
    [0, 64 | 0, 1, 15],
    2
  ];
  var SearchRegistryRecordsResponse$ = [
    3,
    n02,
    _SRRRe,
    0,
    [_rRe],
    [[() => RegistryRecordSummaryList, 0]],
    1
  ];
  var SecretsManagerLocation$ = [
    3,
    n02,
    _SML,
    0,
    [_sA],
    [0],
    1
  ];
  var ServerDefinition$ = [
    3,
    n02,
    _SD,
    0,
    [_sV, _iC],
    [0, 0]
  ];
  var SessionFilter$ = [
    3,
    n02,
    _SF,
    0,
    [_eF],
    [0]
  ];
  var SessionFilterConfig$ = [
    3,
    n02,
    _SFC,
    0,
    [_sT, _eT],
    [5, 5]
  ];
  var SessionLimits$ = [
    3,
    n02,
    _SLe,
    0,
    [_mSA],
    [() => Amount$],
    1
  ];
  var SessionMetadataShape$ = [
    3,
    n02,
    _SMS,
    0,
    [_sI, _tSI, _gTr, _met],
    [0, 0, () => GroundTruthSource$, 128 | 0],
    1
  ];
  var SessionSummary$ = [
    3,
    n02,
    _SSe,
    0,
    [_sI, _aI, _cA],
    [0, 0, 4],
    3
  ];
  var SkillDefinition$ = [
    3,
    n02,
    _SDk,
    0,
    [_sV, _iC],
    [0, 0]
  ];
  var SkillMdDefinition$ = [
    3,
    n02,
    _SMD,
    0,
    [_iC],
    [0]
  ];
  var SpanContext$ = [
    3,
    n02,
    _SCp,
    0,
    [_sI, _tI, _sIp],
    [0, 0, 0],
    1
  ];
  var StartBatchEvaluationRequest$ = [
    3,
    n02,
    _SBER,
    0,
    [_bEN, _dSC, _ev, _i, _cT, _eMva, _ta, _kKA, _d],
    [0, () => DataSourceConfig$, () => EvaluatorList, () => InsightList, [0, 4], () => EvaluationMetadata$, 128 | 0, 0, 0],
    2
  ];
  var StartBatchEvaluationResponse$ = [
    3,
    n02,
    _SBERt,
    0,
    [_bEI, _bEA, _bEN, _sta, _cA, _ev, _i, _oC, _ta, _kKA, _d],
    [0, 0, 0, 0, 5, () => EvaluatorList, () => InsightList, () => OutputConfig$, 128 | 0, 0, 0],
    5
  ];
  var StartBrowserSessionRequest$ = [
    3,
    n02,
    _SBSR,
    0,
    [_bI, _tI, _tPr, _n, _sTS, _vP, _ext, _pC, _pCr, _eP, _ce, _cT],
    [[0, 1], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], 0, 1, () => ViewPort$, () => BrowserExtensions, () => BrowserProfileConfiguration$, () => ProxyConfiguration$, () => BrowserEnterprisePolicies, () => Certificates, [0, 4]],
    1
  ];
  var StartBrowserSessionResponse$ = [
    3,
    n02,
    _SBSRt,
    0,
    [_bI, _sI, _cA, _str],
    [0, 0, 5, () => BrowserSessionStream$],
    3
  ];
  var StartCodeInterpreterSessionRequest$ = [
    3,
    n02,
    _SCISR,
    0,
    [_cII, _tI, _tPr, _n, _sTS, _ce, _cT],
    [[0, 1], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], 0, 1, () => Certificates, [0, 4]],
    1
  ];
  var StartCodeInterpreterSessionResponse$ = [
    3,
    n02,
    _SCISRt,
    0,
    [_cII, _sI, _cA],
    [0, 0, 5],
    3
  ];
  var StartMemoryExtractionJobInput$ = [
    3,
    n02,
    _SMEJI,
    0,
    [_mI, _eJ, _cT],
    [[0, 1], () => ExtractionJob$, [0, 4]],
    2
  ];
  var StartMemoryExtractionJobOutput$ = [
    3,
    n02,
    _SMEJO,
    0,
    [_jI],
    [0],
    1
  ];
  var StartRecommendationRequest$ = [
    3,
    n02,
    _SRR,
    0,
    [_n, _t, _rCe, _d, _kKA, _cT, _ta],
    [0, 0, [() => RecommendationConfig$, 0], 0, 0, [0, 4], 128 | 0],
    3
  ];
  var StartRecommendationResponse$ = [
    3,
    n02,
    _SRRt,
    0,
    [_rI, _rAe, _n, _t, _rCe, _sta, _cA, _uA, _d],
    [0, 0, 0, 0, [() => RecommendationConfig$, 0], 0, 5, 5, 0],
    8
  ];
  var StopBatchEvaluationRequest$ = [
    3,
    n02,
    _SBERto,
    0,
    [_bEI],
    [[0, 1]],
    1
  ];
  var StopBatchEvaluationResponse$ = [
    3,
    n02,
    _SBERtop,
    0,
    [_bEI, _bEA, _sta, _d],
    [0, 0, 0, 0],
    3
  ];
  var StopBrowserSessionRequest$ = [
    3,
    n02,
    _SBSRto,
    0,
    [_bI, _sI, _tI, _tPr, _cT],
    [[0, 1], [0, { [_hQ]: _sI }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, 4]],
    2
  ];
  var StopBrowserSessionResponse$ = [
    3,
    n02,
    _SBSRtop,
    0,
    [_bI, _sI, _lUA],
    [0, 0, 5],
    3
  ];
  var StopCodeInterpreterSessionRequest$ = [
    3,
    n02,
    _SCISRto,
    0,
    [_cII, _sI, _tI, _tPr, _cT],
    [[0, 1], [0, { [_hQ]: _sI }], [0, { [_hH]: _XATI }], [0, { [_hH]: _tr }], [0, 4]],
    2
  ];
  var StopCodeInterpreterSessionResponse$ = [
    3,
    n02,
    _SCISRtop,
    0,
    [_cII, _sI, _lUA],
    [0, 0, 5],
    3
  ];
  var StopRuntimeSessionRequest$ = [
    3,
    n02,
    _SRSR,
    0,
    [_rSI, _aRA, _q, _cT],
    [[0, { [_hH]: _XABARSI }], [0, 1], [0, { [_hQ]: _q }], [0, 4]],
    2
  ];
  var StopRuntimeSessionResponse$ = [
    3,
    n02,
    _SRSRt,
    0,
    [_rSI, _sCt],
    [[0, { [_hH]: _XABARSI }], [1, 32]]
  ];
  var StripePrivyTokenRequestInput$ = [
    3,
    n02,
    _SPTRI,
    0,
    [_rP, _rB, _rH, _iAS],
    [0, [() => StripePrivyRequestBodyType, 0], 0, 2],
    2
  ];
  var StripePrivyTokenResponseOutput$ = [
    3,
    n02,
    _SPTRO,
    0,
    [_aIp, _bAT, _aSu, _rE],
    [0, [() => StripePrivyBasicAuthTokenType, 0], [() => StripePrivyAuthorizationSignatureType, 0], 1],
    2
  ];
  var SystemPromptConfigurationBundle$ = [
    3,
    n02,
    _SPCB,
    0,
    [_bA, _vI, _sPJP],
    [0, 0, 0],
    3
  ];
  var SystemPromptRecommendationConfig$ = [
    3,
    n02,
    _SPRC,
    0,
    [_sP, _aTg, _eCv],
    [[() => SystemPromptConfig$, 0], [() => AgentTracesConfig$, 0], () => RecommendationEvaluationConfig$],
    2
  ];
  var SystemPromptRecommendationResult$ = [
    3,
    n02,
    _SPRR,
    0,
    [_rSP, _cB, _ex, _eCr, _eMr],
    [[() => SystemPromptText, 0], () => RecommendationResultConfigurationBundle$, 0, 0, 0]
  ];
  var TargetRef$ = [
    3,
    n02,
    _TR,
    0,
    [_n],
    [0],
    1
  ];
  var TokenBalance$ = [
    3,
    n02,
    _TB,
    0,
    [_am, _dec, _to, _ne, _ch],
    [0, 1, 0, 0, 0],
    5
  ];
  var TokenUsage$ = [
    3,
    n02,
    _TU,
    0,
    [_iTn, _oT, _tT],
    [1, 1, 1]
  ];
  var ToolArguments$ = [
    3,
    n02,
    _TA,
    0,
    [_cod, _lan, _cCl, _com, _pat, _pa, _co, _dPi, _tIa, _run],
    [0, 0, 2, 0, 0, 64 | 0, [() => InputContentBlockList, 0], 0, 0, 0]
  ];
  var ToolDescriptionConfigurationBundle$ = [
    3,
    n02,
    _TDCB,
    0,
    [_bA, _vI, _too],
    [0, 0, () => ConfigurationBundleToolEntryList],
    3
  ];
  var ToolDescriptionInput$ = [
    3,
    n02,
    _TDI,
    0,
    [_tN, _tD],
    [0, [() => ToolDescriptionConfig$, 0]],
    2
  ];
  var ToolDescriptionOutput$ = [
    3,
    n02,
    _TDO,
    0,
    [_tN, _rTD, _ex],
    [0, [() => ToolDescriptionText, 0], 0],
    1
  ];
  var ToolDescriptionRecommendationConfig$ = [
    3,
    n02,
    _TDRC,
    0,
    [_tD, _aTg],
    [[() => ToolDescriptionSource$, 0], [() => AgentTracesConfig$, 0]],
    2
  ];
  var ToolDescriptionRecommendationResult$ = [
    3,
    n02,
    _TDRR,
    0,
    [_too, _cB, _eCr, _eMr],
    [[() => ToolDescriptionResultList, 0], () => RecommendationResultConfigurationBundle$, 0, 0]
  ];
  var ToolDescriptionTextInput$ = [
    3,
    n02,
    _TDTI,
    0,
    [_too],
    [[() => ToolDescriptionList, 0]],
    1
  ];
  var ToolResultStructuredContent$ = [
    3,
    n02,
    _TRSC,
    0,
    [_tIa, _tSa, _std, _stde, _eC, _eTxe],
    [0, 0, 0, 0, 1, 1]
  ];
  var ToolsDefinition$ = [
    3,
    n02,
    _TD,
    0,
    [_pV, _iC],
    [0, 0]
  ];
  var UpdateABTestRequest$ = [
    3,
    n02,
    _UABTR,
    0,
    [_aTI, _cT, _n, _d, _va, _gF, _eCv, _rA, _eS],
    [[0, 1], [0, 4], 0, 0, () => VariantList, () => GatewayFilter$, () => ABTestEvaluationConfig$, 0, 0],
    1
  ];
  var UpdateABTestResponse$ = [
    3,
    n02,
    _UABTRp,
    0,
    [_aTI, _aTA, _sta, _eS, _uA],
    [0, 0, 0, 0, 4],
    5
  ];
  var UpdateBrowserStreamRequest$ = [
    3,
    n02,
    _UBSR,
    0,
    [_bI, _sI, _sUt, _cT],
    [[0, 1], [0, { [_hQ]: _sI }], () => StreamUpdate$, [0, 4]],
    3
  ];
  var UpdateBrowserStreamResponse$ = [
    3,
    n02,
    _UBSRp,
    0,
    [_bI, _sI, _str, _uA],
    [0, 0, () => BrowserSessionStream$, 5],
    4
  ];
  var UserIntentAffectedSession$ = [
    3,
    n02,
    _UIAS,
    0,
    [_sI, _uM],
    [0, 64 | 0],
    2
  ];
  var UserIntentCluster$ = [
    3,
    n02,
    _UIC,
    0,
    [_cI, _n, _d, _aSC, _aSf],
    [1, 0, 0, 1, () => UserIntentAffectedSessionList],
    5
  ];
  var UserIntentClusteringResultContent$ = [
    3,
    n02,
    _UICRC,
    0,
    [_uIse],
    [() => UserIntentClusterList],
    1
  ];
  var ValidationExceptionField$ = [
    3,
    n02,
    _VEF,
    0,
    [_n, _m2],
    [0, 0],
    2
  ];
  var Variant$ = [
    3,
    n02,
    _V2,
    0,
    [_n, _w, _vC],
    [0, 1, () => VariantConfiguration$],
    3
  ];
  var VariantConfiguration$ = [
    3,
    n02,
    _VC,
    0,
    [_cB, _tar],
    [() => ConfigurationBundleRef$, () => TargetRef$]
  ];
  var VariantResult$ = [
    3,
    n02,
    _VR,
    0,
    [_vN, _sSa, _me, _iSs, _aCb, _pCe, _pVa, _cIo],
    [0, 1, 1, 2, 1, 1, 1, () => ConfidenceInterval$],
    4
  ];
  var ViewPort$ = [
    3,
    n02,
    _VP,
    0,
    [_wi, _he],
    [1, 1],
    2
  ];
  var __Unit = "unit";
  var ABTestSummaryList = [
    1,
    n02,
    _ABTSL,
    0,
    () => ABTestSummary$
  ];
  var ActorSummaryList = [
    1,
    n02,
    _ASL,
    0,
    () => ActorSummary$
  ];
  var AffectedSessionList = [
    1,
    n02,
    _ASLf,
    0,
    () => AffectedSession$
  ];
  var AudiencesListType = 64 | 0;
  var BatchEvaluationSummaryList = [
    1,
    n02,
    _BESL,
    0,
    () => BatchEvaluationSummary$
  ];
  var BrowserEnterprisePolicies = [
    1,
    n02,
    _BEPr,
    0,
    () => BrowserEnterprisePolicy$
  ];
  var BrowserExtensions = [
    1,
    n02,
    _BEr,
    0,
    () => BrowserExtension$
  ];
  var BrowserSessionSummaries = [
    1,
    n02,
    _BSSro,
    0,
    () => BrowserSessionSummary$
  ];
  var Certificates = [
    1,
    n02,
    _Ce,
    0,
    () => Certificate$
  ];
  var CloudWatchLogsFilterList = [
    1,
    n02,
    _CWLFL,
    0,
    () => CloudWatchLogsFilter$
  ];
  var CodeInterpreterSessionSummaries = [
    1,
    n02,
    _CISSo,
    0,
    () => CodeInterpreterSessionSummary$
  ];
  var ConfigurationBundleToolEntryList = [
    1,
    n02,
    _CBTEL,
    0,
    () => ConfigurationBundleToolEntry$
  ];
  var ContentBlockList = [
    1,
    n02,
    _CBL,
    0,
    () => ContentBlock$
  ];
  var DomainPatterns = 64 | 0;
  var ErrorDetailsList = 64 | 0;
  var EvaluationContentList = [
    1,
    n02,
    _ECL,
    0,
    () => EvaluationContent$
  ];
  var EvaluationReferenceInputs = [
    1,
    n02,
    _ERIv,
    8,
    () => EvaluationReferenceInput$
  ];
  var EvaluationResults = [
    1,
    n02,
    _ERva,
    0,
    [
      () => EvaluationResultContent$,
      0
    ]
  ];
  var EvaluationStringList = 64 | 0;
  var EvaluationToolNames = 64 | 0;
  var EvaluatorList = [
    1,
    n02,
    _EL,
    0,
    () => Evaluator$
  ];
  var EvaluatorMetricList = [
    1,
    n02,
    _EML,
    0,
    () => EvaluatorMetric$
  ];
  var EvaluatorSummaryList = [
    1,
    n02,
    _ESL,
    0,
    () => EvaluatorSummary$
  ];
  var EventList = [
    1,
    n02,
    _ELv,
    0,
    [
      () => Event$,
      0
    ]
  ];
  var EventMetadataFilterList = [
    1,
    n02,
    _EMFL,
    0,
    () => EventMetadataFilterExpression$
  ];
  var ExecutionSummaryAffectedSessionList = [
    1,
    n02,
    _ESASL,
    0,
    () => ExecutionSummaryAffectedSession$
  ];
  var ExecutionSummaryClusterList = [
    1,
    n02,
    _ESCL,
    0,
    () => ExecutionSummaryCluster$
  ];
  var ExtractionJobMetadataList = [
    1,
    n02,
    _EJML,
    0,
    () => ExtractionJobMetadata$
  ];
  var FailureCategoryClusterList = [
    1,
    n02,
    _FCCL,
    0,
    () => FailureCategoryCluster$
  ];
  var FailureSpanDetailList = [
    1,
    n02,
    _FSDL,
    0,
    () => FailureSpanDetail$
  ];
  var FailureSubCategoryClusterList = [
    1,
    n02,
    _FSCCL,
    0,
    () => FailureSubCategoryCluster$
  ];
  var GroundTruthTurnList = [
    1,
    n02,
    _GTTL,
    0,
    () => GroundTruthTurn$
  ];
  var HarnessAllowedTools = 64 | 0;
  var HarnessAwsSkillPaths = 64 | 0;
  var HarnessContentBlocks = [
    1,
    n02,
    _HCB,
    0,
    [
      () => HarnessContentBlock$,
      0
    ]
  ];
  var HarnessMessages = [
    1,
    n02,
    _HMa,
    0,
    [
      () => HarnessMessage$,
      0
    ]
  ];
  var HarnessSkills = [
    1,
    n02,
    _HS,
    0,
    () => HarnessSkill$
  ];
  var HarnessSystemPrompt = [
    1,
    n02,
    _HSP,
    0,
    [
      () => HarnessSystemContentBlock$,
      0
    ]
  ];
  var HarnessToolResultBlocksDelta = [
    1,
    n02,
    _HTRBD,
    0,
    [
      () => HarnessToolResultBlockDelta$,
      0
    ]
  ];
  var HarnessToolResultContentBlocks = [
    1,
    n02,
    _HTRCB,
    0,
    [
      () => HarnessToolResultContentBlock$,
      0
    ]
  ];
  var HarnessTools = [
    1,
    n02,
    _HTa,
    0,
    [
      () => HarnessTool$,
      0
    ]
  ];
  var IgnoredReferenceInputFields = 64 | 0;
  var InputContentBlockList = [
    1,
    n02,
    _ICBL,
    0,
    [
      () => InputContentBlock$,
      0
    ]
  ];
  var InsightList = [
    1,
    n02,
    _IL,
    0,
    () => Insight$
  ];
  var InsightsFailureSignalList = [
    1,
    n02,
    _IFSL,
    0,
    () => InsightsFailureSignal$
  ];
  var KeyList = 64 | 0;
  var LinkedAccountList = [
    1,
    n02,
    _LAL,
    0,
    [
      () => LinkedAccount$,
      0
    ]
  ];
  var LogGroupArnList = 64 | 0;
  var MemoryMetadataFilterList = [
    1,
    n02,
    _MMFL,
    0,
    () => MemoryMetadataFilterExpression$
  ];
  var MemoryRecordsCreateInputList = [
    1,
    n02,
    _MRCIL,
    0,
    [
      () => MemoryRecordCreateInput$,
      0
    ]
  ];
  var MemoryRecordsDeleteInputList = [
    1,
    n02,
    _MRDIL,
    0,
    () => MemoryRecordDeleteInput$
  ];
  var MemoryRecordsOutputList = [
    1,
    n02,
    _MROL,
    0,
    () => MemoryRecordOutput$
  ];
  var MemoryRecordSummaryList = [
    1,
    n02,
    _MRSL,
    0,
    [
      () => MemoryRecordSummary$,
      0
    ]
  ];
  var MemoryRecordsUpdateInputList = [
    1,
    n02,
    _MRUIL,
    0,
    [
      () => MemoryRecordUpdateInput$,
      0
    ]
  ];
  var MessagesList = [
    1,
    n02,
    _ML2,
    0,
    () => MessageMetadata$
  ];
  var NamespacesList = 64 | 0;
  var OAuthScopes = 64 | 0;
  var PayloadTypeList = [
    1,
    n02,
    _PTL,
    0,
    [
      () => PayloadType$,
      0
    ]
  ];
  var PaymentInstrumentSummaryList = [
    1,
    n02,
    _PISL,
    0,
    () => PaymentInstrumentSummary$
  ];
  var PaymentSessionSummaryList = [
    1,
    n02,
    _PSSL,
    0,
    () => PaymentSessionSummary$
  ];
  var PerVariantOnlineEvaluationConfigList = [
    1,
    n02,
    _PVOECL,
    0,
    () => PerVariantOnlineEvaluationConfig$
  ];
  var Proxies = [
    1,
    n02,
    _P2,
    0,
    () => Proxy$
  ];
  var RecommendationEvaluatorList = [
    1,
    n02,
    _REL,
    0,
    () => RecommendationEvaluatorReference$
  ];
  var RecommendationSummaryList = [
    1,
    n02,
    _RSL,
    0,
    () => RecommendationSummary$
  ];
  var RegistryIdList = 64 | 0;
  var RegistryRecordSummaryList = [
    1,
    n02,
    _RRSL,
    0,
    [
      () => RegistryRecordSummary$,
      0
    ]
  ];
  var ResourcesListType = 64 | 0;
  var RootCauseClusterList = [
    1,
    n02,
    _RCCL,
    0,
    () => RootCauseCluster$
  ];
  var ScopesListType = 64 | 0;
  var ServiceNameList = 64 | 0;
  var SessionMetadataList = [
    1,
    n02,
    _SMLe,
    0,
    () => SessionMetadataShape$
  ];
  var SessionSummaryList = [
    1,
    n02,
    _SSL,
    0,
    () => SessionSummary$
  ];
  var SpanIds = 64 | 0;
  var Spans = [
    1,
    n02,
    _Sp,
    8,
    15
  ];
  var StringList = 64 | 0;
  var StringValueList = 64 | 0;
  var TargetPathList = 64 | 0;
  var ToolDescriptionList = [
    1,
    n02,
    _TDL,
    0,
    [
      () => ToolDescriptionInput$,
      0
    ]
  ];
  var ToolDescriptionResultList = [
    1,
    n02,
    _TDRL,
    0,
    [
      () => ToolDescriptionOutput$,
      0
    ]
  ];
  var TraceIds = 64 | 0;
  var UserIntentAffectedSessionList = [
    1,
    n02,
    _UIASL,
    0,
    () => UserIntentAffectedSession$
  ];
  var UserIntentClusterList = [
    1,
    n02,
    _UICL,
    0,
    () => UserIntentCluster$
  ];
  var UserIntentList = 64 | 0;
  var ValidationExceptionFieldList = [
    1,
    n02,
    _VEFL,
    0,
    () => ValidationExceptionField$
  ];
  var VariantList = [
    1,
    n02,
    _VL,
    0,
    () => Variant$
  ];
  var VariantResultList = [
    1,
    n02,
    _VRL,
    0,
    () => VariantResult$
  ];
  var CustomRequestParametersType = [
    2,
    n02,
    _CRPT,
    0,
    [
      0,
      0
    ],
    [
      () => CustomRequestValueType,
      0
    ]
  ];
  var HttpHeadersMap = [
    2,
    n02,
    _HHM,
    8,
    0,
    0
  ];
  var MemoryRecordMetadataMap = [
    2,
    n02,
    _MRMM,
    0,
    0,
    () => MemoryRecordMetadataValue$
  ];
  var MetadataMap = [
    2,
    n02,
    _MMe,
    0,
    0,
    () => MetadataValue$
  ];
  var OAuthCustomParameters = [
    2,
    n02,
    _OACPu,
    0,
    [
      0,
      0
    ],
    [
      () => OAuthCustomParametersValue,
      0
    ]
  ];
  var StringMap = 128 | 0;
  var TagsMap = 128 | 0;
  var ABTestEvaluationConfig$ = [
    4,
    n02,
    _ABTEC,
    0,
    [_oECA, _pVOEC],
    [0, () => PerVariantOnlineEvaluationConfigList]
  ];
  var AgentTracesConfig$ = [
    4,
    n02,
    _ATC,
    0,
    [_sSess, _cL, _bEa],
    [[() => Spans, 0], () => CloudWatchLogsTraceConfig$, () => BatchEvaluationTraceConfig$]
  ];
  var BrowserAction$ = [
    4,
    n02,
    _BAr,
    0,
    [_mC, _mM, _mD, _mS, _kT, _kP, _kS, _scr],
    [() => MouseClickArguments$, () => MouseMoveArguments$, () => MouseDragArguments$, () => MouseScrollArguments$, () => KeyTypeArguments$, () => KeyPressArguments$, () => KeyShortcutArguments$, () => ScreenshotArguments$]
  ];
  var BrowserActionResult$ = [
    4,
    n02,
    _BAR,
    0,
    [_mC, _mM, _mD, _mS, _kT, _kP, _kS, _scr],
    [() => MouseClickResult$, () => MouseMoveResult$, () => MouseDragResult$, () => MouseScrollResult$, () => KeyTypeResult$, () => KeyPressResult$, () => KeyShortcutResult$, () => ScreenshotResult$]
  ];
  var CertificateLocation$ = [
    4,
    n02,
    _CL,
    0,
    [_sMe],
    [() => SecretsManagerLocation$]
  ];
  var CodeInterpreterStreamOutput$ = [
    4,
    n02,
    _CISO,
    { [_st]: 1 },
    [_resul, _aDE, _cE, _iSE, _rNFE, _sQEE, _tEh, _vE],
    [() => CodeInterpreterResult$, [() => AccessDeniedException$2, 0], [() => ConflictException$, 0], [() => InternalServerException$2, 0], [() => ResourceNotFoundException$2, 0], [() => ServiceQuotaExceededException$, 0], [() => ThrottlingException$, 0], [() => ValidationException$, 0]]
  ];
  var Content$ = [
    4,
    n02,
    _Con,
    0,
    [_te],
    [[() => SensitiveString, 0]]
  ];
  var Context$ = [
    4,
    n02,
    _Cont,
    0,
    [_sCp],
    [() => SpanContext$]
  ];
  var DataSourceConfig$ = [
    4,
    n02,
    _DSC,
    0,
    [_cWL, _oECS],
    [() => CloudWatchLogsSource$, () => OnlineEvaluationConfigSource$]
  ];
  var EvaluationContent$ = [
    4,
    n02,
    _EC2,
    0,
    [_te],
    [0]
  ];
  var EvaluationInput$ = [
    4,
    n02,
    _EI,
    0,
    [_sSess],
    [[() => Spans, 0]]
  ];
  var EvaluationMetadata$ = [
    4,
    n02,
    _EMv,
    0,
    [_sMes],
    [() => SessionMetadataList]
  ];
  var EvaluationTarget$ = [
    4,
    n02,
    _ET,
    0,
    [_sIpa, _tIr],
    [64 | 0, 64 | 0]
  ];
  var ExtractionJobMessages$ = [
    4,
    n02,
    _EJMx,
    0,
    [_mL],
    [() => MessagesList]
  ];
  var FilterValue$ = [
    4,
    n02,
    _FV,
    0,
    [_sVt, _dV, _bVo],
    [0, 1, 2]
  ];
  var GroundTruthSource$ = [
    4,
    n02,
    _GTS,
    0,
    [_inl],
    [() => InlineGroundTruth$]
  ];
  var GroundTruthTurnInput$ = [
    4,
    n02,
    _GTTI,
    0,
    [_prom],
    [0]
  ];
  var HarnessContentBlock$ = [
    4,
    n02,
    _HCBa,
    0,
    [_te, _tUo, _tRo, _rCea],
    [[() => SensitiveText, 0], [() => HarnessToolUseBlock$, 0], [() => HarnessToolResultBlock$, 0], [() => HarnessReasoningContentBlock$, 0]]
  ];
  var HarnessContentBlockDelta$ = [
    4,
    n02,
    _HCBD,
    0,
    [_te, _tUo, _tRo, _rCea],
    [[() => SensitiveText, 0], [() => HarnessToolUseBlockDelta$, 0], [() => HarnessToolResultBlocksDelta, 0], [() => HarnessReasoningContentBlockDelta$, 0]]
  ];
  var HarnessContentBlockStart$ = [
    4,
    n02,
    _HCBS,
    0,
    [_tUo, _tRo],
    [() => HarnessToolUseBlockStart$, () => HarnessToolResultBlockStart$]
  ];
  var HarnessGatewayOutboundAuth$ = [
    4,
    n02,
    _HGOA,
    0,
    [_aIw, _no, _oa],
    [() => __Unit, () => __Unit, [() => OAuthCredentialProvider$, 0]]
  ];
  var HarnessModelConfiguration$ = [
    4,
    n02,
    _HMC,
    0,
    [_bMC, _oAMC, _gMC, _lLMC],
    [() => HarnessBedrockModelConfig$, () => HarnessOpenAiModelConfig$, () => HarnessGeminiModelConfig$, [() => HarnessLiteLlmModelConfig$, 0]]
  ];
  var HarnessReasoningContentBlock$ = [
    4,
    n02,
    _HRCB,
    8,
    [_rT, _rCed],
    [[() => HarnessReasoningTextBlock$, 0], 21]
  ];
  var HarnessReasoningContentBlockDelta$ = [
    4,
    n02,
    _HRCBD,
    8,
    [_te, _rCed, _sign],
    [0, [() => Body, 0], 0]
  ];
  var HarnessSkill$ = [
    4,
    n02,
    _HSa,
    0,
    [_pat, _s_, _g, _aSw],
    [0, () => HarnessSkillS3Source$, () => HarnessSkillGitSource$, () => HarnessSkillAwsSkillsSource$]
  ];
  var HarnessSystemContentBlock$ = [
    4,
    n02,
    _HSCB,
    0,
    [_te],
    [[() => SensitiveText, 0]]
  ];
  var HarnessToolConfiguration$ = [
    4,
    n02,
    _HTC,
    0,
    [_rMe, _aCB, _aCG, _iF, _aCCI],
    [[() => HarnessRemoteMcpConfig$, 0], () => HarnessAgentCoreBrowserConfig$, [() => HarnessAgentCoreGatewayConfig$, 0], [() => HarnessInlineFunctionConfig$, 0], () => HarnessAgentCoreCodeInterpreterConfig$]
  ];
  var HarnessToolResultBlockDelta$ = [
    4,
    n02,
    _HTRBDa,
    0,
    [_te, _js],
    [[() => SensitiveText, 0], [() => SensitiveJson, 0]]
  ];
  var HarnessToolResultContentBlock$ = [
    4,
    n02,
    _HTRCBa,
    0,
    [_te, _js],
    [[() => SensitiveText, 0], [() => SensitiveJson, 0]]
  ];
  var InvokeAgentRuntimeCommandStreamOutput$ = [
    4,
    n02,
    _IARCSO,
    { [_st]: 1 },
    [_chu, _aDE, _iSE, _rNFE, _sQEE, _tEh, _vE, _rCE],
    [() => ResponseChunk$, [() => AccessDeniedException$2, 0], [() => InternalServerException$2, 0], [() => ResourceNotFoundException$2, 0], [() => ServiceQuotaExceededException$, 0], [() => ThrottlingException$, 0], [() => ValidationException$, 0], [() => RuntimeClientError$, 0]]
  ];
  var InvokeHarnessStreamOutput$ = [
    4,
    n02,
    _IHSO,
    { [_st]: 1 },
    [_mSe, _cBS, _cBD, _cBSo, _mSes, _met, _iSE, _vE, _rCE],
    [() => HarnessMessageStartEvent$, () => HarnessContentBlockStartEvent$, [() => HarnessContentBlockDeltaEvent$, 0], () => HarnessContentBlockStopEvent$, () => HarnessMessageStopEvent$, () => HarnessMetadataEvent$, [() => InternalServerException$2, 0], [() => ValidationException$, 0], [() => RuntimeClientError$, 0]]
  ];
  var LeftExpression$ = [
    4,
    n02,
    _LE,
    0,
    [_mK],
    [0]
  ];
  var LinkedAccount$ = [
    4,
    n02,
    _LA,
    8,
    [_em, _sm, _dJ, _oAu],
    [[() => LinkedAccountEmail$, 0], [() => LinkedAccountSms$, 0], () => LinkedAccountDeveloperJwt$, [() => LinkedAccountOAuth2$, 0]]
  ];
  var LinkedAccountOAuth2$ = [
    4,
    n02,
    _LAOA,
    0,
    [_go, _ap, _x, _tel, _gi],
    [[() => OAuth2Authentication$, 0], [() => OAuth2Authentication$, 0], [() => OAuth2Authentication$, 0], [() => OAuth2Authentication$, 0], [() => OAuth2Authentication$, 0]]
  ];
  var MemoryContent$ = [
    4,
    n02,
    _MC2,
    0,
    [_te],
    [[() => SensitiveString, 0]]
  ];
  var MemoryRecordLeftExpression$ = [
    4,
    n02,
    _MRLE,
    0,
    [_mK],
    [0]
  ];
  var MemoryRecordMetadataValue$ = [
    4,
    n02,
    _MRMV,
    0,
    [_sVt, _sLV, _nV, _dTV],
    [0, 64 | 0, 1, 4]
  ];
  var MemoryRecordRightExpression$ = [
    4,
    n02,
    _MRRE,
    0,
    [_mV],
    [() => MemoryRecordMetadataValue$]
  ];
  var MetadataValue$ = [
    4,
    n02,
    _MV2,
    0,
    [_sVt],
    [0]
  ];
  var OutputConfig$ = [
    4,
    n02,
    _OC,
    0,
    [_cWC],
    [() => CloudWatchOutputConfig$]
  ];
  var PayloadType$ = [
    4,
    n02,
    _PT2,
    0,
    [_conv, _bl],
    [[() => Conversational$, 0], [() => MemoryDocument, 0]]
  ];
  var PaymentInput$ = [
    4,
    n02,
    _PIa,
    0,
    [_cX],
    [[() => CryptoX402PaymentInput$, 0]]
  ];
  var PaymentInstrumentDetails$ = [
    4,
    n02,
    _PID,
    0,
    [_eCW],
    [[() => EmbeddedCryptoWallet$, 0]]
  ];
  var PaymentOutput$ = [
    4,
    n02,
    _PO,
    0,
    [_cX],
    [[() => CryptoX402PaymentOutput$, 0]]
  ];
  var PaymentTokenRequestInput$ = [
    4,
    n02,
    _PTRI,
    0,
    [_cCTR, _sPTR],
    [() => CoinbaseCdpTokenRequestInput$, [() => StripePrivyTokenRequestInput$, 0]]
  ];
  var PaymentTokenResponseOutput$ = [
    4,
    n02,
    _PTRO,
    0,
    [_cCTRo, _sPTRt],
    [[() => CoinbaseCdpTokenResponseOutput$, 0], [() => StripePrivyTokenResponseOutput$, 0]]
  ];
  var Proxy$ = [
    4,
    n02,
    _Pr,
    0,
    [_ePx],
    [() => ExternalProxy$]
  ];
  var ProxyCredentials$ = [
    4,
    n02,
    _PCr,
    0,
    [_bAa],
    [() => BasicAuth$]
  ];
  var RecommendationConfig$ = [
    4,
    n02,
    _RCec,
    0,
    [_sPRC, _tDRC],
    [[() => SystemPromptRecommendationConfig$, 0], [() => ToolDescriptionRecommendationConfig$, 0]]
  ];
  var RecommendationResult$ = [
    4,
    n02,
    _RR2,
    0,
    [_sPRR, _tDRR],
    [[() => SystemPromptRecommendationResult$, 0], [() => ToolDescriptionRecommendationResult$, 0]]
  ];
  var ResourceLocation$ = [
    4,
    n02,
    _RL,
    0,
    [_s_],
    [() => S3Location$]
  ];
  var RightExpression$ = [
    4,
    n02,
    _RE,
    0,
    [_mV],
    [() => MetadataValue$]
  ];
  var StreamUpdate$ = [
    4,
    n02,
    _SU,
    0,
    [_aSU],
    [() => AutomationStreamUpdate$]
  ];
  var SystemPromptConfig$ = [
    4,
    n02,
    _SPC,
    0,
    [_te, _cB],
    [[() => SystemPromptText, 0], () => SystemPromptConfigurationBundle$]
  ];
  var ToolDescriptionConfig$ = [
    4,
    n02,
    _TDC,
    0,
    [_te],
    [[() => ToolDescriptionText, 0]]
  ];
  var ToolDescriptionSource$ = [
    4,
    n02,
    _TDS,
    0,
    [_tDT, _cB],
    [[() => ToolDescriptionTextInput$, 0], () => ToolDescriptionConfigurationBundle$]
  ];
  var UserIdentifier$ = [
    4,
    n02,
    _UI,
    0,
    [_uT, _uIs],
    [[() => UserTokenType, 0], 0]
  ];
  var BatchCreateMemoryRecords$ = [
    9,
    n02,
    _BCMR,
    { [_ht]: ["POST", "/memories/{memoryId}/memoryRecords/batchCreate", 201] },
    () => BatchCreateMemoryRecordsInput$,
    () => BatchCreateMemoryRecordsOutput$
  ];
  var BatchDeleteMemoryRecords$ = [
    9,
    n02,
    _BDMR,
    { [_ht]: ["POST", "/memories/{memoryId}/memoryRecords/batchDelete", 200] },
    () => BatchDeleteMemoryRecordsInput$,
    () => BatchDeleteMemoryRecordsOutput$
  ];
  var BatchUpdateMemoryRecords$ = [
    9,
    n02,
    _BUMR,
    { [_ht]: ["POST", "/memories/{memoryId}/memoryRecords/batchUpdate", 200] },
    () => BatchUpdateMemoryRecordsInput$,
    () => BatchUpdateMemoryRecordsOutput$
  ];
  var CompleteResourceTokenAuth$ = [
    9,
    n02,
    _CRTA,
    { [_ht]: ["POST", "/identities/CompleteResourceTokenAuth", 200] },
    () => CompleteResourceTokenAuthRequest$,
    () => CompleteResourceTokenAuthResponse$
  ];
  var CreateABTest$ = [
    9,
    n02,
    _CABT,
    { [_ht]: ["POST", "/ab-tests", 202] },
    () => CreateABTestRequest$,
    () => CreateABTestResponse$
  ];
  var CreateEvent$ = [
    9,
    n02,
    _CEr,
    { [_ht]: ["POST", "/memories/{memoryId}/events", 201] },
    () => CreateEventInput$,
    () => CreateEventOutput$
  ];
  var CreatePaymentInstrument$ = [
    9,
    n02,
    _CPI,
    { [_ht]: ["POST", "/payments/createPaymentInstrument", 201] },
    () => CreatePaymentInstrumentRequest$,
    () => CreatePaymentInstrumentResponse$
  ];
  var CreatePaymentSession$ = [
    9,
    n02,
    _CPS,
    { [_ht]: ["POST", "/payments/createPaymentSession", 201] },
    () => CreatePaymentSessionRequest$,
    () => CreatePaymentSessionResponse$
  ];
  var DeleteABTest$ = [
    9,
    n02,
    _DABT,
    { [_ht]: ["DELETE", "/ab-tests/{abTestId}", 202] },
    () => DeleteABTestRequest$,
    () => DeleteABTestResponse$
  ];
  var DeleteBatchEvaluation$ = [
    9,
    n02,
    _DBE,
    { [_ht]: ["DELETE", "/evaluations/batch-evaluate/{batchEvaluationId}", 202] },
    () => DeleteBatchEvaluationRequest$,
    () => DeleteBatchEvaluationResponse$
  ];
  var DeleteEvent$ = [
    9,
    n02,
    _DE,
    { [_ht]: ["DELETE", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}", 200] },
    () => DeleteEventInput$,
    () => DeleteEventOutput$
  ];
  var DeleteMemoryRecord$ = [
    9,
    n02,
    _DMR,
    { [_ht]: ["DELETE", "/memories/{memoryId}/memoryRecords/{memoryRecordId}", 200] },
    () => DeleteMemoryRecordInput$,
    () => DeleteMemoryRecordOutput$
  ];
  var DeletePaymentInstrument$ = [
    9,
    n02,
    _DPI,
    { [_ht]: ["POST", "/payments/deletePaymentInstrument", 200] },
    () => DeletePaymentInstrumentRequest$,
    () => DeletePaymentInstrumentResponse$
  ];
  var DeletePaymentSession$ = [
    9,
    n02,
    _DPS,
    { [_ht]: ["POST", "/payments/deletePaymentSession", 200] },
    () => DeletePaymentSessionRequest$,
    () => DeletePaymentSessionResponse$
  ];
  var DeleteRecommendation$ = [
    9,
    n02,
    _DR,
    { [_ht]: ["DELETE", "/recommendations/{recommendationId}", 202] },
    () => DeleteRecommendationRequest$,
    () => DeleteRecommendationResponse$
  ];
  var Evaluate$ = [
    9,
    n02,
    _Eva,
    { [_ht]: ["POST", "/evaluations/evaluate/{evaluatorId}", 200] },
    () => EvaluateRequest$,
    () => EvaluateResponse$
  ];
  var GetABTest$ = [
    9,
    n02,
    _GABT,
    { [_ht]: ["GET", "/ab-tests/{abTestId}", 200] },
    () => GetABTestRequest$,
    () => GetABTestResponse$
  ];
  var GetAgentCard$ = [
    9,
    n02,
    _GAC,
    { [_ht]: ["GET", "/runtimes/{agentRuntimeArn}/invocations/.well-known/agent-card.json", 200] },
    () => GetAgentCardRequest$,
    () => GetAgentCardResponse$
  ];
  var GetBatchEvaluation$ = [
    9,
    n02,
    _GBE,
    { [_ht]: ["GET", "/evaluations/batch-evaluate/{batchEvaluationId}", 200] },
    () => GetBatchEvaluationRequest$,
    () => GetBatchEvaluationResponse$
  ];
  var GetBrowserSession$ = [
    9,
    n02,
    _GBS,
    { [_ht]: ["GET", "/browsers/{browserIdentifier}/sessions/get", 200] },
    () => GetBrowserSessionRequest$,
    () => GetBrowserSessionResponse$
  ];
  var GetCodeInterpreterSession$ = [
    9,
    n02,
    _GCIS,
    { [_ht]: ["GET", "/code-interpreters/{codeInterpreterIdentifier}/sessions/get", 200] },
    () => GetCodeInterpreterSessionRequest$,
    () => GetCodeInterpreterSessionResponse$
  ];
  var GetEvent$ = [
    9,
    n02,
    _GE,
    { [_ht]: ["GET", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}", 200] },
    () => GetEventInput$,
    () => GetEventOutput$
  ];
  var GetMemoryRecord$ = [
    9,
    n02,
    _GMR,
    { [_ht]: ["GET", "/memories/{memoryId}/memoryRecord/{memoryRecordId}", 200] },
    () => GetMemoryRecordInput$,
    () => GetMemoryRecordOutput$
  ];
  var GetPaymentInstrument$ = [
    9,
    n02,
    _GPI,
    { [_ht]: ["POST", "/payments/getPaymentInstrument", 200] },
    () => GetPaymentInstrumentRequest$,
    () => GetPaymentInstrumentResponse$
  ];
  var GetPaymentInstrumentBalance$ = [
    9,
    n02,
    _GPIB,
    { [_ht]: ["POST", "/payments/getPaymentInstrumentBalance", 200] },
    () => GetPaymentInstrumentBalanceRequest$,
    () => GetPaymentInstrumentBalanceResponse$
  ];
  var GetPaymentSession$ = [
    9,
    n02,
    _GPS,
    { [_ht]: ["POST", "/payments/getPaymentSession", 200] },
    () => GetPaymentSessionRequest$,
    () => GetPaymentSessionResponse$
  ];
  var GetRecommendation$ = [
    9,
    n02,
    _GR,
    { [_ht]: ["GET", "/recommendations/{recommendationId}", 200] },
    () => GetRecommendationRequest$,
    () => GetRecommendationResponse$
  ];
  var GetResourceApiKey$ = [
    9,
    n02,
    _GRAK,
    { [_ht]: ["POST", "/identities/api-key", 200] },
    () => GetResourceApiKeyRequest$,
    () => GetResourceApiKeyResponse$
  ];
  var GetResourceOauth2Token$ = [
    9,
    n02,
    _GROT,
    { [_ht]: ["POST", "/identities/oauth2/token", 200] },
    () => GetResourceOauth2TokenRequest$,
    () => GetResourceOauth2TokenResponse$
  ];
  var GetResourcePaymentToken$ = [
    9,
    n02,
    _GRPT,
    { [_ht]: ["POST", "/identities/payment/token", 200] },
    () => GetResourcePaymentTokenRequest$,
    () => GetResourcePaymentTokenResponse$
  ];
  var GetWorkloadAccessToken$ = [
    9,
    n02,
    _GWAT,
    { [_ht]: ["POST", "/identities/GetWorkloadAccessToken", 200] },
    () => GetWorkloadAccessTokenRequest$,
    () => GetWorkloadAccessTokenResponse$
  ];
  var GetWorkloadAccessTokenForJWT$ = [
    9,
    n02,
    _GWATFJWT,
    { [_ht]: ["POST", "/identities/GetWorkloadAccessTokenForJWT", 200] },
    () => GetWorkloadAccessTokenForJWTRequest$,
    () => GetWorkloadAccessTokenForJWTResponse$
  ];
  var GetWorkloadAccessTokenForUserId$ = [
    9,
    n02,
    _GWATFUI,
    { [_ht]: ["POST", "/identities/GetWorkloadAccessTokenForUserId", 200] },
    () => GetWorkloadAccessTokenForUserIdRequest$,
    () => GetWorkloadAccessTokenForUserIdResponse$
  ];
  var InvokeAgentRuntime$ = [
    9,
    n02,
    _IAR2,
    { [_ht]: ["POST", "/runtimes/{agentRuntimeArn}/invocations", 200] },
    () => InvokeAgentRuntimeRequest$,
    () => InvokeAgentRuntimeResponse$
  ];
  var InvokeAgentRuntimeCommand$ = [
    9,
    n02,
    _IARC,
    { [_ht]: ["POST", "/runtimes/{agentRuntimeArn}/commands", 200] },
    () => InvokeAgentRuntimeCommandRequest$,
    () => InvokeAgentRuntimeCommandResponse$
  ];
  var InvokeBrowser$ = [
    9,
    n02,
    _IB,
    { [_ht]: ["POST", "/browsers/{browserIdentifier}/sessions/invoke", 200] },
    () => InvokeBrowserRequest$,
    () => InvokeBrowserResponse$
  ];
  var InvokeCodeInterpreter$ = [
    9,
    n02,
    _ICI,
    { [_ht]: ["POST", "/code-interpreters/{codeInterpreterIdentifier}/tools/invoke", 200] },
    () => InvokeCodeInterpreterRequest$,
    () => InvokeCodeInterpreterResponse$
  ];
  var InvokeHarness$ = [
    9,
    n02,
    _IH,
    { [_ht]: ["POST", "/harnesses/invoke", 200] },
    () => InvokeHarnessRequest$,
    () => InvokeHarnessResponse$
  ];
  var ListABTests$ = [
    9,
    n02,
    _LABT,
    { [_ht]: ["GET", "/ab-tests", 200] },
    () => ListABTestsRequest$,
    () => ListABTestsResponse$
  ];
  var ListActors$ = [
    9,
    n02,
    _LAi,
    { [_ht]: ["POST", "/memories/{memoryId}/actors", 200] },
    () => ListActorsInput$,
    () => ListActorsOutput$
  ];
  var ListBatchEvaluations$ = [
    9,
    n02,
    _LBE,
    { [_ht]: ["GET", "/evaluations/batch-evaluate", 200] },
    () => ListBatchEvaluationsRequest$,
    () => ListBatchEvaluationsResponse$
  ];
  var ListBrowserSessions$ = [
    9,
    n02,
    _LBS,
    { [_ht]: ["POST", "/browsers/{browserIdentifier}/sessions/list", 200] },
    () => ListBrowserSessionsRequest$,
    () => ListBrowserSessionsResponse$
  ];
  var ListCodeInterpreterSessions$ = [
    9,
    n02,
    _LCIS,
    { [_ht]: ["POST", "/code-interpreters/{codeInterpreterIdentifier}/sessions/list", 200] },
    () => ListCodeInterpreterSessionsRequest$,
    () => ListCodeInterpreterSessionsResponse$
  ];
  var ListEvents$ = [
    9,
    n02,
    _LEi,
    { [_ht]: ["POST", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}", 200] },
    () => ListEventsInput$,
    () => ListEventsOutput$
  ];
  var ListMemoryExtractionJobs$ = [
    9,
    n02,
    _LMEJ,
    { [_ht]: ["POST", "/memories/{memoryId}/extractionJobs", 200] },
    () => ListMemoryExtractionJobsInput$,
    () => ListMemoryExtractionJobsOutput$
  ];
  var ListMemoryRecords$ = [
    9,
    n02,
    _LMR,
    { [_ht]: ["POST", "/memories/{memoryId}/memoryRecords", 200] },
    () => ListMemoryRecordsInput$,
    () => ListMemoryRecordsOutput$
  ];
  var ListPaymentInstruments$ = [
    9,
    n02,
    _LPI,
    { [_ht]: ["POST", "/payments/listPaymentInstruments", 200] },
    () => ListPaymentInstrumentsRequest$,
    () => ListPaymentInstrumentsResponse$
  ];
  var ListPaymentSessions$ = [
    9,
    n02,
    _LPS,
    { [_ht]: ["POST", "/payments/listPaymentSessions", 200] },
    () => ListPaymentSessionsRequest$,
    () => ListPaymentSessionsResponse$
  ];
  var ListRecommendations$ = [
    9,
    n02,
    _LR,
    { [_ht]: ["GET", "/recommendations", 200] },
    () => ListRecommendationsRequest$,
    () => ListRecommendationsResponse$
  ];
  var ListSessions$ = [
    9,
    n02,
    _LS,
    { [_ht]: ["POST", "/memories/{memoryId}/actor/{actorId}/sessions", 200] },
    () => ListSessionsInput$,
    () => ListSessionsOutput$
  ];
  var ProcessPayment$ = [
    9,
    n02,
    _PP,
    { [_ht]: ["POST", "/payments/processPayment", 200] },
    () => ProcessPaymentRequest$,
    () => ProcessPaymentResponse$
  ];
  var RetrieveMemoryRecords$ = [
    9,
    n02,
    _RMR,
    { [_ht]: ["POST", "/memories/{memoryId}/retrieve", 200] },
    () => RetrieveMemoryRecordsInput$,
    () => RetrieveMemoryRecordsOutput$
  ];
  var SaveBrowserSessionProfile$ = [
    9,
    n02,
    _SBSP,
    { [_ht]: ["PUT", "/browser-profiles/{profileIdentifier}/save", 200] },
    () => SaveBrowserSessionProfileRequest$,
    () => SaveBrowserSessionProfileResponse$
  ];
  var SearchRegistryRecords$ = [
    9,
    n02,
    _SRRe,
    { [_ht]: ["POST", "/registry-records/search", 200] },
    () => SearchRegistryRecordsRequest$,
    () => SearchRegistryRecordsResponse$
  ];
  var StartBatchEvaluation$ = [
    9,
    n02,
    _SBE,
    { [_ht]: ["POST", "/evaluations/batch-evaluate", 202] },
    () => StartBatchEvaluationRequest$,
    () => StartBatchEvaluationResponse$
  ];
  var StartBrowserSession$ = [
    9,
    n02,
    _SBS,
    { [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/start", 200] },
    () => StartBrowserSessionRequest$,
    () => StartBrowserSessionResponse$
  ];
  var StartCodeInterpreterSession$ = [
    9,
    n02,
    _SCIS,
    { [_ht]: ["PUT", "/code-interpreters/{codeInterpreterIdentifier}/sessions/start", 200] },
    () => StartCodeInterpreterSessionRequest$,
    () => StartCodeInterpreterSessionResponse$
  ];
  var StartMemoryExtractionJob$ = [
    9,
    n02,
    _SMEJ,
    { [_ht]: ["POST", "/memories/{memoryId}/extractionJobs/start", 200] },
    () => StartMemoryExtractionJobInput$,
    () => StartMemoryExtractionJobOutput$
  ];
  var StartRecommendation$ = [
    9,
    n02,
    _SRt,
    { [_ht]: ["POST", "/recommendations", 202] },
    () => StartRecommendationRequest$,
    () => StartRecommendationResponse$
  ];
  var StopBatchEvaluation$ = [
    9,
    n02,
    _SBEt,
    { [_ht]: ["POST", "/evaluations/batch-evaluate/{batchEvaluationId}/stop", 202] },
    () => StopBatchEvaluationRequest$,
    () => StopBatchEvaluationResponse$
  ];
  var StopBrowserSession$ = [
    9,
    n02,
    _SBSt,
    { [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/stop", 200] },
    () => StopBrowserSessionRequest$,
    () => StopBrowserSessionResponse$
  ];
  var StopCodeInterpreterSession$ = [
    9,
    n02,
    _SCISt,
    { [_ht]: ["PUT", "/code-interpreters/{codeInterpreterIdentifier}/sessions/stop", 200] },
    () => StopCodeInterpreterSessionRequest$,
    () => StopCodeInterpreterSessionResponse$
  ];
  var StopRuntimeSession$ = [
    9,
    n02,
    _SRS,
    { [_ht]: ["POST", "/runtimes/{agentRuntimeArn}/stopruntimesession", 200] },
    () => StopRuntimeSessionRequest$,
    () => StopRuntimeSessionResponse$
  ];
  var UpdateABTest$ = [
    9,
    n02,
    _UABT,
    { [_ht]: ["PUT", "/ab-tests/{abTestId}", 202] },
    () => UpdateABTestRequest$,
    () => UpdateABTestResponse$
  ];
  var UpdateBrowserStream$ = [
    9,
    n02,
    _UBS,
    { [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/streams/update", 200] },
    () => UpdateBrowserStreamRequest$,
    () => UpdateBrowserStreamResponse$
  ];

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig3 = (config) => {
    return {
      apiVersion: "2024-02-28",
      base64Decoder: config?.base64Decoder ?? fromBase64,
      base64Encoder: config?.base64Encoder ?? toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultBedrockAgentCoreHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new AwsSdkSigV4Signer()
        }
      ],
      logger: config?.logger ?? new NoOpLogger(),
      protocol: config?.protocol ?? AwsRestJsonProtocol,
      protocolSettings: config?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.bedrockagentcore",
        errorTypeRegistries: errorTypeRegistries2,
        version: "2024-02-28",
        serviceTarget: "AmazonBedrockAgentCore"
      },
      sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
      serviceId: config?.serviceId ?? "Bedrock AgentCore",
      urlParser: config?.urlParser ?? parseUrl,
      utf8Decoder: config?.utf8Decoder ?? fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? toUtf8
    };
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.browser.js
  var getRuntimeConfig4 = (config) => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig3(config);
    return {
      ...clientSharedValues,
      ...config,
      runtime: "browser",
      defaultsMode,
      bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
      credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
      eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider2,
      maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
      region: config?.region ?? invalidProvider("Region is missing"),
      requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
      sha256: config?.sha256 ?? Sha2563,
      streamCollector: config?.streamCollector ?? streamCollector2,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
      useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    };
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration2 = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig2 = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeExtensions.js
  var resolveRuntimeExtensions2 = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration2(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig2(extensionConfiguration));
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/BedrockAgentCoreClient.js
  var BedrockAgentCoreClient = class extends Client {
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig4(configuration || {});
      super(_config_0);
      __publicField(this, "config");
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters2(_config_0);
      const _config_2 = resolveUserAgentConfig(_config_1);
      const _config_3 = resolveRetryConfig(_config_2);
      const _config_4 = resolveRegionConfig(_config_3);
      const _config_5 = resolveHostHeaderConfig(_config_4);
      const _config_6 = resolveEndpointConfig(_config_5);
      const _config_7 = resolveEventStreamSerdeConfig(_config_6);
      const _config_8 = resolveHttpAuthSchemeConfig2(_config_7);
      const _config_9 = resolveRuntimeExtensions2(_config_8, configuration?.extensions || []);
      this.config = _config_9;
      this.middlewareStack.use(getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(getUserAgentPlugin(this.config));
      this.middlewareStack.use(getRetryPlugin(this.config));
      this.middlewareStack.use(getContentLengthPlugin(this.config));
      this.middlewareStack.use(getHostHeaderPlugin(this.config));
      this.middlewareStack.use(getLoggerPlugin(this.config));
      this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        })
      }));
      this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };

  // node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/commands/InvokeAgentRuntimeCommand.js
  init_index_browser();
  var InvokeAgentRuntimeCommand = class extends Command.classBuilder().ep(commonParams2).m(function(Command2, cs, config, o) {
    return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
  }).s("AmazonBedrockAgentCore", "InvokeAgentRuntime", {}).n("BedrockAgentCoreClient", "InvokeAgentRuntimeCommand").sc(InvokeAgentRuntime$).build() {
  };

  // src/agent-client.js
  var CONFIG = null;
  var TOKEN = null;
  var AGENT_CLIENT = null;
  function configure(cfg) {
    CONFIG = cfg;
  }
  async function signIn(username, password) {
    if (!CONFIG) throw new Error("call configure() first");
    if (!username || !password) throw new Error("username and password required");
    const cog = new CognitoIdentityProviderClient({ region: CONFIG.region });
    const res = await cog.send(
      new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: CONFIG.cognitoClientId,
        AuthParameters: { USERNAME: username, PASSWORD: password }
      })
    );
    TOKEN = res.AuthenticationResult?.AccessToken;
    if (!TOKEN) throw new Error("no token from Cognito");
    AGENT_CLIENT = new BedrockAgentCoreClient({
      region: CONFIG.region,
      // No sigv4 creds; we pass a bearer token instead.
      credentials: { accessKeyId: "anon", secretAccessKey: "anon" }
    });
    return true;
  }
  function isSignedIn() {
    return !!TOKEN;
  }
  function signOut() {
    TOKEN = null;
    AGENT_CLIENT = null;
  }
  function padSession(s) {
    if (!s) s = "rs-" + Math.random().toString(36).slice(2);
    while (s.length < 33) s += "0";
    return s.slice(0, 64);
  }
  async function invoke(message, sessionId) {
    if (!TOKEN) throw new Error("not signed in");
    const cmd = new InvokeAgentRuntimeCommand({
      agentRuntimeArn: CONFIG.agentRuntimeArn,
      runtimeSessionId: padSession(sessionId),
      payload: new TextEncoder().encode(JSON.stringify({ message })),
      contentType: "application/json",
      accept: "application/json"
    });
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
  return __toCommonJS(agent_client_exports);
})();
