/// <reference types="cypress" />
describe('Automation Test Login All Process', () => {
    it('Sign In', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
        cy.get('#sign-username').should('be.visible')
        cy.get('#sign-username').type('shoppingyuuuk')
        cy.get('#sign-password').type('shoppingeveryday')
        cy.get('button[class="btn btn-primary"]').should('be.visible')
        cy.get('button[onclick="register()"]').click()
        cy.get('.navbar-brand').should('be.visible')
    })    
    
    it('Log in', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.get('#loginusername').type('shoppingyuuuk')
        cy.get('#loginpassword').type('shoppingeveryday')
        cy.get('button[onclick="logIn()"]').click()
        cy.get('a[id="nameofuser"]').should('have.class', 'nav-link')
    })
        
    it('Add to Cart', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('a[href="prod.html?idp_=2"]').next().click()
        // link navbar tidak bisa digunakan cy.url().should('include', 'https://www.demoblaze.com/prod.html?idp_=2')
        cy.get('#tbodyid').contains('Nokia lumia 1520')
        cy.visit('https://www.demoblaze.com/prod.html?idp_=2')
        cy.get('a[onclick="addToCart(2)"]').click()       
        cy.visit('https://www.demoblaze.com')
        cy.get('#cartur').click()
    })
    
    it('Buy from Cart', () => {
        cy.visit('https://www.demoblaze.com')
        cy.get('#cartur').click()
        cy.get('button[class="btn btn-success"]').click()
        cy.get('#name').type('Chaerunnisa Arini')
        cy.get('#country').type('Indonesia')
        cy.get('#city').type('Tangerang')
        cy.get('#card').type('BCA')
        cy.get('#month').type('January')
        cy.get('#year').type('2024')
        cy.get('button[onclick="purchaseOrder()"]').click()
    })
})