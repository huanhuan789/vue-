module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/mock'
            }
          }
        }
      }
}
