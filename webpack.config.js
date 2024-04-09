// webpack.config.js

module.exports = {
    // Other webpack configuration options...
  
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "zlib": require.resolve("browserify-zlib")
      }
    }
  };