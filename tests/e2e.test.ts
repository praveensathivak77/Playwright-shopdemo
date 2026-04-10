import { test, expect } from '@playwright/test';
import { testData } from '../utils/test-data';

test('End-to-End Happy Path', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-testid^="product-card"]').first().click();
  await page.getByTestId('add-to-cart-button').click();
  await page.getByTestId('cart-link').click();
  await page.getByTestId('checkout-button').click();

  const user = testData.e2e.user;
  const payment = testData.e2e.payment;

  await page.getByTestId('shipping-first-name').fill(user.firstName);
  await page.getByTestId('shipping-last-name').fill(user.lastName);
  await page.getByTestId('shipping-email').fill(user.email);
  await page.getByTestId('shipping-address').fill(user.address);
  await page.getByTestId('shipping-city').fill(user.city);
  await page.getByTestId('shipping-state').fill(user.state);
  await page.getByTestId('shipping-zip').fill(user.zip);
  await page.getByTestId('payment-name').fill(payment.cardName);
  await page.getByTestId('payment-card-number').fill(payment.cardNumber);
  await page.getByTestId('payment-expiry').fill(payment.expiry);
  await page.getByTestId('payment-cvv').fill(payment.cvv);
  await page.getByTestId('submit-order-button').click();
  await expect(page.getByText('Order Confirmed!')).toBeVisible();

  const orderIdLocator = page.getByTestId('order-id');
  await expect(orderIdLocator).toBeVisible();

  const orderId = await orderIdLocator.textContent();
  expect(orderId).toMatch(/ORD-\d+/);

});