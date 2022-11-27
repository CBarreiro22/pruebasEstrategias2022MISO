const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001/ghost/#/signin'
  },
  env: {
    email: 'e.angulov@uniandes.edu.co',
    password: 'Elymary-420@',
    mockarooUrl:'https://api.mockaroo.com/api/a1e06630',
    mockarooKey:'dcedeee0'
  }
})
