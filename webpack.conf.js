
let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve('./dist')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: true,
					// localIdentName: '[name]__[local]___[hash:base64:7]'
					localIdentName: '[hash:base64:7]'
				}
			},
			'sass-loader'
			]
		}]
	},
	plugins: [
		new CompressionPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}