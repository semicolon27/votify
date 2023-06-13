FROM node:18

WORKDIR /app

COPY package.json .

RUN npm i --force

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]