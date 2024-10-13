FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN yarn install & yarn run build

CMD yarn run serve

EXPOSE 3001