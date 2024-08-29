import { expect } from "allure-playwright";

export class WorkExperiencePage{
    constructor(page){
        this.page = page;
        this.workExpBtn = '//h3[contains(text(),"Work Experience") and starts-with(@class,"pt-1.5")]';
        this.addWorkExpBtn = '//button[contains(text(),"Add Work Experience")]';
        this.companyName = '//input[@name="companyname"]';
        this.companyPosition = '//input[@name="position"]';
        this.companyProfile = '//input[@name="profile"]';
        this.companySalary = '//input[@name="salary"]';
        this.companyType = '//input[@name="companytype"]';
        this.stratDate = '//input[@name="fromdate"]';
        this.endDate = '//input[@name="enddate"]';
        this.saveBtn = '//button[@type="submit"]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
    }

    async enterWorkExperience(){
        await this.page.click(this.workExpBtn);
        await this.page.click(this.addWorkExpBtn);
        await this.page.fill(this.companyName,'LTIMindtree');
        await this.page.fill(this.companyPosition,'Quality Engineer');
        await this.page.fill(this.companyProfile,'QA');
        await this.page.fill(this.companySalary,'4LPA');
        await this.page.fill(this.companyType,'IT Sector');
        await this.page.fill(this.stratDate,'26/09/2023');
        await this.page.fill(this.endDate,'11/11/2024');
        await this.page.click(this.saveBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }
}