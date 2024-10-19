/// <reference types="cypress" />
describe('Automation Test Login All Process', () => {
    it('All Process Shopping', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('#signin2').click();
        //cy.get('#sign-username').should('be.visible');
        cy.get('#sign-username').type('shoppingyuuuk');
        cy.get('#sign-password').type('shoppingeveryday');
        cy.get('button[class="btn btn-primary"]').should('be.visible');
        cy.get('button[onclick="register()"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successfull');
          });
        cy.get('.navbar-brand').should('be.visible')
        
    })    
  
})