const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: "toolazy-react-theme",   // Important
    libraryTarget: 'umd',   // Important
    umdNamedDefine: true   // Important
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Configs babel here instead create a new babel.config.json file
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleaning up the /dist folder, only files generated from the build and no more old files in /dist
  ],
  externals: {
    // Excluding dependencies from the output bundles. The dependencies that should be 
    // existing in the project are using the bundle file.
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    }
  },
  // Because you have been excluded these dependencies in the bundle file, but you need
  // to tell Webpack use these dependencies on the project which are using this bundle.
  // This config for doing that.
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      ReactDOM: path.resolve('./node_modules/react-dom'),
      PropTypes: path.resolve('./node_modules/prop-types'),
    }
  }
};