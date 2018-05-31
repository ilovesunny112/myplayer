var path = require("path")
const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');
const {VueLoaderPlugin} = require("vue-loader");
const ExtractPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer")

module.exports = {
    entry:path.join(__dirname, "src/main.js"),
    output:{
        path:path.join(__dirname,'dist'),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlPlugin({
            template:"./public/index.html",
            filename:"index.html",
            inject:"body",
            // title:"Welcome to my music player",
            publichPath:"/"
        }),
        new CleanPlugin(["dist"],{
            //option
        }),
        new webpack.HotModuleReplacementPlugin() ,
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new ExtractPlugin("styles.[chunkname].[hash:8].css"),       
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                     
                    "vue-loader"
                ]
            },
            {
                test:/\.jsx$/,
                use:["babel-loader"]
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
                    }
                ]
            },
            {
                test:/\.styl/,
                use:ExtractPlugin.extract({
                    fallback:"style-loader", 
                    use:[
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            // options:{
                            //     souceMap:true,
                            //     plugins:[
                            //         autoprefixer({
                            //             browsers:"cover 99.5%"
                            //         })
                            //     ]
                            // }

                        },
                        "stylus-loader"
                    ]
                })
            },

            {
                test:/\.less/,
                use:ExtractPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader",
                        {
                            loader:"postcss-loader"
                        },
                        "less-loader"
                    ]   
                })
                //loader:'style-loader!css-loader!less-loader'
            },

            {
                test:/\.(jpg|png|bmp|gif|jpeg)/,
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
            }
            
           
        ]
    },
 
    mode:"development",
    devServer:{
        host:"0.0.0.0",
        hot:true,
        open:true,
        // contentBase:"/",
        publicPath:"/",
        overlay:{
            warnings:true,
            errors:true
        },
        port:9000,
        historyApiFallback:true,
        https:true
    }

}

console.log("==============")
console.log(this.resourcePath)