import { expect } from "allure-playwright";


export class HomePage{

    constructor(page){
        this.page = page;
        this.verifyLandingpage = '//h3[contains(text(),"Home")]';
        this.pendingForm = '//h1[contains(text(),"Pending Form(s)")]';
        this.completedFrom = '//h1[contains(text(),"Completed Form(s)")]';
        this.allForm = '//div[starts-with(@class,"w-full")]//child::div//child::h1';
        this.noCompletedForm = '//h1[contains(text(),"No Completed Forms available")]';
        this.candidateRegForm = '//h3[contains(text(),"Candidate Registration Form")]';
        this.headerUsername = '//h1[@class="fonthome mt-5"]';
        this.bodyUsername = '//h2[@class="font-bold float-right ml-auto"]';
        this.helpdeskBtn = '//a[contains(text(),"Trainee HelpDesk")]';
    }

    async verifyLogin(){
        const text = await this.page.locator(this.verifyLandingpage);
        await expect(text).toHaveText('Home');
    }

    async showAllPendingForm(){
        await this.page.click(this.pendingForm);
        const forms = await this.page.$$(this.allForm);
        for(let form of forms){
            let text = await form.textContent();
            console.log(text);
        }
    }

    async verifyNoCompletedForm(){
        await this.page.click(this.completedFrom);
        const text = await this.page.locator(this.noCompletedForm);
        await expect(text).toHaveText('No Completed Forms available');
    }

    async clickOnCandidateRegForm(){
        await this.page.click(this.candidateRegForm);
    }

    async verifyUsername(){
        const headerUsername = await this.page.locator(this.headerUsername);
        const bodyUsername = await this.page.locator(this.bodyUsername);
        await expect(headerUsername).toContainText('Krishna Pada Kar');
        await expect(bodyUsername).toContainText('Krishna Pada Kar');
    }

    async clickOnHelpDeskBtn(){
        await this.page.click(this.helpdeskBtn);
    }
}