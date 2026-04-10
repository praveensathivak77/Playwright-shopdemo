import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../utils/test-data';

test.describe('Checkout Form Validation', () => {
test.beforeEach(async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.open();
    });

test('Submit empty form shows required errors', async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.submit();
    await expect(page.getByTestId('field-error-shipping-first-name')).toBeVisible();
    await expect(page.getByTestId('field-error-shipping-email')).toBeVisible();
    await expect(page.getByTestId('field-error-shipping-zip')).toBeVisible();
    await expect(page.getByTestId('field-error-payment-name')).toBeVisible();
    });

test('Invalid email shows error', async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.firstName.fill(testData.checkout.valid.firstName);
    await checkout.lastName.fill(testData.checkout.valid.lastName);
    await checkout.email.fill(testData.checkout.invalid.email);
    await checkout.submit();
    await expect(
    page.getByTestId('field-error-shipping-email')
    ).toHaveText('Invalid email format');
    });

test('Invalid zip shows error', async ({ page }) => {
    const checkout = new CheckoutPage(page);
    await checkout.firstName.fill(testData.checkout.valid.firstName);
    await checkout.lastName.fill(testData.checkout.valid.lastName);
    await checkout.email.fill(testData.checkout.valid.email);
    await checkout.zip.fill(testData.checkout.invalid.zip);
    await checkout.submit();
    await expect(
    page.getByTestId('field-error-shipping-zip')
    ).toHaveText('Zip code must be 5 digits');
    });

});