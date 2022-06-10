// const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      '/ajax.sword': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true, // 设置是否将host更换为代理url
        secure: false,
        pathRewrite: {
          //重写url路径
          // '^/api': '/ajax.sword' //需要代理的路径
        }
      }
    }
  },
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? 'qjweb/dist/' : '/',

  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',

  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,

  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
  productionSourceMap: false,

  lintOnSave: false,

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
  },
  pluginOptions : { 
    lintStyleOnBuild : true , 
    stylelint : { 
      fix : true ,  // boolean (default: true) 
      files : ['src/**/*.{vue,htm,html,css,sss,less,scss}'] ,  // string | [string] (默认: ['src/**/*.{vue,htm,html,css,sss,less,scss}']) 
    },
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/common/commonStyle/variable.less')
      ]
    }
  } 
};
