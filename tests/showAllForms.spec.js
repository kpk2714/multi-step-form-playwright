import test from "playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test.describe('Show all forms' , ()=>{

    test('The User can able to view all pending forms', async ({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await page.waitForTimeout(1000);
        await loginPage.enterPassword();
        await page.waitForTimeout(1000);
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();
        await page.waitForTimeout(1000);
        await homePage.showAllPendingForm();
    });

    test("The User can able to view all completed forms", async ({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await page.waitForTimeout(1000);
        await loginPage.enterPassword();
        await page.waitForTimeout(1000);
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();
        await page.waitForTimeout(1000);
        await homePage.verifyNoCompletedForm();
    });
});