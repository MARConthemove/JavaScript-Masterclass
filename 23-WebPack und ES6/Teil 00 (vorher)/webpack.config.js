const webpack = require('webpack');
const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			}
		]
	},

	output: {
		chunkFilename: '[name].js',
		filename: '[name].js'
	},

	mode: 'development'
};
