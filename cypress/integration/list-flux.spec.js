describe('List-flux Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

 

    it('click on hamburger and liste flux', () => {
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Liste flux').click();
        cy.contains('Journal du Hacker');
        cy.contains('Korben');
        cy.contains('Marmiton');
        cy.get('.bar-button-clear').click();
    });

    it('Add flux', () => {
        cy.get('.bar-button-clear').click();
    });

    

});