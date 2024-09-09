import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { DashboardPage } from '../pages/dashboard.page';

type AppFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<AppFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    }
});

export { expect } from '@playwright/test';