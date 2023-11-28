describe('Choose Product', () => {
  it('Choose Poduct from Homepage', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('img[alt="Radiant Tee"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/radiant-tee.html')
  })

  it('Choose Poduct from Hovering Navbar Level 1', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/women/tops-women.html')
    cy.get('img[alt="Breathe-Easy Tank"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/breathe-easy-tank.html')

  })

  it('Choose Poduct from Hovering Navbar Level 2', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get('#ui-id-9').trigger('mouseover')
    cy.get('#ui-id-11').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    cy.get('img[alt="Olivia 1/4 Zip Light Jacket"]').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/olivia-1-4-zip-light-jacket.html')
  })
})