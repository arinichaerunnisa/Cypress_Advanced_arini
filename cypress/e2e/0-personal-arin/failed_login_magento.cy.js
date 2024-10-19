/// <reference types="cypress" /> 

describe('login to magento shop web', () => {
    it('gagal login', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.url().should('include', 'magento.softwaretestingboard.com')
      cy.get('.authorization-link').first().click()
      cy.get('span[class=base]').should('have.text', 'Customer Login')
      cy.url().should('include', 'customer')
      cy.get('input[name="login[username]"]').clear()
      cy.get('input[name="login[username]"]').type('fakeemail@gmail.com')
      cy.get('input[name="login[password]"]').clear()
      cy.get('input[name="login[password]"]').type('password123')
      cy.get('#send2').click()
    })

    
    

    

        
     

  })