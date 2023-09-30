const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "",  // URL de tu API
            changeOrigin: true,
        })
    );
};
