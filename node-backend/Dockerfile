
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV MONGODB_CONNECTION_STRING=mongodb://host.docker.internal:27017/notes
ENV APP_SECRET=youknownothingjohnsnow
COPY . .
RUN npm run build
EXPOSE 8081
RUN pwd
CMD ["node","./dist/server.js"]