import test from "playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test.describe('Verify Username' , ()=>{

    test('The User can able to verify username in homepage', async ({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();
        await page.waitForTimeout(1000);
        await homePage.verifyUsername();
        await page.waitForTimeout(1000);
    });

});