/// <reference types="Cypress" />

describe('Links', function(){

    it('Links Validation', function(){
        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-5').click()
        var count = 0
        cy.get('p>a').then($element =>{
            count = $element.length
        })
        cy.get('p>a').should('have.length', 9)

    })
})