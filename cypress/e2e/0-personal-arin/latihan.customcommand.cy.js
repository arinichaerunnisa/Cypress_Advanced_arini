/// <reference types="cypress" /> 
describe('working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });
    it('should fill username', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    })
    it('should fill password', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name=user_password]').clear()
        cy.get('input[name=user_password]').type('password')
    })
    it('should activate checkbox keep me signed in', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name=user_remember_me').check()
        cy.get('input[name=user_remember_me').should('be.checked')
    })
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)

            cy.get('#online_statements_tab').should('contain.text', 'Online Statements')
           

        })
        })
    })
