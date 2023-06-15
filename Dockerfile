FROM node:18-alpine
WORKDIR /usr/src/obaa_io
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "bin/www"]