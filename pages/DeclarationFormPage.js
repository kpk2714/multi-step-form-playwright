import { expect } from "allure-playwright";

export class DeclarationFormPage{
    constructor(page){
        this.page = page;
        this.declarationBtn = '//h3[contains(text(),"Declarations")]';
        this.declare1 = '//input[@name="declare1"]';
        this.declare2 = '//input[@name="declare2"]';
        this.saveBtn = '//button[contains(text(),"Submit")]';
        this.successMessage = '//p[contains(text(),"Documents Uploadded")]';
    }

    async declareForm(){
        await this.page.click(this.declarationBtn);
        await this.page.click(this.declare1);
        await this.page.click(this.declare2);
        await this.page.click(this.saveBtn);
    }
}