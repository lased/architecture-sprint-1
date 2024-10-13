FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN yarn install

CMD npm run dev

EXPOSE 3000