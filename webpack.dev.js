const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  // It enhances our debugging process
  // Its use to display our original JavaScript while debugging, which is a lot easier to look at than a minified code.
  devtool: "cheap-module-eval-source-map",
});
