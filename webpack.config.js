var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // 入口文件配置
    entry: "./src/main.js",

    // 出口文件配置项
    output: {
        // 输出的路径，通常到绝对路径
        path: path.join(__dirname, 'dist'),
        // 注意使用webpack-html：需要注释掉publicPath，不然会冲突
        // publicPath: '/dist',
        // 输出文件名字
        filename: "bundle.js"
    },
    module: {
        rules: [
            // 配置的是用来解析.css文件的loader(style-loader和css-loader)
            {
                // 1.0 用正则匹配当前访问的文件的后缀名是  .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // node_modules下面的.js文件会被排除
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
            title: 'hello nima'
        })
    ]
}