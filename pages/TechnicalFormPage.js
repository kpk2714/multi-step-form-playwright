import { expect } from "allure-playwright";

export class TechnicalSkillPage{
    constructor(page){
        this.page = page;
        this.technicalSkillBtn = '//h3[contains(text(),"Technical Skills") and starts-with(@class,"pt-1.5")]';
        this.addSkillBtn = '//button[contains(text(),"Add Skill")]';
        this.certificateName = '//input[@name="nameofCertification"]';
        this.technicalSkill = '//input[@name="technicalskills"]';
        this.institute = '//input[@name="institute"]';
        this.duration = '//input[@name="duration"]';
        this.category = '//input[@name="category"]';
        this.certificatePresent = '//input[@name="certification"]';
        this.saveBtn = '//button[@type="submit"]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
    }

    async enterTechnicalSkill(){
        await this.page.click(this.technicalSkillBtn);
        await this.page.click(this.addSkillBtn);
        await this.page.fill(this.certificateName,'Core Java');
        await this.page.fill(this.technicalSkill,'Java');
        await this.page.fill(this.institute,'Internshala');
        await this.page.fill(this.duration,'4 Months');
        await this.page.fill(this.category,'Technical Language');
        await this.page.fill(this.certificatePresent,'Yes');
        await this.page.click(this.saveBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }
}