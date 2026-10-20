import {test} from '../Fixture/CustomFixtures';
import { validUser} from '../TestData/TestData';

test.describe('click menu button', () => {
    test('should click menu button', async ({ dashboardPage, loginPage, homePage }) => {
        await homePage.openNdosiPage();
        await homePage.navigateToHomePage();
        await loginPage.userLogin(validUser.student.username, validUser.student.password);
        await loginPage.verifyDashboardUrl();
        await dashboardPage.clickMenuButton();
        await dashboardPage.clickProfileButton();
    });
});