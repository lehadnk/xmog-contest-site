FROM node:18-bullseye
#FROM node:21.7.1-bullseye-slim
RUN npm install -g serve
WORKDIR /usr/src/app
