module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.30:11990',
                pathRewrite: { '^/api': '' },
                changeOrigin: true
            },
            '/apq': {
                target: 'http://192.168.1.30:11950',
                pathRewrite: { '^/apq': '' },
                changeOrigin: true
            },
        }
    }
}