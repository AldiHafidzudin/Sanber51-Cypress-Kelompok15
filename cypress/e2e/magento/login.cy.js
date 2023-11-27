import ProcessToCheckOut from "../../support/pageObject/ProcessToCheckOut";


describe('Login', () => {

//   beforeEach(() => {
//     //Access URL 
   
// })
it('Failed Login - Login Empty Data', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email')
  cy.get('#pass')
  cy.get('#send2').click()
  cy.wait(6000)

})

it('Failed Login - Login Empty email', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email')
  cy.get('#pass').type("amamam")
  cy.get('#send2').click()
  cy.wait(6000)

})

it('Failed Login - Login Empty password', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email').type("Dummy123@gmail.com")
  cy.get('#pass')
  cy.get('#send2').click()
  cy.wait(6000)

})

it('Failed Login - Login Empty password', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email').type("bambam@gmail.com")
  cy.get('#pass').type("12345")
  cy.get('#send2').click()
  cy.wait(6000)

})

  it('Succes Login - Valid Data', () => {
    cy.visit('https://magento.softwaretestingboard.com/') 
    ProcessToCheckOut.SignIn()
    cy.get('#email').type("Dummy123@gmail.com")
    cy.get('#pass').type("Dummy123")
    cy.get('#send2').click()
  })

})