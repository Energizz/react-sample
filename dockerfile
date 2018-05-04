# Dockefile
# build environment
FROM node:latest as builder

ARG CONSUMER_KEY
ARG CONSUMER_SECRET
ENV CONSUMER_KEY ${CONSUMER_KEY}
ENV CONSUMER_SECRET ${CONSUMER_SECRET}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --silent

#RUN npm install react-scripts@1.1.1 -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]