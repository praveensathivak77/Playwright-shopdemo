# Playwright ShopDemo Automation

This project contains end-to-end automated tests for the ShopDemo e-commerce application using Playwright with TypeScript. The framework is designed using the Page Object Model (POM) to ensure clean, maintainable, and scalable test code.

# Project Overview

The automation covers all key user flows of the application:

* Product Listing (Search, Filter, Sort, Empty State)
* Product Detail (Validation & Add to Cart behavior)
* Cart Functionality (Add, Update Quantity, Remove)
* Checkout Form Validation (Required fields, invalid inputs)
* End-to-End Happy Path Full purchase flow

The application uses Mock Service Worker (MSW), so no real backend, login, or external APIs are required.


# Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)

#  Project Structure
playwright-shopdemo/
│
├── pages/                  # Page Object Model files
│   ├── ProductListingPage.ts
│   ├── ProductDetailPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/                  # Test files
│   ├── product-listing.spec.ts
│   ├── product-detail.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── e2e.test.ts
│
├── utils/
│   └── test-data.ts        # Test data (valid & invalid data)
│
├── playwright.config.ts
├── package.json
├── README.md
└── .gitignore

# Setup & Run Instructions

* Clone the application repository
  'git clone https://github.com/ettaverse/dummy-ecommerce.git'
  'cd dummy-ecommerce'

* Install dependencies
    'npm install'

* Start the application
  'npm run dev'
  App will run at: http://localhost:3000

* Install Playwright browsers
    'npx playwright install'

* Run all Playwright tests
  'npx playwright test'

* Run a specific test (optional)
  'npx playwright test tests/e2e.test.ts --headed'


# Test Coverage

## 1. Product Listing

* Search products by name
* Filter by category
* Validate empty search results
* Sort products by price

## 2. Product Detail (/products/:id)

* Verify product name, price, and category
* Validate Add to Cart button for in-stock products
* Verify disabled state for out-of-stock product (prod-008)

## 3. Cart (/cart)

* Add product and verify cart count
* Validate item details (name, price, quantity)
* Increase and decrease quantity
* Remove item and validate empty cart state

## 4. Checkout Validation (/checkout)

* Submit empty form and verify required field errors
* Validate invalid email input
* Validate incorrect ZIP code

## 5. End-to-End Happy Path

* Navigate from home to product
* Add product to cart
* Proceed to checkout
* Fill valid shipping and payment details
* Submit order
* Validate Order Confirmation page
* Verify dynamic Order ID (format: 'ORD-xxxx')


# Key Features

* Uses data-testid selectors for stability
* Fully follows **Page Object Model (POM)**
* Test data separated in `test-data.ts`
* Tests are **independent (no shared state)**
* Clean and readable test structure
* Minimal use of hard waits (uses Playwright assertions)

---

## 📌 Notes

* No real payments are performed
* No external APIs are used
* No login required
* Application is fully self-contained

---

## 🚀 How to Submit

* Push this project to a public GitHub repository
* Ensure all tests run successfully using:
  `npx playwright test`
* Share the repository link

---

## 👨‍💻 Author

Praveen A G
QA Engineer | Playwright | Automation Testing

---

## 🎯 Result

✔ Complete automation framework
✔ Covers all required scenarios
✔ Ready for real-world QA testing

---
