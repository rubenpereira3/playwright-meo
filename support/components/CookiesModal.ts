import { type Page, type Locator } from '@playwright/test';

export class CookiesModal {

    readonly page: Page;
    readonly acceptButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.acceptButton = page.locator('button').filter({ hasText: 'CONCORDO'});
    }
}