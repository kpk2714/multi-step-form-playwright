import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { FamilyFormPage } from "../pages/FamilyFormPage";

test.describe('Enter Data in Personal Form',()=>{

    test('The User can able to enter data in Personal Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const faimlyFormPage = new FamilyFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnCandidateRegForm();
        await faimlyFormPage.enterFamilyData();
        await page.waitForTimeout(1000);
        await faimlyFormPage.verifySuccessMessage();
        await page.waitForTimeout(3000);
    });
});