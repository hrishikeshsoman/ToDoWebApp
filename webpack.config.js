var webpack = require('webpack');

module.exports = {
  entry : {
    main: './src/main.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.scss$/,
        loader: 'style!css?modules!sass'
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
	],
}

// console.log('Process', process.env.NODE_ENV);
