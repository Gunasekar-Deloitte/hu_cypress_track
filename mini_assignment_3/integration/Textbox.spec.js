/// <reference types="Cypress" />

describe('TextBox', function(){

    beforeEach(function(){
        cy.fixture('textbox_data').then(function(data){
            this.data=data
        })
    })

    it('Textbox validation',function(){

        cy.visit('https://demoqa.com/')
        cy.get('div.category-cards > div:nth-child(1) > div > div.card-body > h5').click()
        cy.get('#item-0').click()
        cy.get('#userName').type(this.data.name).should('contain.value',this.data.name)
        cy.get('#userEmail').type(this.data.email).should('contain.value',this.data.email)
        cy.get('#currentAddress').type(this.data.curaddress).should('contain.value',this.data.curaddress)
        cy.get('#permanentAddress').type(this.data.peraddress).should('contain.value',this.data.peraddress)
        cy.get('[class="btn btn-primary"]').click()

    })


})