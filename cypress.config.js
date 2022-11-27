const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: ''
  },
  env: {
    email: '',
    password: '',
    mockarooUrl:'https://api.mockaroo.com/api/a1e06630',
    mockarooKey:'dcedeee0'
  }
})
