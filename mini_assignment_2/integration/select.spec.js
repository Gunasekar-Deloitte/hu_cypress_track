/// <reference types="Cypress" />

describe('select validation', function()
{

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('validation of selecting country', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('[class="select2-selection select2-selection--single"]').type(this.data.country)
        cy.get('#select2-country-results').each(($country,index)=>{
            const countryText=$country.text()
            if(countryText.includes(this.data.country)){
                cy.get('#select2-country-results').eq(index).click()
            }
        })
        cy.get('[class="select2-selection select2-selection--single"]').should('contain',this.data.country)
    })

    it('skills validation', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Data Analytics').should('have.value','Data Analytics')
    })

    it('Validation for selecting language', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('ul[class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all"] > li').each(($lan1,index)=>{
            const languageText = $lan1.text()
            if(languageText.includes('English'))
            {
                cy.get('ul[class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all"] > li').eq(index).click()
            }
            if(languageText.includes('Arabic'))
            {
                cy.get('ul[class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all"] > li').eq(index).click()
            }
        })
        cy.get('#msdd').should('contain','English','Arabic')
    })
})