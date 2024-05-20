const { defineConfig } = require('cypress')

  module.exports = defineConfig({
    projectId: "8os2ep",
    e2e: {
      baseUrl: 'http://localhost:1234',
    },
  })