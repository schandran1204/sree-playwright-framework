import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    //#region Locators
    readonly cardtitleLnk: Locator;
    //#endregion

    constructor(page: Page) {
        this.page = page;
        this.cardtitleLnk = this.page.locator('.card-body a');
    }
}