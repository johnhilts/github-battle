var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
		// 'webpack/hot/dev-server',
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		// publicPath: __dirname + '/dist/',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};
