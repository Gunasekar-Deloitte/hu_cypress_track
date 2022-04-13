/// <reference types="Cypress" />

describe('Radio Button', function(){
    
    it('RadioButton Validation', function(){
        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-2').click()
        cy.get('div[class="col-12 mt-4 col-md-6"] > div:nth-child(2) > div:nth-child(3)').click()
        cy.get('#impressiveRadio').should('be.checked')
        cy.get('.mt-3').should('contain','Impressive')
    })
})