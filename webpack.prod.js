const path = require('path');

const Config = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')


//since we will using dev server, we dont need html-webpack-plugin while on dev mode.

module.exports = merge(Config, {
    mode: 'production',
    output:{
        //contenthas gives unique id to the file which prevents caching. 
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        /*publicPath: 'dist/'*/
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimizer: [ 
            new OptimizeCssAssetsPlugin(),// minimizes css
            new TerserPlugin()//minimizes js
       ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin()
     ],
    //all common modules/rules and plugin will be used from .config.js file.
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //extract Css into the appropriate files
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    }
})