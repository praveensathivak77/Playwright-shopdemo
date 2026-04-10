This project is a Playwright test automation framework written in TypeScript for the ShopDemo e-commerce application.
It automates key user flows including product listing, product detail, cart functionality, checkout validation, and a complete end-to-end purchase flow using the Page Object Model (POM) design pattern.
All tests use stable data-testid selectors, are independent with no shared state, and test data is maintained in a separate test-data.ts file for reusability.
The application runs locally with mocked APIs using MSW, so no backend setup is required.
To install and run the project, first clone the repository, then install dependencies using npm install, start the application using npm run dev, and finally execute the tests using npx playwright test.
The tests are designed to run successfully from a clean install and validate all required scenarios including dynamic order confirmation with Order ID verification.