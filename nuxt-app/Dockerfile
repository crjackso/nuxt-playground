ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine3.16 as base

RUN apk update

ENV APP_ROOT /app
ENV HOST 0.0.0.0

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

ENV PATH=/node_modules/.bin:$PATH

RUN yarn install --modules-folder /node_modules
