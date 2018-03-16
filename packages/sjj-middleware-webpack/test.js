const DevServer = require('webpack-dev-server');
const config = require('./dev.config');
const webpack = require('webpack');

const compiler = webpack(config);

const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
});

const server = new DevServer(compiler, devServerOptions);

server.listen(config.devServer.port, config.devServer.host, () => {
  console.log('Starting server on http://localhost:8080');
});
