const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Ensure .jsx files are handled
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // ES6+ support
              '@babel/preset-react', // React support
            ],
          },
        },
      },
      {
        test: /\.sass$/, // Handle SASS files
        use: [
          'style-loader',  // Inject CSS into the DOM
          'css-loader',    // Resolve CSS imports
          'sass-loader',   // Compile SASS to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ensure this is correctly set
    }),
    new CleanWebpackPlugin(),
  ],
};
