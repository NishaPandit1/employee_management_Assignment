const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);


      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:5173",
    chromeWebSecurity: false,
    chromeWebSecurity: false,
    viewportHeight: 900,
    viewportWidth: 1440,
    watchForFileChanges: false
  },
});
