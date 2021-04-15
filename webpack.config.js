const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }],
            '@babel/react',
          ],
        },
      },
      // Returns URL to image that can then be accessed in the browser.
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // Copies over fonts to dist so they can be accessed in the browser.
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'fonts/*',
          to: '.',
        },
      ],
    }),
  ],
  // Open the page in the browser while developing.
  devServer: {
    open: true,
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    // Use Browser-compatible alternatives for native node packages.
    alias: {
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
  },
  // Disable size warnings.
  performance: {
    hints: false,
  },
})
