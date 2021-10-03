const { join }  = require('path')
module.exports = {
    publicPath:'/escape-door', //项目打包之后输出的根路径
    outputDir:join(__dirname,'dist/escape-door'), //构建输出目录
    assetsDir:'assets', //存放静态资源（js,css,js,fonts）
    lintOnSave:false, //是否开启eslint保存检测，有效值：true || false || 'error'
    configureWebpack:{
        resolve: {
            alias: {
                'api':'@/api',
                'components':'@/components',
                'assets': '@/assets',
            }
        }
    },
    devServer:{
        port: 8081,
        contentBase: [join(__dirname, 'public')],
        proxy: {
            '/dev': {
                target:'www.whysocool.com', // 后台接口域名
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/dev': '/'
                }
            }
        }
    }
}