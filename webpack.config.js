var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
      helloWorld:'./webpack04/helloWorld.js',
  },
  output: {
    path: './webpack04',
    filename: 'js/[name]-bundle.js',
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html",//文件名
			template:"index.html",//模板
			inject:"head",//嵌入位置
			title:"webpack test demo",//自定义参数变量
			date:new Date()
		})
	]
}
