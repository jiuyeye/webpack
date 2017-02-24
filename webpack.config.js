var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  entry: {
      app:'./webpack05/app.js',
  },
  output: {
    path: './webpack05',
    filename: 'js/[name]-bundle.js',
	},
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:'./node_modules/',
                include:'./webpack05/layer/',
                query:{
                    presets:["latest"],
                },
            }
        ]
    },
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html",//文件名
			template:"index05.html",//模板
			inject:"body",//嵌入位置
		})
	]
}
