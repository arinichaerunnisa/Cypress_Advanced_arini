/// <reference types="cypress" /> 
describe('working with inputs with custom command', () => {
    it('login and payment', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        
        cy.login('username', 'password')       

        cy.get('.brand').should('contain.text', 'Zero Bank')

        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'pay-bills.html')
        cy.get('#pay_bills_tab').click()
        cy.get('.board-header').should('have.text', 'Make payments to your saved payees')
        
        cy.payment('payment')

        cy.get('#pay_saved_payees').click()        

     })

})