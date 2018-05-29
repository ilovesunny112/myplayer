var path = require("path")
const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.join(__dirname,'dist'),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlPlugin({
            template:"./public/index.html",
            filename:"index.html",
            inject:"body",
            title:"Welcome to my music player"
        }),
        new CleanPlugin(["./dist"],{
            //option
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()       
    ],
    module:{
        rules:[
            {
                test:/\.js|jsx/,
                use:[
                    {loader:"babel-loader",
                    exclude:/node_modules/}
                ]
            },
            {
                test:/\.css/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                        options:{
                            module:true,
                            name:"assets/css/[name].[ext]"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        
                    }

                ]
            },
            {
                test:/\.(jpg|png|bmp|gif|svg|jpeg)/,
                use:[
                    
                    {
                        loader:"url-loader",
                        options:{
                            limit:8192,
                            name:"assets/img/[name][hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|otf|svg|woff|woff2)$/,
                use: [{
                  loader: 'file-loader',
                  options:{
                    name:"assets/fonts/[name]-[hash:base64].[ext]"
                  }
                }]
            },
            {
                test:/.vue$/,
                use:[ 
                    "vue-loader"
                ]
            },
            {
                test:/\.styl$/,
                loader:'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    // stylus:{
         
    // },
    mode:"development",
    devServer:{
        host:"0.0.0.0",
        hot:true,
        open:true,
        contentBase:"/",
        publichPath:"/",
        overlay:{
            warnings:true,
            errors:true
        },
        port:9000
    }

}