const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            //use this file as from src
            template: "./src/template.html"
        })
     ],
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                        attrs: [":src"]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)?$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: "[name].[hash].[ext]",
                            outputPath: "assets/images",
                            esModule: false
                        }
                    }
                ]
            },
            {
                test:  /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts',
                      }
                  }
                ]
            },
            {
                test:  /\.(mp4|webm)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/vedios',
                        esModule: false
                      }
                  }
                ]
            }
            
        ]
    }
}