describe('Category Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

 

    it('click on hamburger and Catégorie', () => {
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Catégorie').click();
        cy.wait(1000);

        cy.contains('Catégorie');
        cy.contains('Informatique');
        cy.contains('Cuisine');

        cy.get('.bar-button-clear').click();
        cy.wait(1000);
        cy.get('.text-input[type=text]')
            .type('Programmation')
        cy.get('.button-block').click();

        cy.contains('Programmation');
        
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.wait(1000);
        cy.contains('Accueil').click();
        cy.wait(1000);
        cy.get('.bar-button-clear').click();
        cy.get('.item-cover').click();
        cy.wait(1000);
        cy.contains('Programmation');
        cy.wait(1000);
        cy.contains('Cancel').click();
        cy.get('.bar-button-end').click();

    });

    it('Suppr category', () =>{
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Catégorie').click();
        cy.wait(1000);
        /*cy.get('.ion-page')
        .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
        .trigger('mousemove', {which: 1, pageX: 100, pageY: 100})
        .trigger('mouseup')*/
    });
});