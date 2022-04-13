/// <reference types="Cypress" />


describe('Webtable', function(){

    beforeEach(function(){
        cy.fixture('webtable_data').then(function(data){
            this.data=data
        })
    })

    it('WebTable Validation', function(){
        cy.visit('https://demoqa.com/')
        cy.get('div .category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(this.data.firstName).should('contain.value',this.data.firstName)
        cy.get('#lastName').type(this.data.lastName).should('contain.value', this.data.lastName)
        cy.get('#userEmail').type(this.data.email).should('contain.value', this.data.email)
        cy.get('#age').type(this.data.age).should('contain.value', this.data.age)
        cy.get('#salary').type(this.data.salary).should('contain.value', this.data.salary)
        cy.get('#department').type(this.data.department).should('contain.value', this.data.department)
        cy.get('#submit').click()
        
    })
})