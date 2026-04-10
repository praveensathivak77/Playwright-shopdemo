import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
    test('Full cart flow', async ({ page }) => {
        const cart = new CartPage(page);
        await cart.openProduct();
        await cart.addToCart();
        await expect(cart.cartCount).toBeVisible();
        await cart.goToCart();
        await expect(cart.cartItem.first()).toBeVisible();
        await expect(cart.itemQuantity).toBeVisible();
        await expect(cart.itemPrice.first()).toBeVisible();

        const initialQty = Number(await cart.itemQuantity.textContent());
        await cart.increaseBtn.click();
        await expect(cart.itemQuantity).not.toHaveText(String(initialQty));

        const increasedQty = Number(await cart.itemQuantity.textContent());
        expect(increasedQty).toBeGreaterThan(initialQty);
        await cart.decreaseBtn.click();

        const decreasedQty = Number(await cart.itemQuantity.textContent());
        expect(decreasedQty).toBeGreaterThanOrEqual(1);
        await cart.removeBtn.click();
        await expect(cart.emptyMessage).toBeVisible();
    });
});