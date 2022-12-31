const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const http = require('http');

const server = http.createServer((req, res) => {
  // Your code here
});

server.listen(4000);
