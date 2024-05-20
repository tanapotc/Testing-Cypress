/// <reference types="cypress" />
const sizes = [ 'iphone-8','ipad-2', [1024, 768]]
describe('Login Test', () => {
  beforeEach(() => {
    // cy.visit('https://stg-fusionchatbots.azurewebsites.net/login')
    cy.visit('https://portal.askmeplease.ai/login')
  })

  sizes.forEach((size) => {
    // it(`Should login to the application display on ${size} screen`, () => {
    it(`Should login to the application`, () => {
      //
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      if(size == 'iphone-8'){
        cy.get('#input-23').scrollIntoView({ duration: 300 })
        cy.get('#input-23').type('admin') 
      }
      else{
        cy.get('#input-23').type('admin') 
      }

      //Staging
      // cy.get('#input-23').type('admin') 
      // cy.get('#input-26').type('1234') 
      //Production
      // cy.get('#input-23').type('admin') 
      cy.get('#input-26').type('Fusion@Solution888') 

      cy.get('.login').click()
    })
  })
})
