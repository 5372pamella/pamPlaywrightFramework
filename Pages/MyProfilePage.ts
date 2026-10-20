import { BasePage} from '..//Utils/BasePage';

export class MyProfilePage extends BasePage {

    async openNdosiPage() {
        await this.GoToUrl('/');
    }

    async clickEditProfileButton() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Edit Profile' }));
    }
}