import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { HelpdeskFormPage } from "../pages/HelpdeskFormPage";


test.describe('Submit a Query',()=>{

    test('The User can able to submit a query', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const helpdesk = new HelpdeskFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnHelpDeskBtn();
        await helpdesk.declareForm();
        await page.waitForTimeout(1000);
        await helpdesk.verifyQuerySuccessMessage();
        await page.waitForTimeout(1000);
        await helpdesk.verifyQuery();
    });
});