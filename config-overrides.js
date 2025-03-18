const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    fallback: {
      "fs": require.resolve("browserify-fs"),
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/")
    }
  })
);