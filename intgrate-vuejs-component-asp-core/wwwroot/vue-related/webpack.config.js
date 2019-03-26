var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
      plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
      ],
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };