describe('Bookmark Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

 

    it('click on hamburger and Favoris', () => {
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Favoris').click();
    });

});
