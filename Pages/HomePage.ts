import { BasePage } from '..//Utils/BasePage';

export class HomePage extends BasePage {
    
    async openNdosiPage() {
        await this.GoToUrl('/');
    }

    async navigateToHomePage() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Login' }))
    }

    async verifyLoginButtonVisible() {
        await this.VerifyElementVisible(this.page.getByRole('button', { name: 'Login' }))
    }

    async getLoginButtonText() {
        return await this.GetTextValue(this.page.locator('#login-heading'));
    }
}