var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.join(__dirname,'src/index.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost/'
    },
    resolve: {
        extensions : ['.js']
    },
    plugins: [
        new ExtractTextWebpackPlugin('[name].css'),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/public/index.html'),
			inject: 'body',
			filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            },
            {
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])
            },
            { test:  /\.(jpg|png|svg)$/, use: [ "file-loader" ] }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 80,
        historyApiFallback: true
    }
}