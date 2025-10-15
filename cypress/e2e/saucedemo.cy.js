describe('Test ECOMARCE',()=>{
    
    it('Validating adding products to the cart and successfully order placed',()=>{

        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[name="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()

        cy.get('#inventory_container .inventory_item').each(($searchproduct)=>{

            if($searchproduct.text().includes('Bike')){
                cy.wrap($searchproduct).find('[class="btn_primary btn_inventory"]').click()
            }

            if($searchproduct.text().includes('Jacket')){
                cy.wrap($searchproduct).find('[class="btn_primary btn_inventory"]').click()
            }

            if($searchproduct.text().includes('Backpack')){
                cy.wrap($searchproduct).find('[class="btn_primary btn_inventory"]').click()
            }
      
        })

        cy.get('[id="shopping_cart_container"]').click()
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('[id="first-name"]').type('name')
        cy.get('[id="last-name"]').type('last')
        cy.get('[id="postal-code"]').type('987654')
        cy.get('[class="btn_primary cart_button"]').click()

        let sum=0;

        //[class="cart_list"] - this is for all products list in the cart, [class="cart_item"] -this is for separete items in the list, [class="inventory_item_price"] -this for particular price of the item 
        //to take overall products list and price thats why we mentioned [each(($productprice)] to get all products price overall
        cy.get('[class="cart_list"] [class="cart_item"] [class="inventory_item_price"]').each(($productprice)=>{

            let priceshowing=$productprice.text()
            let splitted=priceshowing.split('$')
            let weneed=splitted[1].trim()
            sum=sum+Number(weneed)

        }).then(()=>{
            cy.log(sum)
        })

        cy.get('[class="summary_subtotal_label"]').then(($productprice)=>{ 

            let priceshowing=$productprice.text()
            let splitted=priceshowing.split('$')
            let weneed=splitted[1].trim()
            expect(Number(weneed)).to.eq(sum)

        })


    })
})