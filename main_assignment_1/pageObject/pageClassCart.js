const LOCATOR = {
        cartButton    : "a[id='cartur']",
        priceRow      : "td:nth-child(3)",
        totalPrice    : "#totalp",
        placeOrderBtn : "[class='btn btn-success']",
        name          : "#name",
        country       : "#country",
        city          : "#city",
        card          : "#card",
        month         : "#month",
        year          : "#year",
        purchaseButton: "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary",
        alertMessage  : "body > div.sweet-alert.showSweetAlert.visible > h2",
        alertBtnOk    : ".confirm"
}

function cartFunction(namef,countryf,cityf,creditcardf,monthf,yearf){
    
    cy.cartFn(LOCATOR.cartButton,LOCATOR.priceRow,LOCATOR.totalPrice,LOCATOR.placeOrderBtn,LOCATOR.name,
        LOCATOR.country,LOCATOR.city,LOCATOR.card,LOCATOR.month,LOCATOR.year,LOCATOR.purchaseButton,
        LOCATOR.alertMessage,LOCATOR.alertBtnOk,namef,countryf,cityf,creditcardf,monthf,yearf)
}

function cartValidation(namef,countryf,cityf,creditcardf,monthf,yearf){
    
    cy.cartVal(LOCATOR.cartButton,LOCATOR.priceRow,LOCATOR.totalPrice)
}

module.exports = {

    cartFunction,cartValidation

};