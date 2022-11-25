const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001/ghost/#/signin'
  },
  env: {
    email: 'c.barreiroh@uniandes.edu.co',
    password: 'Q123456789'
  }
})
