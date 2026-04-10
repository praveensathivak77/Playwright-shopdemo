import { Page, Locator } from '@playwright/test'

export class ProductDetailPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productCategory: Locator;
    readonly addToCartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('product-price');
        this.productCategory = page.getByTestId('product-category');
        this.addToCartBtn = page.getByTestId('add-to-cart-button');
    }
    async openProduct(id: string) {
        await this.page.goto(`/products/${id}`);
        await this.productName.waitFor();
    }
    }