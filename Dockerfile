FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

RUN git clone https://github.com/engarnietemp/project-3.git . || (echo "Error: impossible to clone the repo" && exit 1)

RUN npm install

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]