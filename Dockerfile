FROM node:6.9-alpine
WORKDIR /opt/slackbot
ADD package.json .
RUN npm install
ADD webpack.config.js .
ADD src/ ./src/
RUN npm test
RUN npm run build
CMD node --optimize_for_size target/slackbot/main.js
