import test from "playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test.describe('Login to the application' , ()=>{

    test('The User can able to login to the application with valid credentials', async ({page})=>{
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
        await homePage.verifyLogin();
    });

    test("The User can't able to login to the application with invalid credentials", async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();

        await loginPage.enterWrongUsername();
        await page.waitForTimeout(1000);
        await loginPage.enterWrongPassword();
        await page.waitForTimeout(1000);
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.verifyErrorMessage();
    });
});