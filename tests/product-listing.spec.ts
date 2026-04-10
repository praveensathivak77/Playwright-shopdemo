import { test, expect } from '@playwright/test';
import { ProductListingPage } from '../pages/ProductListingPage';
import { testData } from '../utils/test-data';

test.describe('Product Listing Tests', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    });
testData.searchProducts.forEach(product => {
test(`Search product: ${product}`, async ({ page }) => {
    const listing = new ProductListingPage(page);
    await listing.searchProduct(product);
    const count = await listing.getProductCount();
    expect(count).toBeGreaterThan(0);
    });
});
testData.categories.forEach(category => {
test(`Filter category: ${category}`, async ({ page }) => {
    const listing = new ProductListingPage(page);
    await listing.selectCategory(category);
    const count = await listing.getProductCount();
    expect(count).toBeGreaterThan(0);
    });
});

test('Empty search shows message', async ({ page }) => {
    const listing = new ProductListingPage(page);
    await listing.searchProduct(testData.invalidSearch);
    await expect(listing.emptyMessage).toBeVisible();
    });

    test('Sort Low to High', async ({ page }) => {
        const listing = new ProductListingPage(page);
        await listing.sortLowToHigh();
        const prices = await listing.getAllPrices();
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sorted);
    });

    test('Sort High to Low', async ({ page }) => {
        const listing = new ProductListingPage(page);
        await listing.sortHighToLow();
        const prices = await listing.getAllPrices();
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sorted);
    });
});