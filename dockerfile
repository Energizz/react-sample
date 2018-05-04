# Dockefile
FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 8080

ENV NODE_ENV=production

CMD ["npm", "start"]