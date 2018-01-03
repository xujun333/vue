const path = require('path');
const webpack = require('webpack');
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),  // 入口，表示，要使用 webpack 打包哪个文件
    // 输出文件相关的配置
    output: {
        path: path.join(__dirname, './dist'),  // 指定 打包好的文件，输出到哪个目录中去
        filename: 'build.js'  // 这是指定 输出的文件的名称
    },
    // 配置webpack的第二种方式
    // devServer: {
    //     open: true,  // 自动打开浏览器
    //     port: 5555,  // 设置启动时候的运行端口
    //     contentBase: 'src',  // 指定托管的根目录
    //     hot: true  // 启用热更新
    // },
    // 配置插件的节点
    plugins: [
        //new 一个热更新的 模块对象
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个在内存中生成 HTML页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面名称
            filename: 'index.html'
        })
    ],
    // 配置第三方加载器 loader
    module: {
        // 所有的第三方模块的匹配规则
        rules: [
            {
                // 配置处理 .css 文件的第三方 loader 模块
                test: /\.css$/,
                use: ['style-loader', 'css-loader']  
            },
            {
                // 配置处理 .less 文件的第三方 loader 模块
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']  
            },
            {
                // 配置处理 .scss 文件的第三方 loader 模块
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']  
            },
            {
                // 配置处理 图片路径的 loader
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                // limit 给定的值，是图片的大小，单位是 byte， 
                // 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串，
                // 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
                // &name=[name].[ext] 保留文件的原名称
                // &[hash:8]-name=[name].[ext] , 为了防止文件冲突，可以在文件名前加 hash
                use: ['url-loader?limit=5000&[hash:8]-name=[name].[ext]']  
            },
            {
                // 配置处理 图片路径的 loader
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                // limit 给定的值，是图片的大小，单位是 byte， 
                // 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串，
                // 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
                // &name=[name].[ext] 保留文件的原名称
                // &[hash:8]-name=[name].[ext] , 为了防止文件冲突，可以在文件名前加 hash
                use: ['url-loader']  
            },
            {
                // 配置 Babel 来转换高级的ES语法
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                // 处理 .vue 文件的 loader
                test: /\.vue$/,
                use: 'vue-loader'
            } 
        ]
    },
    resolve: {
        alias: {  // 修改 vue 被导入时包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}
