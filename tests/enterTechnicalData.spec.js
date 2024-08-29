import { test } from "allure-playwright";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { TechnicalSkillPage } from "../pages/TechnicalFormPage";


test.describe('Enter Data in Technical Skill Page',()=>{

    test('The User can able to enter data in Technical Skill Form', async({page})=>{
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const technicalSkill = new TechnicalSkillPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await loginPage.clickOnSignIn();
        await page.waitForTimeout(1000);
        await loginPage.previousSessionExist();

        await homePage.clickOnCandidateRegForm();
        await technicalSkill.enterTechnicalSkill();
        await page.waitForTimeout(1000);
        await technicalSkill.verifySuccessMessage();
        await page.waitForTimeout(1000);
    });
});