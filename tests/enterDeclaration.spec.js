import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { DeclarationFormPage } from "../pages/DeclarationFormPage";


test.describe('Enter Data in Technical Skill Page',()=>{

    test('The User can able to enter data in Technical Skill Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const declaration = new DeclarationFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnCandidateRegForm();
        await declaration.declareForm();
        await page.waitForTimeout(1000);
    });
});