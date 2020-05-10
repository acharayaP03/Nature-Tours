const path = require('path');

const Config = require('./webpack.config');
const merge = require('webpack-merge');

//since we will using dev server, we dont need html-webpack-plugin while on dev mode.

module.exports = merge(Config, {
    mode: 'development',
    devtool: 'none',
    output:{
        //contenthas gives unique id to the file which prevents caching. 
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        //publicPath: 'dist/'
    },
    //all common modules and rules are in .config.js file.
    module: {
        rules: [
             {
                test: /\.scss$/,
                use: [
                    'style-loader',// inhjects css into the dom
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    }
})