import { expect, test } from '../fixtures/app.fixtures'

test('login test', async( { loginPage, dashboardPage }) => {

    await loginPage.NavigateToLoginPage();
    await loginPage.LoginToDashboardPage('rahulshettyacademy', 'learning');
    
    await expect (loginPage.page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await dashboardPage.cardtitleLnk.first().textContent());
    console.log(await dashboardPage.cardtitleLnk.nth(1).textContent());
    console.log(await dashboardPage.cardtitleLnk.allTextContents());
});