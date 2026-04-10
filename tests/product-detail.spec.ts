import { test, expect } from '@playwright/test';
import { ProductDetailPage } from '../pages/ProductDetailPage';

test.describe('Product Detail Tests', () => {
    test('Verify product details and Add to Cart enabled', async ({ page }) => {
        const product = new ProductDetailPage(page);
        await product.openProduct('prod-001');
        await expect(product.productName).toBeVisible();
        await expect(product.productPrice).toBeVisible();
        await expect(product.productCategory).toBeVisible();
        await expect(product.addToCartBtn).toBeEnabled();
    });

    test('Verify Add to Cart disabled for out-of-stock product', async ({ page }) => {
        const product = new ProductDetailPage(page);
        await product.openProduct('prod-008');
        await expect(product.addToCartBtn).toBeDisabled();
    });
});