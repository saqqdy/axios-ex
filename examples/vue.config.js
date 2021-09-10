const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    publicPath: '/',
    devServer: {
        proxy: {
            '/jar': {
                target: 'https://www.wojiacloud.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/jar/': '/'
                }
            }
        }
    },
    chainWebpack: config => {
        config.output.filename('js/[name].js').end()
        config.output.chunkFilename('js/chunk/[name].js').end()
        config.resolve.alias.set('@', resolve('./src'))
    },
    // pluginOptions: {
    // 	'style-resources-loader': {
    // 		preProcessor: 'less',
    // 		patterns: [resolve('src/assets/css/var.less')]
    // 	}
    // },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                modules: {
                    // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    localIdentName: '[path][local]_[hash:base64:5]'
                },
                localsConvention: 'camelCaseOnly'
            },
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1890ff', // 全局主色
                        'link-color': '#fff', // 链接色
                        'success-color': '#67c23a', // 成功色
                        'warning-color': '#e6a23c', // 警告色
                        'error-color': ' #ef4f4f', // 错误色
                        'font-size-base': '14px', // 主字号
                        'heading-color': 'rgba(255, 255, 255, 0.85)', // 标题色
                        'text-color': 'rgba(255, 255, 255, 0.65)', // 主文本色
                        'text-color-secondary': 'rgba(255, 255, 255, 0.45)', // 次文本色
                        'disabled-color': 'rgba(255, 255, 255, 0.25)', // 失效色
                        'border-radius': '2px', // input
                        'border-radius-base': '4px', // 组件/浮层圆角
                        'border-color': '#d9d9d9', // 边框色
                        'border-color-base': '#ebeef5', // 边框色
                        'box-shadow-base': '0 2px 8px rgba(255, 255, 255, 0.15)' // 浮层阴影
                    },
                    javascriptEnabled: true
                }
            }
        }
    }
}
