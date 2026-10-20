import { BasePage } from '..//Utils/BasePage';
import { expect } from '@playwright/test';

export class DashboardPage extends BasePage {

    async openNdosiPage() {
        await this.GoToUrl('/');
    }

    async verifyDashboardUrl() {
            await expect(this.page).toHaveURL('https://ndosisimplifiedautomation.vercel.app/#dashboard');
        }

    async clickMenuButton() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
    }

    async clickProfileButton() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Profile' }));
    }
}