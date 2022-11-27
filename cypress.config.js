const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:2368/ghost/#/signin'
  },
  env: {
    email: 'c.barreiroh@uniandes.edu.co',
    password: 'Q123456789',
    mockarooUrl:'https://api.mockaroo.com/api/a1e06630',
    mockarooKey:'dcedeee0'
  }
})
