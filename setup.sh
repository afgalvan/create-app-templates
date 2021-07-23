#!/bin/bash

package_manager="$1"
# "$package_manager" install --silent

if [ "$package_manager" == "npm" ]; then
    echo "FROM node:14.17.0-alpine3.13

WORKDIR /app

# Add package.lock.json file
COPY ./package.json ./

RUN npm install

COPY . .

RUN npm build

CMD [ \"npm\", \"start\" ]" > Dockerfile
fi

rm -f setup.sh
