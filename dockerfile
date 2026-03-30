#STAGE 1 : BUILD ------
FROM node:18-alpine As build

WORKDIR  /app

COPY package*.json ./
RUN npm install

COPY . .

# STAGE 2: PRODUCTION -------



FROM node:18-alpine

WORKDIR /app

COPY   package*.json ./
RUN  npm install --production