FROM node:20.18.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
