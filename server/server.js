const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware');
const webpack = require('webpack');
const config = require('../configs/webpack.config.dev');

const app = express();
const compiler = webpack(config);
const DEV_SERVER_PORT = 8086;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(proxy('/main', {
    target: 'http://172.16.10.26:22222',
    changeOrigin: true,

}));
app.use(proxy('/code', {
    target: 'http://172.16.10.19:10011',
    changeOrigin: true,
    pathRewrite: {
        "^/code": "/"
    },
}));

app.listen(DEV_SERVER_PORT, () => {
    console.log(`Server is listening at port ${DEV_SERVER_PORT}`);
});
