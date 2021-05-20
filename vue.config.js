module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            // '/u/ajax/loginVerify': {
            //     target: process.env.VUE_APP_MOCK_SERVER + '/u/ajax/loginVerify',
            // },
            '/api': {
                // target: 'http://test.m.naoffer.com',
                target: process.env.VUE_APP_MOCK_SERVER,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },            
        }
    }
}