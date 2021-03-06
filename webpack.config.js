module.exports = {
	entry: './js/main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	devtool: '#inline-source-map'
}
