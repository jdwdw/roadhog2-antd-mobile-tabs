require('dotenv').config();
const path = require('path');

const prod = process.env.ENV === 'prod';
// publicPath must use '/' end

console.log('----------------------------------------');
console.log('正式环境?', prod);
console.log('baseAPI', prod ? '//api.mengtuiapp.com' : '//sx.api.mengtuiapp.com');
console.log('----------------------------------------');

export default {
  hash: true,
  disableCSSModules: false,
  ignoreMomentLocale: true,
  entry: 'src/index.js',
  html: {
    template: './src/index.ejs',
    inject: false,
  },
  // autoprefixer: {
  //   browsers: ['iOS >= 8', 'Android >= 4'],
  // },
  browserslist: ['iOS >= 8', 'Android >= 4'],
  // 在构建和执行阶段都可以获取 defined vars，比如在 index.ejs 中就可以获取 PUBLIC_PATH 和 NSLOG_CDN
  define: {},
  extraBabelPlugins: [
    'lodash',
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
  env: {
    development: {
      multipage: true,
      // 默认开发环境为 '/'
      publicPath: '/',
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
      multipage: true,
      publicPath: '/',
    },
  },
  commons: [
    {
      async: '__common',
      children: true,
      minChunks: 2,
    },
  ],
  outputPath: path.resolve(__dirname, 'dist'),
};
