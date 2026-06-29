FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./backend/

WORKDIR /app/backend

RUN npm install --production

WORKDIR /app

COPY . .

EXPOSE 5000

CMD ["node", "backend/server.js"]
