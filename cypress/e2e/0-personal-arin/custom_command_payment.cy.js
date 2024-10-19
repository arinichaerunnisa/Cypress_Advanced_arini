/// <reference types="cypress" /> 
describe('working with inputs with custom command', () => {
    it('login succes', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(latihanuser => {
            const username = latihanuser.username
            const password = latihanuser.password
            cy.login(username, password)

            cy.get('.brand').should('contain.text', 'Zero Bank')

            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
            cy.url().should('include', 'pay-bills.html')
            cy.get('#pay_bills_tab').click()
            cy.get('.board-header').should('have.text', 'Make payments to your saved payees')
            
            
            
            cy.get('.span4').should('have.value', 'sprint')
            cy.get('#sp_account').should('have.value', '1')
            cy.get('#sp_amount').type('30.000')
            cy.get('#sp_date').type('2024-07-09')
            cy.get("label[for='sp_description']").click() 
            cy.get('#sp_description').type('house payment')

            cy.get('#pay_saved_payees').click()
            cy.get('span[title="$ 30.000 payed to payee sprint"]').should('have.text', 'The payment was successfully submitted.')




    })
    
    
        
    })  
  
})