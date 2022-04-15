// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('registerReg',(signInBtn,userLocator,passwordLocator,registerLocator,userName,password) => {

    cy.get(signInBtn).click()
    if(userName==""){
        cy.get(userLocator)
    }
    else{
    cy.get(userLocator).type(userName,{force:true})
    }
    if(password==""){
        cy.get(passwordLocator)
    }
    else{
    cy.get(passwordLocator).type(password,{force:true})
    }
    cy.get(registerLocator).click()
    
})

Cypress.Commands.add('loginIn',(signInBtn,userLocator,passwordLocator,registerLocator,userName,password) => {

    cy.get(signInBtn).click()
    if(userName==""){
        cy.get(userLocator)
    }
    else{
    cy.get(userLocator).type(userName,{force:true})
    }
    if(password==""){
        cy.get(passwordLocator)
    }
    else{
    cy.get(passwordLocator).type(password,{force:true})
    }
    cy.get(registerLocator).click()
    
})


Cypress.Commands.add('selectProduct',(button,product,addCartButton,homeButton) => {
    cy.wait(1000)
    cy.get(button).click()
    cy.wait(2000)
    cy.get(product).click()
    cy.wait(2000)
    cy.get(addCartButton).click()
    cy.wait(1000)
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added.')
    })
    cy.get(homeButton).click()
})

Cypress.Commands.add('cartFn',(cartButton,priceRow,totalPrice,placeOrderBtn,name,
    country,city,card,month,year,purchaseButton,alertMessage,alertBtnOk,namef,countryf,
    cityf,creditcardf,monthf,yearf) => {

    var price = 0    
    cy.wait(2000)
    cy.get(cartButton).click()
    cy.get(priceRow).each(($rowdata)=>{
        price = price+parseInt($rowdata.text())
    }).then(()=>{

        cy.get(totalPrice).invoke('text').then(parseInt).should('equal',price)
    })
    cy.get(placeOrderBtn).click()

    cy.get(name).type(namef).should('contain.value',namef)
    cy.get(country).type(countryf).should('contain.value',countryf)
    cy.get(city).type(cityf).should('contain.value',cityf)
    cy.get(card).type(creditcardf).should('contain.value',creditcardf)
    cy.get(month).type(monthf).should('contain.value',monthf)
    cy.get(year).type(yearf)
    cy.get(purchaseButton).click()
    cy.get(alertMessage).should('contain.text','Thank you for your purchase!',{force:true})
    cy.get(alertBtnOk).click()
})

Cypress.Commands.add('cartVal',(cartButton,priceRow,totalPrice) => {

    var price = 0    
    cy.wait(2000)
    cy.get(cartButton).click()
    cy.wait(3000)
    cy.get(priceRow).each(($rowdata)=>{
        price = price+parseInt($rowdata.text())
    }).then(()=>{

        cy.get(totalPrice).invoke('text').then(parseInt).should('equal',price)
    })
})
