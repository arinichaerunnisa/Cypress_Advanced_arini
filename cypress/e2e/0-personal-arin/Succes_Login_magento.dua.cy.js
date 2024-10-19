/// <reference types="cypress" /> 

describe('login to magento shop web', () => {
    it('visit the website', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.url().should('include', 'magento.softwaretestingboard.com')
    })

    it('should click sign in', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('li[data-label="or"]').click({force:true})
     
       })
       it('should fill username', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/')
        cy.get('input[name="login[username]"]').clear()
        cy.get('input[name="login[username]"]').type('fakeemail@gmail.com')
      })
  
      it('should fill password', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/')
        cy.get('input[name="login[password]"]').clear()
        cy.get('input[name="login[password]"]').type('password123')
      })
  
      it('should to submit login button', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/')
        cy.get('button[type="submit"]').click({multiple:true})
       
      })
  })

  ///semangat