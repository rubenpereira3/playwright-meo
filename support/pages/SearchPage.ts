import { type Page, type Locator, expect } from '@playwright/test';

export class SearchPage {

    static TAB = {
        TUDO: 'TUDO',
        LOJA: 'Loja',
        AJUDA: 'Ajuda'
    }

    readonly page: Page;
    readonly tabs: Locator;

    constructor(page: Page)  {
        this.page = page;
        this.tabs = page.locator('.tabs').getByRole('button');
    }

    async getDevicesUnderPrice(maxPrice: number) {
        const devices: {title: String, price: number }[] = [];

        const cards = this.page.locator('.shopping-component > * .item');
        const cardsCount = await cards.count();

        for(let i = 0; i < cardsCount; i++) {
            const priceText = await cards.nth(i).locator('[data-testid="price"]').textContent();

            if(priceText === null)
                throw new Error('The price value must not be null');

            const price = Number(priceText.replace('€', '').replace(',', '.'))
            
            if (price <= maxPrice) {
                const productTitle = await cards.nth(i).locator('.title').textContent();

                if(productTitle === null)
                    throw new Error('The product title value must not be null');

                devices.push({ 'title': productTitle, 'price': price });
            }
        }

        return devices;
    }
}