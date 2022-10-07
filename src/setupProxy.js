const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://austin-johnson-portfolio.vercel.app/',
      changeOrigin: true,
    })
  );
};