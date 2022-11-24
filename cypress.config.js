const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalSourceRewriting: true,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  video: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://homolog-eleva-id.elevaeducacao.com.br',
    specPattern: 'cypress/e2e/**/*.*spec.*',
  },
})
