import { expect } from "allure-playwright";

export class HelpdeskFormPage{
    constructor(page){
        this.page = page;
        this.addRequestBtn = '//p[contains(text(),"Add/View Request")]';
        this.category = '//select[@name="category"]';
        this.description = '//textarea[@name="description"]';
        this.saveBtn = '//button[contains(text(),"Submit")]';
        this.successMessage = '//p[contains(text(),"Query Saved Successfully !!!")]';
        this.viewReportBtn = '//p[contains(text(),"View Report")]';
        this.newQuery = '//p[contains(text(),"Is company giving any accomodation cost ?")]';
    }

    async declareForm(){
        await this.page.click(this.addRequestBtn);
        await this.page.locator(this.category).selectOption('Accomodation/Transportation Related');
        await this.page.fill(this.description,'Is company giving any accomodation cost ?');
        await this.page.click(this.saveBtn);
        await this.page.waitForTimeout(5000);
    }

    async verifyQuerySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Query Saved Successfully !!!');
    }

    async verifyQuery(){
        await this.page.click(this.viewReportBtn);
        const message = await this.page.locator(this.newQuery);
        await expect(message).toHaveText('Is company giving any accomodation cost ?');
    }
}