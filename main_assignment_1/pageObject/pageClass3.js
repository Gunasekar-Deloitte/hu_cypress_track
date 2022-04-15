const LOCATOR = {
    laptopButton     : "div[class='list-group'] a:nth-child(3)",
    addCartButton    : "[class='col-sm-12 col-md-6 col-lg-6']",
    homeButton       : ".active > .nav-link",
    SonyVaio_i5      : "div:nth-child(1) > div > div > h4 > a",
    SonyVaio_i7      : "div:nth-child(2) > div > div > h4 > a",
    MacBook_air      : "div:nth-child(3) > div > div > h4 > a",
    Dell_i7_8gb      : "div:nth-child(4) > div > div > h4 > a",
    Dell_15_Inch_2017: "div:nth-child(5) > div > div > h4 > a",
    MacBook_Pro      : "div:nth-child(6) > div > div > h4 > a"
    
}

function selectingLaptopSonyVaioI5(){

    cy.selectProduct(LOCATOR.laptopButton,LOCATOR.SonyVaio_i5,LOCATOR.addCartButton,LOCATOR.homeButton)

}

function selectingLaptopMacBookAir(){

    cy.selectProduct(LOCATOR.laptopButton,LOCATOR.MacBook_air,LOCATOR.addCartButton,LOCATOR.homeButton)

}


module.exports = {
    selectingLaptopSonyVaioI5,selectingLaptopMacBookAir
    
};