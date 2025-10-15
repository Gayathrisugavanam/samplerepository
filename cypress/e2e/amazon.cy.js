describe('test scenarios',()=>{

    it('Validating adding products to the cart and checkout product successfully ',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('[id="twotabsearchtextbox"]').type('mobile')
        cy.get('[id="nav-search-submit-text"]').click()

        cy.get('input[type="checkbox"]').each(($el) => {

            if($el.val() ==='Samsung') {
                cy.wrap($el).check()
            }

        })

        //to fillter the mobile price and select product and check out
        cy.get('[name="low-price"]').type('10100',{force:true})
        cy.get('[name="high-price"]').type('14900',{force:true})
        cy.get('[aria-label="Go - Submit price range"]').click({force:true})

        cy.get('[class="a-row"] [class="a-price-whole"]').each(($pr)=>{
        let price=($pr.text().trim(',').join( ))
            cy.wrap($pr).should('be.within','10000','15000')
    
        })

        cy.contains('Samsung Galaxy M36 5G (Orange Haze, 6 GB RAM, 128 GB Storage)').invoke('')

        //cy.get('[class="sg-col-inner"]').find('[class="a-section"]').eq(5).contains('Add to cart').click()

        //cy.get('[id="nav-cart-count"]').click({force:true})
        
    })   

})