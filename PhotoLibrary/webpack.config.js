var path = require('path');
var webpack = require('webpack');
// var es3ifyPlugin = require('es3ify-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');
  hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
 entry:[
 'babel-polyfill',
'webpack/hot/dev-server',
 'webpack-dev-server/client?http://localhost:8085',
 path.resolve(__dirname, './app/main.js'),
 hotMiddlewareScript
],
 output:{
     path:path.resolve(__dirname, 'build'),
     filename:'bundle.js',
     publicPath:'/'
 },
 devServer:{
     contentBase: './build',
     historyApiFallBack:true,
     hot:true,
     inline:true,
    progress:true
 },
 devtool :'source-map',
 module:{
    loaders:[
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'app'),
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url?limit=25000' 
    }]
},
babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: 'css'
        }]]
    },
plugins: [
       new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    // new es3ifyPlugin(),
    ],

};