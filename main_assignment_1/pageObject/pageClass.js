const LOCATOR = {
    signInBtn       : "#signin2",
    userLocator     : "#sign-username",
    passwordLocator : "#sign-password",
    registerLocator : "[onClick='register()']"
}

function register(userName,password){
    cy.log(userName,password)
    cy.registerReg(LOCATOR.signInBtn,LOCATOR.userLocator,LOCATOR.passwordLocator,LOCATOR.registerLocator,userName,password)
}

module.exports = {
    register
};