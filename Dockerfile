# https://depot.dev/docs/languages/node-pnpm-dockerfile

FROM node:20-slim AS base

ARG REDIS_URL

ENV NODE_ENV production
ENV REDIS_URL ${REDIS_URL}
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

FROM base AS prod-deps
  
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --prod

FROM base AS build
 
RUN corepack enable

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build
 
FROM base
 
WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD node ./dist/server/entry.mjs