/// <reference types="Cypress" />

describe('select validation', function()
{
    var data
    before(function(){
        cy.fixture('example').then(function(inputdata){
            data=inputdata
        })
    })


    it('Validation for selecting language', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('ul[style="list-style:none;max-height: 230px;overflow: scroll;"] > li').each(($language,index)=>{
            const languageText = $language.text()
            if(languageText.includes(data.language1))
            {
                cy.get('ul[style="list-style:none;max-height: 230px;overflow: scroll;"] > li').eq(index).click()
            }
            if(languageText.includes(data.language2))
            {
                cy.get('ul[style="list-style:none;max-height: 230px;overflow: scroll;"] > li').eq(index).click()
            }
        })
        cy.get('#msdd').should('contain.text',data.language1,data.language2)
    })


    it('skills validation', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Data Analytics').should('have.value','Data Analytics')
    })


    it('validation of selecting country', function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('[class="select2-selection select2-selection--single"]').type(data.country)
        cy.get('#select2-country-results').each(($country,index)=>{
            const countryText=$country.text()
            if(countryText.includes(data.country)){
                cy.get('#select2-country-results').eq(index).click()
            }
        })
        cy.get('[class="select2-selection select2-selection--single"]').should('contain',data.country)
    })

})