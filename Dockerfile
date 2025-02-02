FROM node:18-alpine as server-dependencies

RUN apk -U upgrade \
  && apk add build-base python3 tini \
  --no-cache

WORKDIR /app

COPY server/package.json server/package-lock.json ./

RUN npm install npm@latest --global \
  && npm install pnpm --global \
  && pnpm import \
  && pnpm install --prod

FROM node:18-bookworm AS client

WORKDIR /app

COPY client/package.json client/package-lock.json ./

RUN npm install npm@latest --global \
  && npm install pnpm --global \
  && pnpm import \
  && pnpm install --prod

COPY client .
RUN DISABLE_ESLINT_PLUGIN=true npm run build

FROM node:18-alpine AS final

RUN apk -U upgrade \
  && apk add bash \
  --no-cache

USER node
WORKDIR /app

COPY --chown=node:node docker-entrypoint.sh .
COPY --chown=node:node start.sh .
COPY --chown=node:node server .

RUN mv .env.sample .env

COPY --from=server-dependencies --chown=node:node /app/node_modules node_modules
COPY --from=server-dependencies --chown=node:node /sbin/tini /sbin/tini

COPY --from=client --chown=node:node /app/build public
COPY --from=client --chown=node:node /app/build/index.html views/index.ejs

VOLUME /app/public/user-avatars
VOLUME /app/public/project-background-images
VOLUME /app/private/attachments

EXPOSE 1337

# Use Tini to start Planka and shutdown gracefully:
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["./docker-entrypoint.sh"]
