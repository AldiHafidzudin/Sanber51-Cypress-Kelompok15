describe('View and Add Product', () => {

    it('Success View Product', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.visit('https://magento.softwaretestingboard.com/gear.html')
      cy.visit('https://magento.softwaretestingboard.com/gear/watches.html')
      cy.visit('https://magento.softwaretestingboard.com/clamber-watch.html')
    })
  
    it('Success Add Cart', () => {
      cy.visit('https://magento.softwaretestingboard.com/clamber-watch.html')
      cy.get('#qty').type("number")
      cy.get('#product-addtocart-button').click()
    })
  
    // it('Update Cart', () => {
    //   cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    //   cy.get('#action-action-edit').click()
    //   cy.get('#qty').type("number")
    //   cy.get('#product-updatetocart-button').click()
    // })
  })