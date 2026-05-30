FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4013

CMD ["node", "app.js"]
