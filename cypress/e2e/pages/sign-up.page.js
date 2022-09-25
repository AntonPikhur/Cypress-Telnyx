class signUpPage {
    
    visitPage () {
    cy.visit('https://telnyx.com/sign-up');
    cy.url().should('eq', 'https://telnyx.com/sign-up');
    }

    get emailField () {
        return cy.get('#email');
    }

    get nameField () {
        return cy.get('#full_name');
    }

    get passField () {
        return cy.get('#password');
    }

    get termsAccept () {
        return cy.get('.ilzycq>div >div>div');
    }

    submitClick () {
        cy.get('.jdjrgE').click();
        cy.wait(20000);
        cy.url().should('include', '/sign-up/verify-email/');
    }

    logoClick () {
        cy.get('.fkpNi').click();
        cy.url().should('eq', 'https://telnyx.com/');
    }
}

export default new signUpPage();