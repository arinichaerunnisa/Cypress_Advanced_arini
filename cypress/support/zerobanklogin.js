Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('input[name=user_password]').clear()
    cy.get('input[name=user_password]').type('password')
    cy.get('input[name=submit]').click() 
})

cypress.command.add('payment', (payee,account, amount, date, description) =>{
    cy.get('.span4').should('have.value', 'sprint')
    cy.get('#sp_account').should('have.value', '1')
    cy.get('#sp_amount').type('30.000')
    cy.get('#sp_date').type('2024-07-09')
    cy.get("label[for='sp_description']").click() 
    cy.get('#sp_description').type('house payment')
})