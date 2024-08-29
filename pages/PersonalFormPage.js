import { expect } from "allure-playwright";
import { stat } from "fs";

export class PersonalFormPage{
    constructor(page){
        this.page = page;
        this.profilepicture = '//input[@name="profile-picture"]';
        this.uploadBtn = '//button[contains(text(),"Upload File")]';
        this.title = '//select[@name="title"]';
        this.firstname = '//input[@name="firstname"]';
        this.middlename = '//input[@name="middlename"]';
        this.lastname = '//input[@name="lastname"]';
        this.gender = '//select[@name="gender"]';
        this.dob = '//input[@name="dob"]';
        this.email = '//input[@name="email"]';
        this.alteremail = '//input[@name="alteremail"]';
        this.mobile = '//input[@name="mobile"]';
        this.altermobile = '//input[@name="altermobile"]';
        this.relation = '//input[@name="relation"]';
        this.relationpersonname = '//input[@name="relationpersonname"]';
        this.relationpersonnumber = '//input[@name="relationpersonmobile"]';
        this.nationality = '//select[@name="nationality"]';
        this.citizen = '//select[@name="citizen"]';
        this.state = '//select[@name="state"]';
        this.district = '//input[@name="district"]';
        this.blood = '//select[@name="blood"]';
        this.religion = '//select[@name="religion"]';
        this.reservation = '//select[@name="reservation"]';
        this.aadhar = '//input[@name="aadhar"]';
        this.maritalstatus = '//select[@name="marital"]';
        this.drivingLicense = '//input[@name="drivinglicense" and @value="true"]';
        this.dlNumber = '//input[@name="drivinglicensenumber"]';
        this.dlName = '//input[@name="drivinglicensename"]';
        this.dlPlace = '//input[@name="drivinglicenseplace"]';
        this.pancard = '//input[@name="pancard" and @value="true"]';
        this.pancardNumber = '//input[@name="pancardnumber"]';
        this.pancardName = '//input[@name="pancardname"]';
        this.pancardPlace = '//input[@name="pancardplace"]';
        this.votercard = '//input[@name="votercard" and @value="true"]';
        this.votercardNumber = '//input[@name="votercardnumber"]';
        this.votercardName = '//input[@name="votercardname"]';
        this.votercardPlace = '//input[@name="votercardplace"]';
        this.passport = '//input[@name="passport" and @value="true"]';
        this.passportNumber = '//input[@name="passportnumber"]';
        this.passportName = '//input[@name="passportname"]';
        this.passportPlace = '//input[@name="passportplace"]';
        this.addressline1 = '//input[@name="address1"]';
        this.addressline2 = '//input[@name="address2"]';
        this.landmark = '//input[@name="landmark"]';
        this.country = '//select[@name="country"]';
        this.mailingstate = '//select[@name="mailingstate"]';
        this.mailingdistrict = '//input[@name="mailingdistrict"]';
        this.city = '//input[@name="city"]';
        this.postalcode = '//input[@name="postalcode"]';
        this.submitBtn = '//button[contains(text(),"Save")]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
        this.editBtn = '//button[contains(text(),"Edit")]';
        this.updateMessage = '//p[contains(text(),"Data Updated Successfully !!!")]';
    }

    async enterPersonalFormData(){
        await this.page.setInputFiles(this.profilepicture,'C:/Users/hp/OneDrive/Desktop/Angular/kk.jpg');
        await this.page.click(this.uploadBtn);
        await this.page.locator(this.title).selectOption('Mr.');
        await this.page.fill(this.firstname,'Krishna');
        await this.page.fill(this.middlename,'Pada');
        await this.page.fill(this.lastname,'Kar');
        await this.page.locator(this.gender).selectOption('Male');
        await this.page.fill(this.dob,'2024-08-01');
        await this.page.fill(this.email,'krishnapadakarkarrah@gmail.com');
        await this.page.fill(this.alteremail,'krishnapadakar05@gmail.com');
        await this.page.fill(this.mobile,'8016199839');
        await this.page.fill(this.altermobile,'6296395758');
        await this.page.fill(this.relation,'Mother');
        await this.page.fill(this.relationpersonname,'Ruma Kar');
        await this.page.fill(this.relationpersonnumber,'8016198578');
        await this.page.locator(this.nationality).selectOption('Indian');
        await this.page.locator(this.citizen).selectOption('Permanent Resident');
        await this.page.locator(this.state).selectOption('West Bengal');
        await this.page.fill(this.district,'Bankura');
        await this.page.locator(this.blood).selectOption('O Positive');
        await this.page.locator(this.religion).selectOption('Hinduism');
        await this.page.locator(this.reservation).selectOption('Other Backward Classes');
        await this.page.fill(this.aadhar,'376923169053');
        await this.page.locator(this.maritalstatus).selectOption('UnMarried');
        await this.page.click(this.drivingLicense);
        await this.page.fill(this.dlNumber,'DRIV1234');
        await this.page.fill(this.dlName,'Krishna Pada Kar');
        await this.page.fill(this.dlPlace,'West Bengal');
        await this.page.click(this.pancard);
        await this.page.fill(this.pancardNumber,'IHRPK1250A');
        await this.page.fill(this.pancardName,'Krishna Pada Kar');
        await this.page.fill(this.pancardPlace,'West Bengal');
        await this.page.click(this.votercard);
        await this.page.fill(this.votercardNumber,'RNG12231');
        await this.page.fill(this.votercardName, 'Krishna Pada Kar');
        await this.page.fill(this.votercardPlace,'West Bengal');
        await this.page.click(this.passport);
        await this.page.fill(this.passportNumber,'PASS12231');
        await this.page.fill(this.passportName,'Krishna Pada Kar');
        await this.page.fill(this.passportPlace , 'West Bengal');
        await this.page.fill(this.addressline1,'Karrah , Chhatna , Bankura');
        await this.page.fill(this.addressline2,'Karrah , 722132');
        await this.page.fill(this.landmark,'Near Karrah Junior High School');
        await this.page.locator(this.country).selectOption('India');
        await this.page.locator(this.mailingstate).selectOption('West Bengal');
        await this.page.fill(this.mailingdistrict,'Bankura');
        await this.page.fill(this.city,'Chhatna');
        await this.page.fill(this.postalcode,'722132');
        await this.page.click(this.submitBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }

    async uploadImage(){
        await this.page.setInputFiles(this.profilepicture,'C:/Users/hp/OneDrive/Desktop/Angular/kk.jpg');
        await this.page.click(this.uploadBtn);
    }

    async editPersonalData(){
        await this.page.setInputFiles(this.profilepicture,'C:/Users/hp/OneDrive/Desktop/Angular/kk.jpg');
        await this.page.click(this.uploadBtn);
        await this.page.fill(this.middlename,'Pada');
        await this.page.click(this.editBtn);
    }

    async verifyUpdateMessage(){
        const message = await this.page.locator(this.updateMessage);
        await expect(message).toHaveText('Data Updated Successfully !!!');
    }
}