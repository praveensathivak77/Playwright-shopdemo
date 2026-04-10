import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zip: Locator;
    readonly cardName: Locator;
    readonly cardNumber: Locator;
    readonly expiry: Locator;
    readonly cvv: Locator;
    readonly submitBtn: Locator;

constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId('shipping-first-name');
    this.lastName = page.getByTestId('shipping-last-name');
    this.email = page.getByTestId('shipping-email');
    this.address = page.getByTestId('shipping-address');
    this.city = page.getByTestId('shipping-city');
    this.state = page.getByTestId('shipping-state');
    this.zip = page.getByTestId('shipping-zip');
    this.cardName = page.getByTestId('payment-name');
    this.cardNumber = page.getByTestId('payment-card-number');
    this.expiry = page.getByTestId('payment-expiry');
    this.cvv = page.getByTestId('payment-cvv');
    this.submitBtn = page.getByTestId('submit-order-button');
    }

async open() {
    await this.page.goto('/products/prod-001');
    await this.page.getByTestId('add-to-cart-button').click();
    await this.page.getByTestId('cart-link').click();
    await this.page.getByTestId('checkout-button').click();
    await this.submitBtn.waitFor();
}
async submit() {
    await this.submitBtn.click();
    }
}