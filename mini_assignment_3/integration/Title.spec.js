/// <reference types="Cypress" />

describe('Title Validation', function(){

    beforeEach(function(){
        cy.fixture('title_data').then(function(data){
            this.data=data
        })
    })

    it('Titlt Validation', function(){

        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').should('contain',this.data.elements)
        cy.get('div .category-cards > div:nth-child(2) > div > div.card-body > h5').should('contain',this.data.forms)
        cy.get('div .category-cards > div:nth-child(3) > div > div.card-body > h5').should('contain',this.data.alerts)
        cy.get('div .category-cards > div:nth-child(4) > div > div.card-body > h5').should('contain',this.data.widgets)
        cy.get('div .category-cards > div:nth-child(5) > div > div.card-body > h5').should('contain',this.data.interactions)
        cy.get('div .category-cards > div:nth-child(6) > div > div.card-body > h5').should('contain',this.data.bookStore)           
    })

    it('Elements Page', function(){
        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.url().should('eq', "https://demoqa.com/elements")
    })
})