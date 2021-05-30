FROM node:15-alpine AS development

WORKDIR /app

ENV PORT=3000

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
