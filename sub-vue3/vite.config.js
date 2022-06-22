
const path = require('path')

module.exports = {
  hostname: '0.0.0.0',
  port: 7703,
  open: false,
  https: false,
  ssr: false,
  cors: true,
  base: '/subapp/sub-vue3/',
  proxy: {
    '/subapp/sub-vue3': {
        target: 'http://localhost:7703',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/subapp\/sub-vue3/, '')
    }
  },
 }
