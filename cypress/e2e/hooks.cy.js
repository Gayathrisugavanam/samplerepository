describe('Test ECOMARCE',()=>{
    let data;
    before(()=>{
        cy.fixture('example').then((tdata)=>{
            data=tdata
        })
    })

    it('Validating adding products to the cart and successfully order placed',()=>{

        cy.visitingUrl()
        cy.loginCredFill(data.username,data.password)

        cy.get('[id="login-button"]').click()

        data.products.forEach((epro)=>{
            cy.addingProductToCart(epro)
        })

        cy.get('[id="shopping_cart_container"]').click()
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('[id="first-name"]').type('name')
        cy.get('[id="last-name"]').type('last')
        cy.get('[id="postal-code"]').type('987654')
        cy.get('[class="btn_primary cart_button"]').click()

        let sum=0

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