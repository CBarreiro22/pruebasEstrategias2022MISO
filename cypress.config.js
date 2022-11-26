const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001/ghost/#/signin'
  },
  env: {
    email: 'e.angulov@uniandes.edu.co',
    password: 'Elymary-420@'
  }
})
