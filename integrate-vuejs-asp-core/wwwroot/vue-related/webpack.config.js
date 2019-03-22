var path = require('path');

module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.vue$/,
            use: 'vue-loader'
          }
        ]
      },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };