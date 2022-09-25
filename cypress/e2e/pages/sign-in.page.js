class signInPage {

    visitPage () {
        cy.visit('https://portal.telnyx.com/#/login/sign-in');
        cy.url().should('eq', 'https://portal.telnyx.com/#/login/sign-in');
    }

    get emailField () {
        return cy.xpath("/html/body/ui-view/react-login/div[2]/div[2]/div[3]/form/div[1]/div[1]/label/div/div[1]/input");
    }

    get passField () {
        return cy.xpath("//*[@aria-label='loginForm']/div/div[2]/label/div/div[1]");
    }

    submitClick () {
        cy.xpath("//*[@aria-label='loginForm']/button").click();
        cy.xpath("//*[@type='error']/div").should('to.exist',);
    }

    logoClick () {
        cy.xpath("//*[@data-testid='login']/div/a/img");
        cy.url().should('eq', 'https://telnyx.com/')
    }
}

export default new signInPage ();