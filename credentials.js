const path = require('path');
const fs = require('fs');

// 引入秘钥
const privateKey = fs.readFileSync(path.resolve(__dirname, './certificate/example.com+3-key.pem'), 'utf8');
// 引入公钥
const certificate = fs.readFileSync(path.resolve(__dirname, './certificate/example.com+3.pem'), 'utf8');

module.exports = {
  key: privateKey,
  cert: certificate
};
