const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  devtool: 'source-map',

  output: {
    //path.join(__dirname, 'docs')
    path: path.join(__dirname, 'docs'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { 
          //presets: [ 'es2015' ] 
          
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "browsers": [
                      ">0.25%",
                      "not ie 11",
                      "not op_mini all"
                    ]
                  }
                }
              ],
              "@babel/preset-react"
            ],
            "plugins": [
              "@babel/plugin-transform-runtime"
            ]
          
      },
      },
      {
        test: /.scss$/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      d3: 'd3',
    }),
  ],

  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],

  postcss () {
    return [autoprefixer];
  },
};