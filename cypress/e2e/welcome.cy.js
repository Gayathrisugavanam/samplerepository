describe('test senarios',()=>{

    it('test case validation for greencart',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('[class="search-keyword"]').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)

        //parent child changing
        // this is a parent      and         this is a child          and we need to check the length of the child
        cy.get('[class="products"]').find('[class="product"]').should('have.length',4)

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        //dynamic code for product select and add to cart
        cy.get('.products').find('.product').each(($el, index, $list)=>{

            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cauliflower')){

                cy.wrap($el).find('[type="button"]').click()
            }

        })

        //to get the brand name text, here text is a jquairy method so we use promise to get the text
        cy.get('[class="brand greenLogo"]').then(function(logoelement){

            cy.log(logoelement.text())
        })

        //assert if logo text is correctly displayed
        cy.get('[class="brand greenLogo"]').should('have.text','GREENKART')

        //to view the cart
        cy.contains('PROCEED TO CHECKOUT').click({force:true})

        //to place the order
        cy.contains('Place Order').click({force:true})



    })
})