FROM node:12.4-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "run", "dev"]