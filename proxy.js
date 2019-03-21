const proxy = require('http-proxy-middleware');

const authApi = 'your-authApi-address';
const commonApi = 'your-commonApi-address';

module.exports = app => {
  app.use('/api/auth', proxy({
    target: authApi,
    changeOrigin: true,
    pathRewrite: {
      '/api/auth': '/auth'
    },
    secure: false,
  }));

  app.use('/api/common', proxy({
    target: commonApi,
    changeOrigin: true,
    pathRewrite: {
      '/api/common': '/api'
    },
    secure: false,
  }));
};
