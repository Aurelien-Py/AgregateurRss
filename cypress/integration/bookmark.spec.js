describe('Bookmark Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

 

    it('click on hamburger and Favoris', () => {
        cy.wait(2000);
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Favoris').click();
        cy.wait(2000);
    });

    it('refresh page', () =>{
        cy.get('.ion-page')
        .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
        .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
        .trigger('mouseup')
        });

});
