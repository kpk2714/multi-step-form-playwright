import test from "playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PersonalFormPage } from "../pages/PersonalFormPage";

test.describe('Upload Image in Personal Form', ()=>{
    test('The user is able to upload image in Personal Form' , async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const personalFormPage = new PersonalFormPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await loginPage.previousSessionExist();
        await homePage.clickOnCandidateRegForm();
        await personalFormPage.uploadImage();
        await page.waitForTimeout(2000);
    });
});