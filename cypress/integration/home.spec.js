describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('successfully loads', () => {
        cy.contains('Floux');
    });

    it('click on hamburger', () => {
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
    });
});