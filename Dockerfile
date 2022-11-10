FROM node:16.15-alpine3.16 AS builder

WORKDIR /app
COPY . ./
RUN yarn install && yarn build
# build and remove dev dependencies from node_modules
RUN yarn install --production


FROM node
WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
ADD . /app

EXPOSE 3000
CMD ["npm", "run", "start"]