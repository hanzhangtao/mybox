const path = require('path') // node内置模块(操作路径信息)
const HtmlPlugin = require('html-webpack-plugin') // 打包生成html

/*
得到指定目录的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
    // 入口
    entry: './src/main.js',//多入口文件写为对象的方式
    // entry: './src/landing.js',
    // 出口
    output: {
      path: resolve('dist'), // 所有打包生成文件的基础目录
      filename: 'bundle.js'
    },
    // 模块加载器
    module: {
      rules: [
        // 加载css
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'less-loader']  // style(css(less('xxx.less')))
        },
        //加载less
        {
         test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'] 

        },
        // 加载img
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: 'file-loader'
        },
      ]
    },
    // 插件
    plugins: [
      new HtmlPlugin({
        template: 'index.html', // 在执行命令所在目录查找
        filename: 'index.html', // 在output.path指定的输出目录中生成
        inject: true // 向页面中自动引入打包生成的css
      }),
      // new HtmlPlugin({
      //   template: 'landing.html', // 在执行命令所在目录查找
      //   filename: 'landing.html', // 在output.path指定的输出目录中生成
      //   inject: true // 向页面中自动引入打包生成的css
      // })
    ]
  }

