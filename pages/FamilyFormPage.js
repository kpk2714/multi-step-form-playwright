import { expect } from "allure-playwright";

export class FamilyFormPage{
    constructor(page){
        this.page = page;
        this.familyBtn = '//h3[contains(text(),"Family Details") and starts-with(@class,"pt-1.5")]';
        this.addMemberBtn = '//button[contains(text(),"Add Member")]';
        this.fatherRadio = '//input[@name="father"]';
        this.motherRadio = '//input[@name="mother"]';
        this.wifeHusRadio = '//input[@name="wifeHus" and @value="true"]';
        this.childRadio = '//input[@name="Child" and @value="true"]';

        this.fatherRelationship = '//select[@name="Farelationship"]';
        this.fatherFirstname = '//input[@name="Fafirstname"]';
        this.fatherMiddlename = '//input[@name="Famiddlename"]';
        this.fatherLastname = '//input[@name="Falastname"]';
        this.fatherGender = '//select[@name="Fagender"]';
        this.fatherDob = '//input[@name="Fadobf"]';
        this.fatherNationality = '//select[@name="Fanationality"]';
        this.fatherQualification = '//select[@name="Faqualification"]';

        this.motherRelationship = '//select[@name="Morelationship"]';
        this.motherFirstname = '//input[@name="Mofirstname"]';
        this.motherMiddlename = '//input[@name="Momiddlename"]';
        this.motherLastname = '//input[@name="Molastname"]';
        this.motherGender = '//select[@name="Mogender"]';
        this.motherDob = '//input[@name="Modobf"]';
        this.motherNationality = '//select[@name="Monationality"]';
        this.motherQualification = '//select[@name="Moqualification"]';

        this.wifeHusRelationship = '//select[@name="wifeHusrelationship"]';
        this.wifeHusFirstname = '//input[@name="WifeHusfirstname"]';
        this.wifeHusMiddlename = '//input[@name="WifeHusmiddlename"]';
        this.wifeHusLastname = '//input[@name="WifeHuslastname"]';
        this.wifeHusGender = '//input[@name="WifeHusgender"]';
        this.wifeHusDob = '//input[@name="WifeHusdobf"]';
        this.wifeHusNationality = '//input[@name="WifeHusnationality"]';
        this.wifeHusQualification = '//input[@name="WifeHusqualification"]';

        this.childRelationship = '//select[@name="Childrelationship"]';
        this.childFirstname = '//input[@name="Childfirstname"]';
        this.childMiddlename = '//input[@name="Childmiddlename"]';
        this.childLastname = '//input[@name="Childlastname"]';
        this.childGender = '//input[@name="Childgender"]';
        this.childDob = '//input[@name="Childdobf"]';
        this.childNationality = '//input[@name="Childnationality"]';
        this.childQualification = '//input[@name="Childqualification"]';

        this.submitBtn = '//button[@type="submit"]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
    }

    async enterFamilyData(){
        await this.page.click(this.familyBtn);
        await this.page.click(this.addMemberBtn);
        await this.page.click(this.fatherRadio);
        await this.page.click(this.motherRadio);
        await this.page.click(this.wifeHusRadio);
        await this.page.click(this.childRadio);

        await this.page.locator(this.fatherRelationship).selectOption('Father');
        await this.page.fill(this.fatherFirstname,'Uttam');
        await this.page.fill(this.fatherMiddlename,'Kumar');
        await this.page.fill(this.fatherLastname,'Kar');
        await this.page.locator(this.fatherGender).selectOption('Male');
        await this.page.fill(this.fatherDob,'1972-01-01');
        await this.page.locator(this.fatherNationality).selectOption('Indian');
        await this.page.locator(this.fatherQualification).selectOption('Higher Secondary');

        await this.page.locator(this.motherRelationship).selectOption('Mother');
        await this.page.fill(this.motherFirstname,'Ruma');
        await this.page.fill(this.motherLastname,'Kar');
        await this.page.locator(this.motherGender).selectOption('Female');
        await this.page.fill(this.motherDob,'1984-05-31');
        await this.page.locator(this.motherNationality).selectOption('Indian');
        await this.page.locator(this.motherQualification).selectOption('Secondary');

        await this.page.locator(this.wifeHusRelationship).selectOption('Wife');
        await this.page.fill(this.wifeHusFirstname,'Ami');
        await this.page.fill(this.wifeHusMiddlename,'Jani');
        await this.page.fill(this.wifeHusLastname,'Na');
        await this.page.fill(this.wifeHusGender,'Female');
        await this.page.fill(this.wifeHusDob,'2006-05-31');
        await this.page.fill(this.wifeHusNationality,'Indian');
        await this.page.fill(this.wifeHusQualification,'Higher Secondary');

        await this.page.locator(this.childRelationship).selectOption('Child');
        await this.page.fill(this.childFirstname,'Ami');
        await this.page.fill(this.childMiddlename,'Jani');
        await this.page.fill(this.childLastname,'Na');
        await this.page.fill(this.childGender,'Female');
        await this.page.fill(this.childDob,'2028-05-31');
        await this.page.fill(this.childNationality,'Indian');
        await this.page.fill(this.childQualification,'Do not have');

        await this.page.click(this.submitBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }
}