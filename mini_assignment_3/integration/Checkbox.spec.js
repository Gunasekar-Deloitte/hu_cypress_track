/// <reference types="Cypress" />

describe('CheckBox', function(){
    
    it('CheckBox Validation', function(){
        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-1').click()
        cy.get('[class="rct-icon rct-icon-expand-close"]').click()
        cy.get('li[class="rct-node rct-node-parent rct-node-expanded"] li:nth-child(2)>span>label>span.rct-checkbox>svg').click()
        cy.get('#tree-node-documents').should('be.checked')
        
    })
})