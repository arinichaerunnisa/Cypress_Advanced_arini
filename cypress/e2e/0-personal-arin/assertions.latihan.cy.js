/// <reference types="cypress" /> 

describe('browser action', () => {
    it('Should load correct url', () => {
        cy.visit('https://example.com/', {timeout : 10000})
    });
    it('Should check correct url', () => {
        cy.visit('https://example.com/')
        cy.url().should('include', 'example.com')
    });
});