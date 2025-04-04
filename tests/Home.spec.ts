import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pages/HomePage'
import { SearchPage } from '../support/pages/SearchPage'

test.describe('Meo search', () => {

    const testData = {
        "searchKeyword": "iphone",
        "maxPrice": 1499.99
    };
      
    test('Get all devices with price lower than specified', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);

        await homePage.goto();
        
        await homePage.cookiesModal.acceptButton.click();

        await homePage.header.searchInput.fill(testData.searchKeyword);
        await homePage.header.searchButton.click();

        await searchPage.tabs.filter({ hasText: SearchPage.TAB.LOJA }).click();
        
        const devices = await searchPage.getDevicesUnderPrice(testData.maxPrice);
        
        expect(devices.length).toBeGreaterThanOrEqual(1);
        
        console.log(devices);

        devices.forEach(device => expect(device.price).toBeLessThanOrEqual(testData.maxPrice));
    });
});