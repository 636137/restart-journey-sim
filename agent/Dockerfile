FROM public.ecr.aws/docker/library/python:3.12-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

COPY requirements-runtime.txt ./
RUN pip install -r requirements-runtime.txt

COPY agentcore_app.py tools.py state.py ./

EXPOSE 8080
CMD ["python", "agentcore_app.py"]
