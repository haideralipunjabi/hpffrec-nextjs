// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const cache = require("./cache")

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        runtimeCaching: cache
      },
    },
  ],
]);