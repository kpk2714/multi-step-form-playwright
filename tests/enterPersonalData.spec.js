import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PersonalFormPage } from "../pages/PersonalFormPage";

test.describe('Enter Data in Personal Form',()=>{

    test('The User can able to enter data in Personal Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const personalFormPage = new PersonalFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();
        await page.waitForTimeout(1000);

        await homePage.clickOnCandidateRegForm();
        await page.waitForTimeout(1000);
        await personalFormPage.enterPersonalFormData();
        await page.waitForTimeout(1000);
        await personalFormPage.verifySuccessMessage();
        await page.waitForTimeout(1000);
    });
});