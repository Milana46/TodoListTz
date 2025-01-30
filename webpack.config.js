const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_DIRECTORY = __dirname
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src')


const config = {
  entry: [path.resolve(__dirname, 'src/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, 'index.html')
    })
  ],
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: path.join(__dirname, 'build'),
  //   port: 8080
  // }
}

module.exports = config