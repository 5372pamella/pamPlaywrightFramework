import { BasePage } from '..//Utils/BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    async openNdosiPage() {
        await this.GoToUrl('/');
    }

    async userLogin(username: string, password: string) {

        await this.EnterText(this.page.locator('#login-email'), username);
        await this.EnterText(this.page.locator('#login-password'), password);
        await this.ClickElement(this.page.getByRole('button', { name: 'Login' }));
    }

    async verifyDashboardUrl() {
        await expect(this.page).toHaveURL('https://ndosisimplifiedautomation.vercel.app/#dashboard');
    }
}