FROM node:14

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5000
ENV DB_NAME="test"
ENV DB_USER="grigor"
ENV DB_PASSWORD="YGJEQR41dHSN77y5"

EXPOSE 5000

CMD ["npm", "run", "dev"]