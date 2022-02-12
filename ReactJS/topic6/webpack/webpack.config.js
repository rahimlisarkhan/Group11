const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setting = {
    entry: './src/index.js',
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
      ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    devServer: {
        static: './build',
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
  }


module.exports = setting ;