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
                use:["html-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)?$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: "[name].[hash].[ext]",
                            outputPath: "assets"
                        }
                    }
                ]
            }
        ]
    }
}