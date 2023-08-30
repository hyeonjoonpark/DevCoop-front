FROM node:18

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .


EXPOSE 7000

CMD ["yarn", "start"]
