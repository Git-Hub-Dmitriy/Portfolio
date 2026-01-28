const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = (env) => {
  const isDev = env.mode === "development";

  return {
    mode: env.mode ?? "development",

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    watch: true,

    entry: path.resolve(__dirname, "index.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "main.[contenthash].js",
      clean: true,
    },

    optimization: {
      runtimeChunk: "single",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve(__dirname, "public", "Group.ico"),
      }),
      isDev ? new webpack.ProgressPlugin() : undefined,
      new MiniCssExtractPlugin({
        filename: "css/main.[contenthash].css",
        chunkFilename: "css/main.[contenthash].css",
      }),
      !isDev
        ? new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "public/locales"),
                to: path.resolve(__dirname, "build/locales"),
              },
              {
                from: path.resolve(__dirname, "public/images"),
                to: path.resolve(__dirname, "build/images"),
              },
            ],
          })
        : undefined,
      !isDev
        ? new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        : undefined,
      new CaseSensitivePathsPlugin(),
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        include: /dir/,
        failOnError: false,
        allowAsyncCycles: false,
      }),
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]",
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                api: "modern-compiler",
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        },
      ],
    },

    resolve: {
      extensions: [".jsx", ".js"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@forms": path.resolve(__dirname, "src/components/forms"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@data": path.resolve(__dirname, "src/data"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },

    devtool: isDev ? "eval-cheap-module-source-map" : "inline-source-map",

    devServer: isDev
      ? {
          watchFiles: path.resolve(__dirname, "src"),
          port: isDev ? env.port : undefined,
          open: true,
          historyApiFallback: true,
          hot: true,
        }
      : undefined,
  };
};
