FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN yarn install

CMD yarn start

EXPOSE 3000