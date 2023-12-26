ARG NODE_V=18-bookworm

FROM node:${NODE_V} as builder
RUN apt-get update && \
    apt-get install -y tini && \
    npm install pnpm --global && \
    pnpm config set store-dir /root/.pnpm-store

#FROM builder as server-dependencies
WORKDIR /planka/server

COPY server/package.json server/pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    --mount=type=cache,id=node-gyp,target=/root/.cache/node-gyp \
    pnpm install --frozen-lockfile --prod
COPY server .

#FROM builder as client
WORKDIR /planka/client

COPY client/package.json client/pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    --mount=type=cache,id=node-gyp,target=/root/.cache/node-gyp \
    pnpm install --frozen-lockfile --prod
COPY client .

RUN DISABLE_ESLINT_PLUGIN=true pnpm run build

FROM builder AS intermediate
WORKDIR /app

COPY --from=builder /planka/server .
COPY --from=builder /planka/client/build public
COPY --from=builder /planka/client/build/index.html views/index.ejs
COPY docker-entrypoint.sh /usr/local/bin/
RUN mv .env.sample .env
RUN cp /usr/bin/tini /usr/local/bin/tini \
    && cp /usr/local/bin/docker-entrypoint.sh /app/

FROM node:${NODE_V}-slim AS final
ARG USER=planka
RUN useradd --no-create-home --shell /bin/bash $USER
USER $USER

WORKDIR /app
COPY --from=intermediate --chown=$USER:$USER /usr/local/bin/tini /usr/local/bin/docker-entrypoint.sh /usr/local/bin/
COPY --from=intermediate --chown=$USER:$USER /app .

VOLUME /app/public/user-avatars
VOLUME /app/public/project-background-images
VOLUME /app/private/attachments

EXPOSE 1337/tcp

# Use Tini to start Planka and shutdown gracefully:
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
ENTRYPOINT ["tini", "--"]

CMD ["docker-entrypoint.sh"]
