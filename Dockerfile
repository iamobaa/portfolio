# FROM node:16.19.0 As development
# WORKDIR /usr/src/obaa_io
# COPY package*.json ./
# RUN npm install --only=development
# COPY . .
# # RUN npm run build


# FROM node:16.19-alpine as production
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /usr/src/obaa_io
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# COPY --from=development /usr/src/obaa_io/dist ./dist
# CMD ["node", "dist/main"]


FROM node:18-alpine
WORKDIR /usr/src/obaa_io
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "bin/www"]