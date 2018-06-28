describe('Category Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

 

    it('click on hamburger and Catégorie', () => {
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Catégorie').click();
        cy.contains('Catégorie');
        cy.contains('Informatique');
        cy.contains('Cuisine');

    });

});