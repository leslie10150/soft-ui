const path = require("path")
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  devServer: {
    port: 8000
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "~": resolve("examples"),
        packages: resolve("packages")
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("./build/md-loader/index.js")
      .loader("./build/md-loader/index.js")
  }
}
