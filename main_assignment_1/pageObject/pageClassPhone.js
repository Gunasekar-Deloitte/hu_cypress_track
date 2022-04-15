const LOCATOR = {
    phoneButton      : "div[class='list-group'] a:nth-child(2)",
    addCartButton    : "[class='col-sm-12 col-md-6 col-lg-6']",
    homeButton       : ".active > .nav-link",
    SamsungGalaxy_s6 : "div:nth-child(1) > div > div > h4 > a",
    Nokia_lumia_1520 : "div:nth-child(2) > div > div > h4 > a",
    Nexus_6          : "div:nth-child(3) > div > div > h4 > a",
    SamsungGalaxy_s7 : "div:nth-child(4) > div > div > h4 > a",
    Iphone_6_32gb    : "div:nth-child(5) > div > div > h4 > a",
    Sony_xperia_z5   : "div:nth-child(6) > div > div > h4 > a",
    HTC_One_M9       : "div:nth-child(7) > div > div > h4 > a"
}

function selectingPhone(){

    cy.selectProduct(LOCATOR.phoneButton,LOCATOR.SamsungGalaxy_s6,LOCATOR.addCartButton,LOCATOR.homeButton)

}

module.exports = {
    selectingPhone
    
};