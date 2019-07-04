const webpack = require('webpack')
const path = require('path');
const Timestamp = new Date().getTime();

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV == 'development' ? './' : '/agent/',
    devServer: {
        port: 8080,
        open: true
    },
    configureWebpack: {
//      plugins: [
//          new webpack.ProvidePlugin({
//              jQuery: 'jquery',
//              $: 'jquery'
//          })
//      ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@ast', resolve('src/assets'))
            .set('@u',resolve('src/utils'))
            .set('@v',resolve('src/views'))
            .set('@cfg',resolve('src/config'))
    },
	//配置一下webpack，解决打包后缓存问题
	configureWebpack: {
		output : {
			filename : `js/[name].${Timestamp}.js`,
			chunkFilename : `js/[name].${Timestamp}.js`
		}
	}
}