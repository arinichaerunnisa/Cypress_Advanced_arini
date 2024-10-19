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

    it('should try to login and do payment', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)

            cy.get('#online_statements_tab').should('contain.text', 'Online Statements')

            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
            cy.url().should('include', 'pay-bills.html')
            cy.get('#pay_bills_tab').click()
            cy.get('.board-header').should('have.text', 'Make payments to your saved payees')
            
            cy.get('.span4').should('have.value', 'sprint')
            cy.get('#sp_account').should('have.value', '1')
            cy.get('#sp_amount').type('30.000')
            cy.get('#sp_date').type('2024-07-09')
            cy.get('#sp_description').type('house payment',  {force: true})

            cy.get('#pay_saved_payees').click()
            cy.get('span[title="$ 30.000 payed to payee sprint"]').should('have.text', 'The payment was successfully submitted.')


        })
        })

       

    
})