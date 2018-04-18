var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    mode: "development",
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/build/index.html',
            template: __dirname + '/app/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new webpack.DefinePlugin({
            'process.evn':{
                NODE_EVN:JSON.stringify("production")
            }
        })
    ],

    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader? limit = 24400'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devServer: {
        hot: false,
        host: '0.0.0.0',
        contentBase: path.join(__dirname, './build'),
        //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8089,//设置默认监听端口，如果省略，默认为"8080"

    }
};

