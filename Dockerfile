FROM node:14

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5000

EXPOSE 5000

CMD ["npm", "run", "dev"]