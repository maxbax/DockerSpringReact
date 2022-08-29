const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, './build/');

const isProduction = process.env.NODE_ENV === 'production';

// only for windows executions
global.process.getuid = () => (0);

module.exports = {
  entry: path.resolve(__dirname, 'app/src/main.jsx'),
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  optimization: {
    minimize: isProduction,
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'inline-source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'app/'),
          from: 'index.html',
          to: buildPath,
        },
        {
          context: path.resolve(__dirname, 'app/'),
          from: 'favicon.ico',
          to: buildPath,
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      stream: false,
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|ttf|eot|svg|woff2?)$/,
        use: 'url-loader?name=[name].[ext]',
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'app'),
    compress: isProduction,
    historyApiFallback: true,
    proxy: [{
      context: [
        '/msgs',
      ],
      target: 'http://localhost:8080',
    }],
    port: 8081,
  },
};
