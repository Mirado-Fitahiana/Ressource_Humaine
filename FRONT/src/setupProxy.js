const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/insert-tache',
    createProxyMiddleware({
      target: 'http://localhost:8000/insert-tache',
      changeOrigin: true,
    })
  );
};
