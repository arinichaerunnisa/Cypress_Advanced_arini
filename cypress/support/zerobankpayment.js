cypress.command.overwrite('payment', (payment) =>{
    cy.get('.span4').should('have.value', 'sprint')
    cy.get('#sp_account').should('have.value', '1')
    cy.get('#sp_amount').type('30.000')
    cy.get('#sp_date').type('2024-07-09')
    cy.get("label[for='sp_description']").click() 
    cy.get('#sp_description').type('house payment')
    
})