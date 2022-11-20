import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    // supportFile: false,
    // supportFile: 'tests/e2e/support/e2e.ts',
    // specPattern: 'tests/e2e/**/*.cy.ts',
    // specPattern: 'tests/e2e/specs/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

// import { defineConfig } from 'cypress'

// export default defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:5000',
//     supportFile: false,
//     specPattern: 'tests/e2e/**/*.spec.ts',
//   },
//   video: false,
//   watchForFileChanges: true,
// })

// import { defineConfig } from 'cypress'

// export default defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:5000',
//     specPattern: 'tests/e2e/specs/*.cy.{js,jsx,ts,tsx}',
//     supportFile: 'tests/e2e/support/e2e.ts',
//   },
// })
