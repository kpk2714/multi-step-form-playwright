import { expect } from "allure-playwright";

export class LanguageFormPage{
    constructor(page){
        this.page = page;
        this.languageBtn = '//h3[contains(text(),"Languages Known") and starts-with(@class,"pt-1.5")]';
        this.addLanguageBtn = '//button[contains(text(),"Add Language")]';
        this.languageType = '//select[@name="languageType"]';
        this.read = '//select[@name="Read"]';
        this.write = '//select[@name="Write"]';
        this.speak = '//select[@name="Speak"]';
        this.languageCode = '//input[@name="languageCode"]';
        this.saveBtn = '//button[@type="submit"]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
    }

    async enterLanguageData(){
        await this.page.click(this.languageBtn);
        await this.page.click(this.addLanguageBtn);
        await this.page.locator(this.languageType).selectOption('Mother Tongue');
        await this.page.locator(this.read).selectOption('True');
        await this.page.locator(this.write).selectOption('True');
        await this.page.locator(this.speak).selectOption('True');
        await this.page.fill(this.languageCode,'Bengali');
        await this.page.click(this.saveBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }
}