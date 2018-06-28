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

    it('click on a feed', () => {
            cy.get('.box-shadow').first().click();
            cy.contains('link');
    });

    it('Add feed to bookmarks', () => {
        cy.get('.box-shadow').first().click();
        cy.contains('link');
        cy.get('#btnFavoris').click();
        
});

it('Add feed to bookmarks', () => {
    cy.get('.bar-button-menutoggle').click();
    cy.get('.menu-inner').should('be.visible');
    cy.contains('Favoris').click();
    cy.wait(3000);
    
});
    
    it('refresh page', () =>{
    cy.get('.ion-page')
    .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
    .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
    .trigger('mouseup')
    });
});