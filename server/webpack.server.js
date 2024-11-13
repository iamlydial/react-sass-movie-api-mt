import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: "node",
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    libraryTarget: 'umd',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.sass$/, 
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader", 
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".sass"],
  },
  mode: "development",
  watch: true,
};
