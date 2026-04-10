import { Page, Locator } from '@playwright/test';
export class ProductListingPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly productCards: Locator;
    readonly productPrices: Locator;
    readonly emptyMessage: Locator;
    readonly categoryFilter: Locator;
    readonly sortDropdown: Locator;

constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByTestId('search-input');
        this.productCards = page.locator('[data-testid^="product-card"]');
        this.productPrices = page.locator('[data-testid^="product-card"] p');
        this.emptyMessage = page.locator('text=No products found');
        this.categoryFilter = page.getByTestId('category-filter');
        this.sortDropdown = page.getByTestId('sort-select');
    }
    async searchProduct(name: string) {
        await this.searchInput.fill(name);
        await Promise.race([
        this.productCards.first().waitFor({ state: 'visible' }),
        this.emptyMessage.waitFor({ state: 'visible' })
        ]);
    }
    async selectCategory(category: string) {
        await this.categoryFilter.selectOption(category);
        await Promise.race([
        this.productCards.first().waitFor({ state: 'visible' }),
        this.emptyMessage.waitFor({ state: 'visible' })
        ]);
    }
    async sortLowToHigh() {
        await this.sortDropdown.selectOption('price_asc');
        await this.productCards.first().waitFor();
    }
    async sortHighToLow() {
        await this.sortDropdown.selectOption('price_desc');
        await this.productCards.first().waitFor();
    }
    async getProductCount() {
        return await this.productCards.count();
    }
    async getAllPrices() {
        const prices = await this.productPrices.allTextContents();
        return prices.map(p => Number(p.replace('$', '').trim()));
    }
    }