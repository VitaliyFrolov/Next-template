FROM node:19-alpine

WORKDIR /web-app

COPY ./package*.json .
RUN yarn install 

EXPOSE 3000
CMD ["yarn", "run", "dev"]