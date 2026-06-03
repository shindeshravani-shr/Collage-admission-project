FROM node:18

WORKDIR /app

COPY . .

RUN cd backend && npm install

EXPOSE 5000

CMD ["node", "backend/server.js"]
