FROM node:20-alpine AS module_builder

WORKDIR /app

# install dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

# copy source and build to ./dist
COPY ./frontend/ .

RUN ls -R /app/src/components

RUN npm run build
