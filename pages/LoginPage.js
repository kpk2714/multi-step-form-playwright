import { expect } from "allure-playwright";

export class LoginPage{

    constructor(page) {
        this.page = page;
        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.signIn = 'button[type="submit"]';
        this.sessionMessage = '//p[contains(text(),"Previous Session is still active , wait for some time then try again !!!")]';
        this.errorMessage = '//p[contains(text(),"Wrong Credentails !!!")]';
    }

    async gotoLoginPage(){
        await this.page.goto('http://localhost:4200/login');
    }

    async enterUsername(){
        await this.page.fill(this.username,'kpk2714');
    }

    async enterPassword(){
        await this.page.fill(this.password,'Mitra@123');
    }

    async clickOnSignIn(){
        await this.page.click(this.signIn);
    }

    async previousSessionExist(){
        const isActive = await this.page.isVisible(this.sessionMessage);

        if(isActive){
            await this.page.click(this.signIn);
        }
    }

    async enterWrongUsername(){
        await this.page.fill(this.username,'kpk271415');
    }

    async enterWrongPassword(){
        await this.page.fill(this.password,'Mitra@1234');
    }

    async verifyErrorMessage(){
        const error = await this.page.locator(this.errorMessage);
        await expect(error).toHaveText('Wrong Credentails !!!');
    }
}