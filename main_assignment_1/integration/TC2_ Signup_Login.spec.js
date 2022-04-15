/// <reference types="Cypress" />
import {login} from '../pageObject/pageClass2'

describe('Login Validation' , () =>{

    let testData
    beforeEach(()=>{
        cy.visit(Cypress.env('url'));
        cy.fixture('loginData').then((data) =>{
            testData=data
        })
    })

    it('Log-in with incorrect username and incorrect password', ()=>{

        login(testData.userName1 , testData.password1)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Wrong password.')
        })

    })

    it('Log-in with correct username and empty password.', ()=>{

        login(testData.userName2, testData.password2)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })

    })

    it('Log-in with empty username and valid password.', ()=>{

        login(testData.userName3, testData.password3)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
    })
    
    it('Login-Handles case sensitive', ()=>{

        login(testData.userName4,testData.password4)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.')
        })
    })

    it('Log-in with valid username and password.', ()=>{

        login(testData.userName5, testData.password5)
        cy.get('#nameofuser').should('contain.text',`Welcome ${testData.userName5}`)
    })

})
