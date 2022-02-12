const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setting = {
    entry: {
        index: './src/index.js',
      },
    mode: 'production',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    devServer: {
        static: './build',
      },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Bu yeni htmldir',
        }),
      ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
}


module.exports = setting