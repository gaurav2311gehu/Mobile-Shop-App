FROM node:20

# Working directory 
WORKDIR /app

# Package files 
COPY package*.json  ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]
