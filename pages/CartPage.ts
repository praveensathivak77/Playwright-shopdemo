import { Page, Locator } from '@playwright/test';
export class CartPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartCount: Locator;
    readonly addToCartBtn: Locator;
    readonly cartItem: Locator;
    readonly itemPrice: Locator;
    readonly itemQuantity: Locator;
    readonly increaseBtn: Locator;
    readonly decreaseBtn: Locator;
    readonly totalPrice: Locator;
    readonly removeBtn: Locator;
    readonly emptyMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByTestId('cart-link');
        this.cartCount = page.getByTestId('cart-count');
        this.addToCartBtn = page.getByTestId('add-to-cart-button');
        this.cartItem = page.locator('[data-testid^="cart-item"]');
        this.itemQuantity = page.getByTestId('cart-item-quantity-cart-1');
        this.itemPrice = page.locator('[data-testid^="cart-item"] p.text-gray-600');
        this.increaseBtn = page.getByTestId('quantity-increase-cart-1');
        this.decreaseBtn = page.getByTestId('quantity-decrease-cart-1');
        this.totalPrice = page.getByTestId('cart-total');
        this.removeBtn = page.getByTestId('remove-item-cart-1');
        this.emptyMessage = page.locator('text=Your cart is empty');
    }
    async openProduct() {
        await this.page.goto('/products/prod-001');
        await this.addToCartBtn.waitFor();
    }

    async addToCart() {
        await this.addToCartBtn.click();
        await this.cartCount.waitFor(); // wait for update
    }

    async goToCart() {
        await this.cartLink.click();
        await this.cartItem.first().waitFor(); // wait for cart load
    }
}