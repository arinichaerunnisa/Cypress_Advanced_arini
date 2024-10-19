describe('browser actions', () => {
    it ('should load book website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout:10000})
        cy.url.apply().should('include', 'index.html') 
    })
    it ('should click on anything picture', () => {
        cy.visit('https://books.toscrape.com/');
        cy.get('a[title="A Light in the Attic"]').click()
        
    })
})