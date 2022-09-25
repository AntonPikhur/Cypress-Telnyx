class waitlistPage {

    visitPage () {
        cy.visit('https://telnyx.com/products/storage#form');
        cy.url().should('eq', 'https://telnyx.com/products/storage#form');
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

    get addInfoField () {
        return cy.xpath("//*[@id='Form_Additional_Information__c']");
    }

    submitClick () {
        cy.xpath("//*[@id='mktoForm_2272']/div[6]/span/button").click();
        cy.url().should('eq', 'https://telnyx.com/products/storage-waitlist');
    }
    
}

export default new waitlistPage ();