const express = require('express');
const http = require('http');

const app = express();
const PORT = 7088; // 写个合理的值就好
const httpServer = http.createServer(app);

app.get('/', function (req, res) {
  res.send('hello world');
});

httpServer.listen(PORT, function () {
  console.log('HTTPS Server is running on: http://localhost:%s', PORT);
});