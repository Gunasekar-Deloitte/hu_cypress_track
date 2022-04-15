/// <reference types="Cypress" />

import {login} from '../pageObject/pageClass2'
import {selectingLaptopSonyVaioI5, selectingLaptopMacBookAir} from '../pageObject/pageClass3'
import {cartFunction} from '../pageObject/pageClassCart'

describe('Validation of selecting item from SameCategory', ()=>{

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

    it('Validation of adding laptop to cart', ()=>{

        selectingLaptopSonyVaioI5()
        selectingLaptopMacBookAir()

    })

    it('Validation of cart details and purchasing', ()=>{

        cartFunction(testDataCart.name,testDataCart.country,testDataCart.city,
                    testDataCart.creditCard,testDataCart.month,testDataCart.year)
    })
    
})