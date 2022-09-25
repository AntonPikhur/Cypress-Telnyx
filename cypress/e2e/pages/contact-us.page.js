class contactUsPage {

    visitPage () {
        cy.visit('https://telnyx.com/contact-us');
        cy.url().should('eq', 'https://telnyx.com/contact-us');
    }

    get reasonDDMenu () {
        return cy.xpath("//*[@id='Reason_for_Contact__c']");
    }

    get frstNameField () {
        return cy.xpath("//*[@id='FirstName']");
    }

    get lstNameFeild () {
        return cy.xpath("//*[@id='LastName']");
    }

    get emailField () {
        return cy.xpath("//*[@id='Email']");
    }

    get phoneCountry () {
        return cy.xpath("//*[@id='Phone_Number_Extension__c']");
    }

    get phoneBase () {
        return cy.xpath("//*[@id='Phone_Number_Base__c']");
    }

    get webSiteField () {
        return cy.xpath("//*[@id='Website']");
    }

    get addInfoField () {
        return cy.xpath("//*[@id='Form_Additional_Information__c']");
    }

    submitClick () {
        cy.xpath("//*[@id='mktoForm_1987']/div[12]/span/button").click();
        cy.url().should('include','telnyx.com/thank-you')
    }

    get primInt () {
        return cy.xpath("//*[@id='Use_Case_Form__c']");
    }
}

export default new contactUsPage ();