const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:2368/ghost/#/signin'
  },
  env: {
    email: 'dwadwad',
    password: 'adwada'
  }
})
