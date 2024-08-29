import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { EducationFormPage } from "../pages/EducationFormPage";

test.describe('Enter Data in Education Form',()=>{

    test('The User can able to enter data in Education Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const educationFormPage = new EducationFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnCandidateRegForm();
        await educationFormPage.enterEducationForm();
        await page.waitForTimeout(1000);
        await educationFormPage.verifySuccessMessage();
        await page.waitForTimeout(3000);
    });
});