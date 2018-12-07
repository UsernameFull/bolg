const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//解析公共css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//引入webpack模块，ProvidePlugin是webpack身上的一个插件
const webpack = require('webpack');

//写出多页面入口(js)
function getEntry() {
    var entry = {};
    //读取client目录所有page入口
    glob.sync("./client/pages/**/*.js").forEach(function (name) {
        var eArr = [];
        var n = name;
        n = n.slice(0, n.lastIndexOf("/")); //保存各个组件的入口
        n = n.slice(n.lastIndexOf("/") + 1, n.length); //保存各个组件的入口
        eArr.push(name);
        entry[n] = eArr;
    });
    return entry;
}
// console.log(getEntry());

//写出多页面出口（html）
function htmlConfig() {
    glob.sync("./client/pages/**/*.html").forEach(function (name) {
        let n = name;
        n = n.slice(0, n.lastIndexOf("/"));
        n = n.slice(n.lastIndexOf("/") + 1, n.length);
        let config = {
            template: name,
            filename: n + ".html",
            inject: false,
            // chunks: [n] // 每个html引用的js模块
        };
        // console.log(config);
        module.exports.plugins.push(new HtmlWebpackPlugin(config));
    });
}

module.exports = {
    entry: getEntry(),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: "/",
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            include: path.resolve(__dirname, 'client/css'),
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.css$/,
            include: [path.resolve(__dirname, 'client/pages'),path.resolve(__dirname, 'client/Component')],
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }]
        }, {
            test: /\.(png|jpg|jpeg|svg)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[hash].[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        // new webpack.ProvidePlugin({ //它是一个插件，所以需要按插件的用法new一个
        //     react:'react',    //接收名字:模块名
        //     reactDom:'react-dom',
        // })
    ],
    // optimization:{  //优化
    //     splitChunks:{
    //         cacheGroups:{//缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
    //             commonjs:{
    //                 name:'common',      //输出的名字（提出来的第三方库）
    //                 test: /\.js/,       //通过条件找到要提取的文件
    //                 chunks:'initial'    //对所有文件进行处理
    //             }
    //         }
    //     }
    // },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000
    },
    mode: 'development'
}

htmlConfig()