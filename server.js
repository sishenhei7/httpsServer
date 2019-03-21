const express = require('express');
const https = require('https');
const setProxy = require('./proxy');
const credentials = require('./credentials');

const app = express();
const SSLPORT = 7081; // 写个合理的值就好
const httpsServer = https.createServer(credentials, app);

app.use('/', express.static('../dist'));

setProxy(app);

httpsServer.listen(SSLPORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});