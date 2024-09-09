import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    //#region Locators
    readonly usernameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly usertypeRdo: Locator;
    readonly okBtn: Locator;
    readonly usertypeSel: Locator;
    readonly termsChk: Locator;
    readonly signInBtn: Locator;
    //#endregion

    constructor(page: Page) {
        this.page = page;
        this.usernameTxt = this.page.locator('#username');
        this.passwordTxt = this.page.locator('#password');
        this.usertypeRdo = this.page.locator('.radiotextsty').last();
        this.okBtn = this.page.locator('#okayBtn');
        this.usertypeSel = this.page.locator('select.form-control');
        this.termsChk = this.page.locator('#terms');
        this.signInBtn = this.page.locator('#signInBtn');
    }

    async NavigateToLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise');
    }

    async LoginToDashboardPage(username: string, password: string) {
        await this.usernameTxt.fill(username);
        await this.passwordTxt.fill(password);

        await this.usertypeRdo.click();
        await expect(this.usertypeRdo).toBeChecked();
        await this.okBtn.click();

        await this.usertypeSel.selectOption("consult");
        await this.termsChk.check();
        await expect(this.termsChk).toBeChecked();

        this.signInBtn.click();
    }
}