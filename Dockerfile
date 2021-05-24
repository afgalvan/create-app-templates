FROM node:12.16.3-slim

WORKDIR /app

COPY package.json yarn.lock ./app/

RUN yarn
