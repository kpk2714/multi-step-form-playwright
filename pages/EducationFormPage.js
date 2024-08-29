import { expect } from "allure-playwright";

export class EducationFormPage{
    constructor(page){
        this.page = page;
        this.educationBtn = '//h3[starts-with(@class,"pt-1.5") and contains(text(),"Education Details")]';
        this.addEducationBtn = '//button[contains(text(),"Add Education")]';
        this.secRadio = '//input[@name="secondary" and @value="true"]';
        this.hsRadio = '//input[@name="highersecondary" and @value="true"]';
        this.diplomaRadio = '//input[@name="diploma" and @value="true"]';
        this.graduationRadio = '//input[@name="graduation" and @value="true"]';

        this.secDegree = '//select[@name="secdegree"]';
        this.secDuration = '//input[@name="secduration"]';
        this.secStartDate = '//input[@name="secstartdate"]';
        this.secEndDate = '//input[@name="secenddate"]';
        this.secSchool = '//input[@name="secschool"]';
        this.secBoard = '//input[@name="secboard"]';
        this.secBranch = '//select[@name="secbranch"]';
        this.secTotalScore = '//input[@name="sectotalscore"]';
        this.secTotalMarks = '//input[@name="sectotalmarks"]';
        this.secPercentage = '//input[@name="secpercentage"]';
        this.secSchoolState = '//input[@name="secschoolstate"]';
        this.secSchoolCity = '//input[@name="secschoolcity"]';
        this.secSubject1Name = '//input[@name="secsubject1name"]';
        this.secSubject1Marks = '//input[@name="secsubject1marks"]';
        this.secSubject2Name = '//input[@name="secsubject2name"]';
        this.secSubject2Marks = '//input[@name="secsubject2marks"]';
        this.secSubject3Name = '//input[@name="secsubject3name"]';
        this.secSubject3Marks = '//input[@name="secsubject3marks"]';
        this.secSubject4Name = '//input[@name="secsubject4name"]';
        this.secSubject4Marks = '//input[@name="secsubject4marks"]';
        this.secSubject5Name = '//input[@name="secsubject5name"]';
        this.secSubject5Marks = '//input[@name="secsubject5marks"]';
        this.secSubject6Name = '//input[@name="secsubject6name"]';
        this.secSubject6Marks = '//input[@name="secsubject6marks"]';
        this.secSubject7Name = '//input[@name="secsubject7name"]';
        this.secSubject7Marks = '//input[@name="secsubject7marks"]';
        this.secSubject8Name = '//input[@name="secsubject8name"]';
        this.secSubject8Marks = '//input[@name="secsubject8marks"]';

        this.hsDegree = '//select[@name="highsecdegree"]';
        this.hsDuration = '//input[@name="highsecduration"]';
        this.hsStartDate = '//input[@name="highsecstartdate"]';
        this.hsEndDate = '//input[@name="highsecenddate"]';
        this.hsSchool = '//input[@name="highsecschool"]';
        this.hsBoard = '//input[@name="highsecboard"]';
        this.hsBranch = '//select[@name="highsecbranch"]';
        this.hsTotalScore = '//input[@name="highsectotalscore"]';
        this.hsTotalMarks = '//input[@name="highsectotalmarks"]';
        this.hsPercentage = '//input[@name="highsecpercentage"]';
        this.hsState = '//input[@name="highsecschoolstate"]';
        this.hsCity = '//input[@name="highsecschoolcity"]';
        this.hsSubject1Name = '//input[@name="highsecsubject1name"]';
        this.hsSubject1Marks = '//input[@name="highsecsubject1marks"]';
        this.hsSubject2Name = '//input[@name="highsecsubject2name"]';
        this.hsSubject2Marks = '//input[@name="highsecsubject2marks"]';
        this.hsSubject3Name = '//input[@name="highsecsubject3name"]';
        this.hsSubject3Marks = '//input[@name="highsecsubject3marks"]';
        this.hsSubject4Name = '//input[@name="highsecsubject4name"]';
        this.hsSubject4Marks = '//input[@name="highsecsubject4marks"]';
        this.hsSubject5Name = '//input[@name="highsecsubject5name"]';
        this.hsSubject5Marks = '//input[@name="highsecsubject5marks"]';
        this.hsSubject6Name = '//input[@name="highsecsubject6name"]';
        this.hsSubject6Marks = '//input[@name="highsecsubject6marks"]';

        this.diplomaDegree = '//select[@name="diplomadegree"]';
        this.diplomaDuration = '//input[@name="diplomaduration"]';
        this.diplomaStartDate = '//input[@name="diplomastartdate"]';
        this.diplomaEndDate = '//input[@name="diplomaenddate"]';
        this.diplomaSchool = '//input[@name="diplomaschool"]';
        this.diplomaBoard = '//input[@name="diplomaboard"]';
        this.diplomaBranch = '//input[@name="diplomabranch"]';
        this.diplomaCgpa = '//input[@name="diplomacgpa"]';
        this.diplomaPercentage = '//input[@name="diplomapercentage"]';
        this.diplomaState = '//input[@name="diplomaschoolstate"]';
        this.diplomaCity = '//input[@name="diplomaschoolcity"]';
        this.diplomaSemester1Sgpa = '//input[@name="diplomasemester1sgpa"]';
        this.diplomaSemester1Cgpa = '//input[@name="diplomasemester1cgpa"]';
        this.diplomaSemester1Backlog = '//input[@name="diplomasemester1backlog"]';
        this.diplomaSemester1Percentage = '//input[@name="diplomasemester1percentage"]';
        this.diplomaSemester2Sgpa = '//input[@name="diplomasemester2sgpa"]';
        this.diplomaSemester2Cgpa = '//input[@name="diplomasemester2cgpa"]';
        this.diplomaSemester2Backlog = '//input[@name="diplomasemester2backlog"]';
        this.diplomaSemester2Percentage = '//input[@name="diplomasemester2percentage"]';
        this.diplomaSemester3Sgpa = '//input[@name="diplomasemester3sgpa"]';
        this.diplomaSemester3Cgpa = '//input[@name="diplomasemester3cgpa"]';
        this.diplomaSemester3Backlog = '//input[@name="diplomasemester3backlog"]';
        this.diplomaSemester3Percentage = '//input[@name="diplomasemester3percentage"]';
        this.diplomaSemester4Sgpa = '//input[@name="diplomasemester4sgpa"]';
        this.diplomaSemester4Cgpa = '//input[@name="diplomasemester4cgpa"]';
        this.diplomaSemester4Backlog = '//input[@name="diplomasemester4backlog"]';
        this.diplomaSemester4Percentage = '//input[@name="diplomasemester4percentage"]';
        this.diplomaSemester5Sgpa = '//input[@name="diplomasemester5sgpa"]';
        this.diplomaSemester5Cgpa = '//input[@name="diplomasemester5cgpa"]';
        this.diplomaSemester5Backlog = '//input[@name="diplomasemester5backlog"]';
        this.diplomaSemester5Percentage = '//input[@name="diplomasemester5percentage"]';
        this.diplomaSemester6Sgpa = '//input[@name="diplomasemester6sgpa"]';
        this.diplomaSemester6Cgpa = '//input[@name="diplomasemester6cgpa"]';
        this.diplomaSemester6Backlog = '//input[@name="diplomasemester6backlog"]';
        this.diplomaSemester6Percentage = '//input[@name="diplomasemester6percentage"]';

        this.graduationDegree = '//select[@name="graduationdegree"]';
        this.graduationDuration = '//input[@name="graduationduration"]';
        this.graduationStartDate = '//input[@name="graduationstartdate"]';
        this.graduationEndDate = '//input[@name="graduationenddate"]';
        this.graduationSchool = '//input[@name="graduationschool"]';
        this.graduationBoard = '//input[@name="graduationboard"]';
        this.graduationBranch = '//input[@name="graduationbranch"]';
        this.graduationCgpa = '//input[@name="graduationcgpa"]';
        this.graduationPercentage = '//input[@name="graduationpercentage"]';
        this.graduationState = '//input[@name="graduationschoolstate"]';
        this.graduationCity = '//input[@name="graduationschoolcity"]';
        this.graduationSemester1Sgpa = '//input[@name="graduationsemester1sgpa"]';
        this.graduationSemester1Cgpa = '//input[@name="graduationsemester1cgpa"]';
        this.graduationSemester1Backlog = '//input[@name="graduationsemester1backlog"]';
        this.graduationSemester1Percentage = '//input[@name="graduationsemester1percentage"]';
        this.graduationSemester2Sgpa = '//input[@name="graduationsemester2sgpa"]';
        this.graduationSemester2Cgpa = '//input[@name="graduationsemester2cgpa"]';
        this.graduationSemester2Backlog = '//input[@name="graduationsemester2backlog"]';
        this.graduationSemester2Percentage = '//input[@name="graduationsemester2percentage"]';
        this.graduationSemester3Sgpa = '//input[@name="graduationsemester3sgpa"]';
        this.graduationSemester3Cgpa = '//input[@name="graduationsemester3cgpa"]';
        this.graduationSemester3Backlog = '//input[@name="graduationsemester3backlog"]';
        this.graduationSemester3Percentage = '//input[@name="graduationsemester3percentage"]';
        this.graduationSemester4Sgpa = '//input[@name="graduationsemester4sgpa"]';
        this.graduationSemester4Cgpa = '//input[@name="graduationsemester4cgpa"]';
        this.graduationSemester4Backlog = '//input[@name="graduationsemester4backlog"]';
        this.graduationSemester4Percentage = '//input[@name="graduationsemester4percentage"]';
        this.graduationSemester4Sgpa = '//input[@name="graduationsemester4sgpa"]';
        this.graduationSemester4Cgpa = '//input[@name="graduationsemester4cgpa"]';
        this.graduationSemester4Backlog = '//input[@name="graduationsemester4backlog"]';
        this.graduationSemester4Percentage = '//input[@name="graduationsemester4percentage"]';
        this.graduationSemester5Sgpa = '//input[@name="graduationsemester5sgpa"]';
        this.graduationSemester5Cgpa = '//input[@name="graduationsemester5cgpa"]';
        this.graduationSemester5Backlog = '//input[@name="graduationsemester5backlog"]';
        this.graduationSemester5Percentage = '//input[@name="graduationsemester5percentage"]';
        this.graduationSemester6Sgpa = '//input[@name="graduationsemester6sgpa"]';
        this.graduationSemester6Cgpa = '//input[@name="graduationsemester6cgpa"]';
        this.graduationSemester6Backlog = '//input[@name="graduationsemester6backlog"]';
        this.graduationSemester6Percentage = '//input[@name="graduationsemester6percentage"]';
        this.graduationSemester7Sgpa = '//input[@name="graduationsemester7sgpa"]';
        this.graduationSemester7Cgpa = '//input[@name="graduationsemester7cgpa"]';
        this.graduationSemester7Backlog = '//input[@name="graduationsemester7backlog"]';
        this.graduationSemester7Percentage = '//input[@name="graduationsemester7percentage"]';
        this.graduationSemester8Sgpa = '//input[@name="graduationsemester8sgpa"]';
        this.graduationSemester8Cgpa = '//input[@name="graduationsemester8cgpa"]';
        this.graduationSemester8Backlog = '//input[@name="graduationsemester8backlog"]';
        this.graduationSemester8Percentage = '//input[@name="graduationsemester8percentage"]';

        this.saveBtn = '//button[@type="submit"]';
        this.successMessage = '//p[contains(text(),"Data Saved Successfully !!!")]';
    }

    async enterEducationForm(){
        await this.page.click(this.educationBtn);
        await this.page.click(this.addEducationBtn);
        await this.page.click(this.secRadio);
        await this.page.click(this.hsRadio);
        await this.page.click(this.diplomaRadio);
        await this.page.click(this.graduationRadio);
        await this.page.locator(this.secDegree).selectOption('Secondary');
        await this.page.fill(this.secDuration,'1');
        await this.page.fill(this.secStartDate,'2015-01-01');
        await this.page.fill(this.secEndDate,'2016-03-01');
        await this.page.fill(this.secSchool,'Jhunjhka Madhyamik Vidyalaya');
        await this.page.fill(this.secBoard,'West Bengal Board of Secondary Education');
        await this.page.locator(this.secBranch).selectOption('General');
        await this.page.fill(this.secTotalScore,'628');
        await this.page.fill(this.secTotalMarks,'700');
        await this.page.fill(this.secPercentage,'89.71');
        await this.page.fill(this.secSchoolState,'West Bengal');
        await this.page.fill(this.secSchoolCity,'Bankura');
        await this.page.fill(this.secSubject1Name,'Bengali');
        await this.page.fill(this.secSubject1Marks,'95');
        await this.page.fill(this.secSubject2Name,'English');
        await this.page.fill(this.secSubject2Marks,'92');
        await this.page.fill(this.secSubject3Name,'Mathematics');
        await this.page.fill(this.secSubject3Marks,'91');
        await this.page.fill(this.secSubject4Name,'Physics');
        await this.page.fill(this.secSubject4Marks,'97');
        await this.page.fill(this.secSubject5Name,'Chemistry');
        await this.page.fill(this.secSubject5Marks,'85');
        await this.page.fill(this.secSubject6Name,'Biology');
        await this.page.fill(this.secSubject6Marks,'85');
        await this.page.fill(this.secSubject7Name,'History');
        await this.page.fill(this.secSubject7Marks,'87');
        await this.page.fill(this.secSubject8Name,'Geography');
        await this.page.fill(this.secSubject8Marks,'90');

        await this.page.locator(this.hsDegree).selectOption('Higher Secondary');
        await this.page.fill(this.hsDuration,'1');
        await this.page.fill(this.hsStartDate,'2017-06-01');
        await this.page.fill(this.hsEndDate,'2018-07-01');
        await this.page.fill(this.hsSchool,'Chhatna Chandidas Vidyapith');
        await this.page.fill(this.hsBoard,'West Bengal Council of Higher Secondary Education');
        await this.page.locator(this.hsBranch).selectOption('Science');
        await this.page.fill(this.hsTotalScore,'628');
        await this.page.fill(this.hsTotalMarks,'700');
        await this.page.fill(this.hsPercentage,'85.20');
        await this.page.fill(this.hsState,'West Bengal');
        await this.page.fill(this.hsCity,'Bankura');
        await this.page.fill(this.hsSubject1Name,'Bengali');
        await this.page.fill(this.hsSubject1Marks,'82');
        await this.page.fill(this.hsSubject2Name,'English');
        await this.page.fill(this.hsSubject2Marks,'82');
        await this.page.fill(this.hsSubject3Name,'Mathematics');
        await this.page.fill(this.hsSubject3Marks,'95');
        await this.page.fill(this.hsSubject4Name,'Physics');
        await this.page.fill(this.hsSubject4Marks,'78');
        await this.page.fill(this.hsSubject5Name,'Chemistry');
        await this.page.fill(this.hsSubject5Marks,'82');
        await this.page.fill(this.hsSubject6Name,'Biology');
        await this.page.fill(this.hsSubject6Marks,'84');

        await this.page.locator(this.diplomaDegree).selectOption('Diploma');
        await this.page.fill(this.diplomaDuration,'3');
        await this.page.fill(this.diplomaStartDate,'2016-06-01');
        await this.page.fill(this.diplomaEndDate,'2019-07-01');
        await this.page.fill(this.diplomaSchool,'KG Engineering College');
        await this.page.fill(this.diplomaBoard,'Maulana Abul Kalam Azad University of Technology');
        await this.page.fill(this.diplomaBranch,'ECE');
        await this.page.fill(this.diplomaCgpa,'8.96');
        await this.page.fill(this.diplomaPercentage,'82.10');
        await this.page.fill(this.diplomaState,'West Bengal');
        await this.page.fill(this.diplomaCity,'Bankura');
        await this.page.fill(this.diplomaSemester1Sgpa,'7.09');
        await this.page.fill(this.diplomaSemester1Cgpa,'7.01');
        await this.page.fill(this.diplomaSemester1Backlog,'0');
        await this.page.fill(this.diplomaSemester1Percentage,'62.60');
        await this.page.fill(this.diplomaSemester2Sgpa,'7.25');
        await this.page.fill(this.diplomaSemester2Cgpa,'7.12');
        await this.page.fill(this.diplomaSemester2Backlog,'1');
        await this.page.fill(this.diplomaSemester2Percentage,'63.70');
        await this.page.fill(this.diplomaSemester3Sgpa,'8.23');
        await this.page.fill(this.diplomaSemester3Cgpa,'8.21');
        await this.page.fill(this.diplomaSemester3Backlog,'0');
        await this.page.fill(this.diplomaSemester3Percentage,'74.60');
        await this.page.fill(this.diplomaSemester4Sgpa,'8.23');
        await this.page.fill(this.diplomaSemester4Cgpa,'8.21');
        await this.page.fill(this.diplomaSemester4Backlog,'0');
        await this.page.fill(this.diplomaSemester4Percentage,'74.60');
        await this.page.fill(this.diplomaSemester5Sgpa,'9.52');
        await this.page.fill(this.diplomaSemester5Cgpa,'9.41');
        await this.page.fill(this.diplomaSemester5Backlog,'0');
        await this.page.fill(this.diplomaSemester5Percentage,'86.60');
        await this.page.fill(this.diplomaSemester6Sgpa,'9.64');
        await this.page.fill(this.diplomaSemester6Cgpa,'9.52');
        await this.page.fill(this.diplomaSemester6Backlog,'0');
        await this.page.fill(this.diplomaSemester6Percentage,'87.70');


        await this.page.locator(this.graduationDegree).selectOption('Graduation');
        await this.page.fill(this.graduationDuration,'4');
        await this.page.fill(this.graduationStartDate,'2018-08-01');
        await this.page.fill(this.graduationEndDate,'2022-07-01');
        await this.page.fill(this.graduationSchool,'Govt. College of Engineering & Textile Technology , Serampore');
        await this.page.fill(this.graduationBoard,'Maulana Abul Kalam Azad University of Technology');
        await this.page.fill(this.graduationBranch,'Information Technology');
        await this.page.fill(this.graduationCgpa,'8.95');
        await this.page.fill(this.graduationPercentage,'82.00');
        await this.page.fill(this.graduationState,'West Bengal');
        await this.page.fill(this.graduationCity,'Bankura');
        await this.page.fill(this.graduationSemester1Sgpa,'7.09');
        await this.page.fill(this.graduationSemester1Cgpa,'7.05');
        await this.page.fill(this.graduationSemester1Backlog,'0');
        await this.page.fill(this.graduationSemester1Percentage,'63.00');
        await this.page.fill(this.graduationSemester2Sgpa,'7.10');
        await this.page.fill(this.graduationSemester2Cgpa,'7.07');
        await this.page.fill(this.graduationSemester2Backlog,'1');
        await this.page.fill(this.graduationSemester2Percentage,'63.20');
        await this.page.fill(this.graduationSemester3Sgpa,'8.03');
        await this.page.fill(this.graduationSemester3Cgpa,'7.85');
        await this.page.fill(this.graduationSemester3Backlog,'0');
        await this.page.fill(this.graduationSemester3Percentage,'71.00');
        await this.page.fill(this.graduationSemester4Sgpa,'8.23');
        await this.page.fill(this.graduationSemester4Cgpa,'8.12');
        await this.page.fill(this.graduationSemester4Backlog,'0');
        await this.page.fill(this.graduationSemester4Percentage,'73.70');
        await this.page.fill(this.graduationSemester5Sgpa,'9.02');
        await this.page.fill(this.graduationSemester5Cgpa,'8.85');
        await this.page.fill(this.graduationSemester5Backlog,'0');
        await this.page.fill(this.graduationSemester5Percentage,'81.00');
        await this.page.fill(this.graduationSemester6Sgpa,'9.25');
        await this.page.fill(this.graduationSemester6Cgpa,'9.15');
        await this.page.fill(this.graduationSemester6Backlog,'0');
        await this.page.fill(this.graduationSemester6Percentage,'84.00');
        await this.page.fill(this.graduationSemester7Sgpa,'9.42');
        await this.page.fill(this.graduationSemester7Cgpa,'9.32');
        await this.page.fill(this.graduationSemester7Backlog,'0');
        await this.page.fill(this.graduationSemester7Percentage,'85.70');
        await this.page.fill(this.graduationSemester8Sgpa,'9.64');
        await this.page.fill(this.graduationSemester8Cgpa,'9.52');
        await this.page.fill(this.graduationSemester8Backlog,'0');
        await this.page.fill(this.graduationSemester8Percentage,'87.70');

        await this.page.click(this.saveBtn);
    }

    async verifySuccessMessage(){
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Data Saved Successfully !!!');
    }
}