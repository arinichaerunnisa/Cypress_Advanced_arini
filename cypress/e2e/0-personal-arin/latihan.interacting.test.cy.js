/// <reference types="cypress" /> 

describe('browser actions', () => {
    it ('should load book website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000})
        cy.url.apply().should('include', 'index.html') 
    })
    it ('should click on mystery category', () => {
        cy.visit('https://books.toscrape.com/')
        cy.get('a').contains('Mystery').click()
        cy.get('h1').contains('Mystery')
        
    })
})