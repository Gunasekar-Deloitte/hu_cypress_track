/// <reference types="Cypress" />
import {login} from '../pageObject/pageClass2'
import {selectingLaptopSonyVaioI5} from '../pageObject/pageClass3'
import {selectingMoniter} from '../pageObject/pageClassMoniter'
import {cartFunction} from '../pageObject/pageClassCart'


describe('Validation of order for multiple products with different category', ()=>{

    let testData
    let testDataCart
    beforeEach(()=>{

        cy.visit(Cypress.env('url'));
        cy.fixture('loginData').then((data) =>{
            testData=data
            login(testData.userName5, testData.password5)
        })
        cy.fixture('cartData').then((data) =>{
            testDataCart=data
        })
    })

    it('Validation of adding products to cart',()=>{

        selectingLaptopSonyVaioI5()
        selectingMoniter()

    })
    
    it('Validation of cart details and purchasing', ()=>{

        cartFunction(testDataCart.name,testDataCart.country,testDataCart.city,
                    testDataCart.creditCard,testDataCart.month,testDataCart.year)
    })

})