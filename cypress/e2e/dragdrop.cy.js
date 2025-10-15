describe('test scenarios',()=>{

        it('test cases for drag and drop',()=>{

            cy.visit('https://testautomationpractice.blogspot.com/')
            cy.get('[id="draggable"]').drag('[id="droppable"]',{force:true})

            //slider

            //left handle
            cy.get('.ui-slider-handle').first().invoke('attr','style','left:20%').trigger('mousedown',{which: 1}).trigger('mousemove',{clientX: 150}).trigger('mouseup')           

            //right handle
            cy.get('.ui-slider-handle').last().invoke('attr','style','left:40%').trigger('mousedown',{which: 1}).trigger('mousemove',{clientX: 200}).trigger('mouseup')

            //to print the price
            cy.get('Price range').should('contain','$100 - $200')



        })
})