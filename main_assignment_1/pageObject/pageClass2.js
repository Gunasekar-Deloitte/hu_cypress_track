const LOCATOR = {
    signInBtn       : "#login2",
    userLocator     : "#loginusername",
    passwordLocator : "#loginpassword",
    registerLocator : "[onclick='logIn()']"
}

function login(userName,password){
    cy.log(userName,password)
    cy.loginIn(LOCATOR.signInBtn,LOCATOR.userLocator,LOCATOR.passwordLocator,LOCATOR.registerLocator,userName,password)
}

module.exports = {
    login
};