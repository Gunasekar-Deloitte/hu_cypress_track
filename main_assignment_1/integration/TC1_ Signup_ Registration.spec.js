/// <reference types="Cypress" />

import {register} from '../pageObject/pageClass'


describe('Registration Validation', ()=>{

    let testData
    beforeEach(()=>{
        cy.visit(Cypress.env('url'));
        cy.fixture('registerData').then((data) =>{
            testData=data
        })
    })

    it('Register with existing username and existing password', ()=>{

        register(testData.userName1 , testData.password1)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.')
        })

    })

    it('Register with empty email', ()=>{

        register(testData.userName2 , testData.password2)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })

    })

    it('Register with empty password', ()=>{

        register(testData.userName3 , testData.password3)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })

    })

    it('Register with empty email and empty password', ()=>{

        register(testData.userName4 , testData.password4)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })

    })

    it('Register with correct email and correct password', ()=>{
        register(Cypress.env('userName') , Cypress.env('password'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')
        })
    })

})