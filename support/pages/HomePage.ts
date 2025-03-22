import { type Page } from '@playwright/test';
import { Header } from '../components/Header';
import { CookiesModal } from '../components/CookiesModal';

export class HomePage {

    readonly page: Page;
    header: Header;
    cookiesModal: CookiesModal;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.cookiesModal = new CookiesModal(page);
    }
    
    async goto() {
        await this.page.goto('/');
    }
}