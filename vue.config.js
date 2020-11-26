module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.allyx.cn:5457/constellations',
                changeOrigin:true,
                ws:true,
                secure:false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}