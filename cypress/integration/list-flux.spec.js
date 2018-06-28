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
        cy.get('.text-input').first().click()
            .type('Le monde');
        cy.get('.text-input').eq(1).click()
            .type('https://www.lemonde.fr/rss/une.xml');
        cy.get('.item-cover').click();       
        cy.contains('Informatique').click();
        cy.get('.button-inner');
        cy.contains('OK').click();
        cy.contains('Créer').click();
        cy.wait(2000);
        cy.get('.bar-button-menutoggle').click();
        cy.get('.menu-inner').should('be.visible');
        cy.get('.item-inner').should('be.visible');
        cy.contains('Accueil').click();
        


        it('refresh page', () =>{
            cy.get('.ion-page')
            .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
            .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
            .trigger('mouseup')
            });
    }); 
});