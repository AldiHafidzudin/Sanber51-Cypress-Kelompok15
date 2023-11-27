import ProcessToCheckOut from "../../support/pageObject/ProcessToCheckOut";


describe('Reset Password', () => {
  
  it('empty email', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    ProcessToCheckOut.SignIn()
    cy.contains('Forgot Your Password?').click()
    cy.get('#email_address')
    cy.contains('Reset My Password').click()
  })

  it('valid email', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    ProcessToCheckOut.SignIn()
    cy.contains('Forgot Your Password?').click()
    cy.get('#email_address').type('dummy123@gmail.com')
    cy.contains('Reset My Password').click()
  })


})