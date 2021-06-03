FROM node:14.17.0-alpine3.13

WORKDIR /app

COPY ./package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

RUN yarn build

CMD [ "yarn", "start" ]
