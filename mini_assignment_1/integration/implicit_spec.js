
describe('Assertion', ()=>{
    it('Validate Url', ( )=>{
        cy.visit('http://www.flipkart.com')
        cy.url().should('eq', "https://www.flipkart.com/")
    })

    it('Validate of product', ()=>{
        
        
        cy.get('div[class*="eFQ30H"]:nth-of-type(1)').should('contain.text','Top Offers')
        cy.get('div[class*="eFQ30H"]:nth-of-type(2)').should('contain.text','Grocery')
        cy.get('div[class*="eFQ30H"]:nth-of-type(3)').should('contain.text','Mobiles')
        cy.get('div[class*="eFQ30H"]:nth-of-type(4)').should('contain.text','Fashion')
        cy.get('div[class*="eFQ30H"]:nth-of-type(5)').should('contain.text','Electronics')
        cy.get('div[class*="eFQ30H"]:nth-of-type(6)').should('contain.text','Home')
        cy.get('div[class*="eFQ30H"]:nth-of-type(7)').should('contain.text','Appliances')
        cy.get('div[class*="eFQ30H"]:nth-of-type(8)').should('contain.text','Travel')
        cy.get('div[class*="eFQ30H"]:nth-of-type(9)').should('contain.text','Beauty, Toys & More')
    })

    it('Login Validation', ()=> {
        cy.get('._1_3w1N').click()
        cy.get('._1D1L_j > ._2KpZ6l').click()
        cy.get('._2YULOR > span').should('contain.text','Please enter valid Email ID/Mobile number')
    })

    it('Validation of text in login window', ()=> {
        cy.get('._1-pxlW').should('contain.text','Get access to your Orders, Wishlist and Recommendations')
    })
    it('validation of view all button', ()=> {
        cy.get('[style="flex-grow: 1; overflow: auto; padding: 0px 0px 10px;"] > ._3E8aIl > ._2N81D7 > :nth-child(1) > ._30kJiF > ._2KpZ6l').click()
    })

})