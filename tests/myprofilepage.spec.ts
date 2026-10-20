import { test } from '../Fixture/CustomFixtures';
import { validUser } from '../TestData/TestData';   


test.describe('click edit profile button', () => {
    test('should click edit profile button', async ({ dashboardPage, loginPage, homePage, myprofilePage }) => {
        await homePage.openNdosiPage();
        await homePage.openNdosiPage();
        await homePage.navigateToHomePage();
        await loginPage.userLogin(validUser.student.username, validUser.student.password);
        await loginPage.verifyDashboardUrl();
        await dashboardPage.clickMenuButton();
        await dashboardPage.clickProfileButton();
        await myprofilePage.clickEditProfileButton();
    });
})
