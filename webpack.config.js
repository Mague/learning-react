var path = require('path');
module.exports = {
	entry : "./src/app.js",
	output: {
		path: path.join(__dirname, 'dist'),
		filename:"bundle.js"
	},
	module:{
		loaders:[
		{
			loaders:["babel"],
			test:/\.js?$/,
			exclude:/node_modules/
		}]
	},
	devServer: {
		contentBase : path.join(__dirname, 'dist')
	}
}