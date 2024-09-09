import { expect } from "allure-playwright";

export class DocumentFormPage{
    constructor(page){
        this.page = page;
        this.documentBtn = '//h3[contains(text(),"Documents Upload")]';
        this.proofOfAgeBtn = '//h2[contains(text(),"Proof of Age")]';
        this.proofOfAgeInput = '//input[@name="proof-of-age"]';
        this.proofOfAgeUpload = '(//small[contains(text(),"Upload")])[1]';
        this.dlBtn = '//h2[contains(text(),"Driving License")]';
        this.dlInput = '//input[@name="driving-license"]';
        this.dlUpload = '(//small[contains(text(),"Upload")])[2]';
        this.passportBtn = '//h2[contains(text(),"Passport")]';
        this.passportInput = '//input[@name="passport"]';
        this.passportUpload = '(//small[contains(text(),"Upload")])[3]';
        this.pancardBtn = '//h2[contains(text(),"Pan Card")]';
        this.pancardInput = '//input[@name="pancard"]';
        this.pancardUpload = '(//small[contains(text(),"Upload")])[4]';
        this.aadharBtn = '//h2[contains(text(),"Aadhar Card")]';
        this.aadharInput = '//input[@name="aadhar-card"]';
        this.aadharUpload = '(//small[contains(text(),"Upload")])[5]';
        this.sscBtn = '//h2[contains(text(),"SSC Marksheet")]';
        this.sscInput = '//input[@name="ssc-marksheet"]';
        this.sscUpload = '(//small[contains(text(),"Upload")])[6]';
        this.hscBtn = '//h2[contains(text(),"HSC Marksheet")]';
        this.hscInput = '//input[@name="hsc-marksheet"]';
        this.hscUpload = '(//small[contains(text(),"Upload")])[7]';
        this.degreeMarksheetBtn = '//h2[contains(text(),"Degree Marksheet")]';
        this.degreeMarksheetInput = '//input[@name="degree-marksheet"]';
        this.degreeMarksheetUpload = '(//small[contains(text(),"Upload")])[8]';
        this.degreeProvisionalBtn = '(//h2[contains(text(),"Degree Provisional")])[1]';
        this.degreeProvisionalInput = '//input[@name="degree-provisional-or-passing"]';
        this.degreeProvisionalUpload = '(//small[contains(text(),"Upload")])[9]';
        this.postDegreeBtn = '//h2[contains(text(),"Post Degree Marksheet")]';
        this.postDegreeInput = '//input[@name="post-degree-marksheet"]';
        this.postDegreeUpload = '(//small[contains(text(),"Upload")])[10]';
        this.postDegreeProvisionalBtn = '//h2[contains(text(),"Post Degree Provisional")]';
        this.postDegreeProvisionalInput = '//input[@name="post-degree-provisional-or-passing"]';
        this.postDegreeProvisionalUpload = '(//small[contains(text(),"Upload")])[11]';
        this.diplomaBtn = '//h2[contains(text(),"Diploma Marksheet")]';
        this.diplomaInput = '//input[@name="diploma-marksheet"]';
        this.diplomaUpload = '(//small[contains(text(),"Upload")])[12]';
        this.diplomaProvisionalBtn = '//h2[contains(text(),"Diploma Provisional")]';
        this.diplomaProvisionalInput = '//input[@name="diploma-provisional-or-passing"]';
        this.diplomaProvisionalUpload = '(//small[contains(text(),"Upload")])[13]';
        this.saveBtn = '//button[contains(text(),"View Document Summary")]';
        this.successMessage = '//p[contains(text(),"Documents Uploadded")]';
    }

    async uploadDocument(){
        await this.page.click(this.documentBtn);
        await this.page.click(this.proofOfAgeBtn);
        await this.page.setInputFiles(this.proofOfAgeInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.proofOfAgeUpload);
        await this.page.click(this.dlBtn);
        await this.page.setInputFiles(this.dlInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.dlUpload);
        await this.page.click(this.passportBtn);
        await this.page.setInputFiles(this.passportInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.passportUpload);
        await this.page.click(this.pancardBtn);
        await this.page.setInputFiles(this.pancardInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.pancardUpload);
        await this.page.click(this.aadharBtn);
        await this.page.setInputFiles(this.aadharInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.aadharUpload);
        await this.page.click(this.sscBtn);
        await this.page.setInputFiles(this.sscInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.sscUpload);
        await this.page.click(this.hscBtn);
        await this.page.setInputFiles(this.hscInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.hscUpload);
        await this.page.click(this.degreeMarksheetBtn);
        await this.page.setInputFiles(this.degreeMarksheetInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.degreeMarksheetUpload);
        await this.page.click(this.degreeProvisionalBtn);
        await this.page.setInputFiles(this.degreeProvisionalInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.degreeProvisionalUpload);
        await this.page.click(this.postDegreeBtn);
        await this.page.setInputFiles(this.postDegreeInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.postDegreeUpload);
        await this.page.click(this.postDegreeProvisionalBtn);
        await this.page.setInputFiles(this.postDegreeProvisionalInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.postDegreeProvisionalUpload);
        await this.page.click(this.diplomaBtn);
        await this.page.setInputFiles(this.diplomaInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.diplomaUpload);
        await this.page.click(this.diplomaProvisionalBtn);
        await this.page.setInputFiles(this.diplomaProvisionalInput,'C:/Users/hp/OneDrive/Desktop/AngularProject/Resume/Krishna_Pada_Kar.pdf');
        await this.page.click(this.diplomaProvisionalUpload);
        await this.page.click(this.saveBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Documents Uploadded');
    }
}