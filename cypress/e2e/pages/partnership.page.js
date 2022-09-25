class partnershipPage {

    visitPage () {
        cy.visit('https://telnyx.com/company/partnerships');
        cy.url().should('eq', 'https://telnyx.com/company/partnerships');
        cy.scrollTo('bottom')
    }

    get frstNameField () {
        return cy.xpath("//*[@id='FirstName']");
    }

    get lstNameFeild () {
        return cy.xpath("//*[@id='LastName']");
    }

    get companyFeild () {
        return cy.xpath("//*[@id='Company']");
    }

    get emailField () {
        return cy.xpath("//*[@id='Email']");
    }

    get phoneNmbr () {
        return cy.xpath("//*[@id='Form_Phone__c']");
    }

    get prtnrType () {
        return cy.xpath("//*[@id='Partner_Type__c']");
    }

    get addInfoField () {
        return cy.xpath("//*[@id='Form_Additional_Information__c']");
    }

    submitClick () {
        cy.xpath("//*[@id='mktoForm_2242']/div[9]/span/button").click()
        cy.url().should('include', 'telnyx.com/company/partnerships')
    }
    
}

export default new partnershipPage ();