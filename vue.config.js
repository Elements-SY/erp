// vue.config link: https://cli.vuejs.org/zh/config/#vue-config-js
// 对于vue.config配置请参考该vue脚手架官方使用的webpack、http中间件、babel、eslint版本
module.exports = {
  publicPath: '/', // 默认公共路径'/'
  outputDir: 'dist', // 默认输出文件夹 'dist'
  assetsDir: 'assets', // 打包静态资源输出的目录,
  indexPath: 'index.html', // 指定生成的index.html 默认'index.html'，本人认为其实就是html-webpack-plugin的配置
  filenameHashing: true, // 是否对index.html文件中引入的静态资源做hash缓存。
  pages: {
    index: {
      entry: 'src/main.js',// page 的打包入口文件 
      template: 'public/index.html',// 模板来源   
      filename: 'index.html',// 在 dist/index.html 的输出
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: false,
  runtimeCompiler: false,
  // productionSourceMap: true, // 打包后的静态文件是否需要生产source map 文件,优先级最高
  css: {
    // 是否使用css分离插件 ExtractTextPlugin,如果不分离将会把css打包于js文件中
    extract: true,
    // 开启 CSS source maps? 优先级低于productionSourceMap: true
    sourceMap: false,
    loaderOptions: {
      css: { // https://www.webpackjs.com/loaders/css-loader/#modules
        // 启用/禁用 CSS 模块
        modules: false, // https://www.webpackjs.com/loaders/css-loader/#%E9%80%89%E9%A1%B9
      },
      // postcss: {
      //   // 这里的选项会传递给 postcss-loader
      // }
    },
    requireModuleExtension: true
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    },
  },
  // support all api; link: https://www.webpackjs.com/configuration/dev-server/
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'https://api.6vzz.com/',
        pathRewrite: {
          '^/dev-api': '/'
        },
        changeOrigin: true,
        secure: true,
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    host: "localhost",
    port: "8080",
    hotOnly: true,
    overlay: true,
  }
}