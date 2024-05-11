const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.meo.pt',
    specPattern: 'cypress/test/*.js'
  },
});
