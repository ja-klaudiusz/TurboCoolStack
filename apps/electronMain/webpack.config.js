const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    "main/index": path.resolve(__dirname, "src/main/index.ts"),
    "preload/index": path.resolve(__dirname, "src/preload/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "electron-main",
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/resources"),
          to: path.resolve(__dirname, "dist/resources"),
        },
      ],
    }),
  ],
};
