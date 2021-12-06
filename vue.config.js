// vue.config.js
const fs = require('fs');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
const join = path.join
function getEntries(path) {
    let files = fs.readdirSync(resolve(path));
    console.log('files', files)
    const entries = files.reduce((ret, item) => {
        const itemPath = join(path, item)
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            ret[item] = resolve(join(itemPath, 'index'))
        } else {
            const [name] = item.split('.')
            ret[name] = resolve(`${itemPath}`)
        }
        console.log('ret', ret)
        return ret
    }, {})
  return entries
}

//开发环境配置
const devConfig = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    open: true,
    proxy: {
      '/devServer': {
        target: 'http://nutui-server.jd.com',
        changeOrigin: true,
        pathRewrite: {
          '^/devServer': ''
        }
      }
    }
  },

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      //   prependData: {
      //     // @/ 是 src/ 的别名
      //     // 所以这里假设你有 `src/variables.sass` 这个文件
      //     // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //     additionalData: `@import "~@/styles/variables.sass"`,
      //   },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/styles/variables.scss";@import "~@/sites/assets/styles/variables.scss";`
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            // 配置使用 autoprefixer
            // browsers: ['last 20 versions'],
            overrideBrowserslist: ['last 20 versions'] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
          })
        ]
      },
    }
  },
  pages: {
    doc: {
      entry: 'src/sites/doc/main.ts',
      template: 'src/sites/doc/index.html',
      filename: 'index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '1NutUI 大促场景组件',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'doc']
    },
    mobile: {
      entry: 'src/sites/mobile/main.ts',
      template: 'src/sites/mobile/index.html',
      filename: 'demo.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'NutUI-Cat',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    }
  },
  configureWebpack: {
    // resolve: {
    //     extensions: ['.js', '.vue', '.json'],
    //     alias: {
    //         '@': resolve('packages'),
    //         'assets': resolve('src/assets'),
    //         'views': resolve('src/views'),
    //     }
    // },
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        automaticNameDelimiter: '_'
      }
    }
  },
  chainWebpack: config => {
    config.module
    .rule('md-vue')
    .test(/\.md$/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use(path.resolve(__dirname, './loader/md-vue/index.js'))
    .loader(path.resolve(__dirname, './loader/md-vue/index.js'))
    .end();

    config.module
    // .rule('js')
    // .include.add(path.resolve(__dirname,'packages')).end()
    // .use('babel')
    // .loader('babel-loader')
    // .tap(options => {
    //   // 修改它的选项...
    //   return options
    // })
    .rule('js')
    .include
    .add('/packages')
    .end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
        return options
    })
  },
  
}
//生成环境配置
const buildConfig = {
  publicPath: './',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      //   prependData: {
      //     // @/ 是 src/ 的别名
      //     // 所以这里假设你有 `src/variables.sass` 这个文件
      //     // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //     additionalData: `@import "~@/styles/variables.sass"`,
      //   },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/styles/variables.scss";@import "~@/sites/assets/styles/variables.scss";`
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            // 配置使用 autoprefixer
            // browsers: ['last 20 versions'],
            overrideBrowserslist: ['last 20 versions'] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
          })
        ]
      },
    },
    sourceMap: true,
    extract: {
        filename: 'style/[name].css',
        // filename: '[name]/style.css'
    }
  },
  configureWebpack: {
    entry: {
        ...getEntries('./src/packages'),
        // 'content': './src/contentjs/content.js', 
    },
    output: {
        filename: '[name]/index.js',
        libraryTarget: 'commonjs2',
    },
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        automaticNameDelimiter: '_'
      }
    }
  },
  chainWebpack: config => {
      config.module
          .rule('md-vue')
          .test(/\.md$/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use(path.resolve(__dirname, './loader/md-vue/index.js'))
          .loader(path.resolve(__dirname, './loader/md-vue/index.js'))
          .end();

        config.module  
          .rule('js')
          .include
          .add('/packages')
          .end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              return options
          })
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')

      config.module
          .rule('fonts')
          .use('url-loader')
          .tap(option => {
              option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
              return option
          })
  },
  outputDir: 'lib',
  productionSourceMap: false,
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;
