const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: true,
      json: true,
      reportDir: 'cypress/reports/mochawesome-report',
    }
  }
});