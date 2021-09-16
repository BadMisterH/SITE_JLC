// const path = require("path");

// module.exports = {
//   output: {
//     filename: "my-first-webpack.bundle.js",
//   },
//   module: {
//     rules: [{ test: /\.svg$/, use: "raw-loader" }],
//   },
//   loaders: [{ test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "file-loader" }],
// };

// const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const webpack = require("webpack"); //to access built-in plugins

// module.exports = {
//   module: {
//     rules: [{ test: /\.txt$/, use: "raw-loader" }],
//   },
//   plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
// };

// (module.exports = {
//   mode: "production",
// }),
//   (module = {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader",
//       },
//       {
//         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//         loader: "url-loader?limit=100000",
//       },
//     ],
//   });

// const path = require("path");

// module.exports = {
//   // the entry file for the bundle
//   entry: path.join(__dirname, "/client/src/app.jsx"),

//   // the bundle file we will get in the result
//   output: {
//     path: path.join(__dirname, "/client/dist/js"),
//     filename: "app.js",
//   },

//   module: {
//     // apply loaders to files that meet given conditions
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         include: path.join(__dirname, "/client/src"),
//         loader: "babel-loader",
//         query: {
//           presets: ["react", "es2015", "stage-1"],
//         },
//       },
//     ],
//   },

//   // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
//   watch: true,
// };

const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              limit: 8192,
            },
            images: {
              loader: "imgix",
              path: "https://example.com/myaccount/",
            },
          },
        ],
      },
    ],
  },

  babel: {
    presets: [["@babel/preset-env"]],
    plugins: ["@babel/plugin-transform-runtime"],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            "react-html-attrs",
            "transform-class-properties",
            "transform-decorators-legacy",
          ],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false",
        ],
      },
    ],
  },
};
