import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://localhost:3000",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    video: false,
    videoUploadOnPasses: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json"
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    experimentalStudio: true,
  },
});
