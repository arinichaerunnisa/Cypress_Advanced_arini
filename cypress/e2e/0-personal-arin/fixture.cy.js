/// <reference types="cypress" /> 
describe('working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
            cy.get('input[name=user_password]').type(password)
            
            cy.get('input[name=user_remember_me').check()
            cy.get('input[name=user_remember_me').should('be.checked')
            
            cy.get('input[name="submit"]').click()
            cy.get('.brand').should('contain.text', 'Zero Bank')

    })
        })
          
})