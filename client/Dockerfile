# Эти настройки для девелопер сервера

FROM node:14.3 as web-build

# Setting the working directory as /app
ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Copying package.json to Docker Image
COPY package.json yarn.lock ./

# Installing all dependencies
RUN yarn

COPY . ./

