FROM node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install express --save
EXPOSE 3000
ENTRYPOINT ["node"]

