const registData = require('../../fixtures/registData.json')

describe('Testing Register Functionality', () => {
  it('Success to Register', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Yongki')
    cy.get('#lastname').type('Hartawan')
    cy.get ('#email_address').type('yongki@gmail.com')
    cy.get('#password').type('Hartawan2')
    cy.get('#password-confirmation').type('Hartawan2')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')

  })
  it('Failed to Register - Confirmation Password do not match', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type('Hartawan')
    cy.get('.action.submit.primary').click()
    cy.get('#password-confirmation-error').should('contain','Please enter the same value again.')
   

  })
  it('Failed to Register - Wrong Format Email', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type('yonkigmail.com')
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')

  })
  
  it('Failed to Register - Password Format does not match', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type('Hartawan')
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#password-error').should('contain','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')

  })

  it('Failed to Register - Empty First Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#firstname-error').should('contain','This is a required field.')

  })

  it('Failed to Register - Empty Last Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#lastname-error').should('contain','This is a required field.')

  })

  it('Failed to Register - Empty Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#password-error').should('contain','This is a required field.')

  })

  it('Failed to Register - Empty Confirmation Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('.action.submit.primary').click()
    cy.get('#password-confirmation-error').should('contain','This is a required field.')

  })

  it('Failed to Register - Empty Email', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#email_address-error').should('contain','This is a required field.')

  })
})