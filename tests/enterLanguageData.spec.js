import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { LanguageFormPage } from "../pages/LanguageFormPage";


test.describe('Enter Data in Work Experience Page',()=>{

    test('The User can able to enter data in Work Experience Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const languagePage = new LanguageFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnCandidateRegForm();
        await languagePage.enterLanguageData();
        await page.waitForTimeout(1000);
        await languagePage.verifySuccessMessage();
        await page.waitForTimeout(1000);
    });
});