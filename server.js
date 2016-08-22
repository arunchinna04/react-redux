/* eslint */
var isDev = (process.env.NODE_ENV !== 'production');
var webpack = require('webpack');
var express = require('express');
var path = require('path');
var app = express();
/*welcome*/
  var config = require('./webpack.config');
  var compiler = webpack(config);

  require('./mockServer');
  app.use('/app', express.static(__dirname + '/app'));
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(3005, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at localhost:3005');
  });

