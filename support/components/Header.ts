import { type Page, type Locator } from '@playwright/test';

export class Header {

    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('.menu-new-search > input');
        this.searchButton = page.locator('.icon-search');
    }
}