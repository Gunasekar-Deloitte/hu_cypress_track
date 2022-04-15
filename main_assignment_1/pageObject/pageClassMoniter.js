const LOCATOR = {
    moniterButton    : "div[class='list-group'] a:nth-child(4)",
    addCartButton    : "[class='col-sm-12 col-md-6 col-lg-6']",
    homeButton       : ".active > .nav-link",
    Apple_monitor_24 : "div:nth-child(1) > div > div > h4 > a",
    ASUS_Full_HD     : "div:nth-child(2) > div > div > h4 > a"
}

function selectingMoniter(){

    cy.selectProduct(LOCATOR.moniterButton,LOCATOR.Apple_monitor_24,LOCATOR.addCartButton,LOCATOR.homeButton)

}

module.exports = {
    selectingMoniter
    
};