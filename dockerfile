FROM node:18

WORKDIR /app

COPY . .

RUN npm i

# This is needed if we will use docker desktop
EXPOSE 3000 

CMD [ "node", "app.js" ]