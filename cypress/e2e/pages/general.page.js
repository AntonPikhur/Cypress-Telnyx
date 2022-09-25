class generalPage {

    cookieAccept() {
        cy.get('[aria-label="close and deny"]~div>div>button').if('visible').click()
    }

}

export default new generalPage();