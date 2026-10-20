import {test} from '..//Fixture/CustomFixtures';
import { validUser} from '..//TestData/TestData';

test.describe('Login Page Tests', () => {
    test('should display login page', async ({ homePage, loginPage }) => {
        await homePage.openNdosiPage();
        await homePage.navigateToHomePage();
        await loginPage.userLogin(validUser.student.username, validUser.student.password);
        await loginPage.verifyDashboardUrl();
    });

});