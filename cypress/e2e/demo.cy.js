describe('test scenarios',()=>{

    it('test cases',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        //validating the url contains logged-in-sucessfully
        cy.url().should('contain','blogspot.com')

        //verifying the new page contains  Automation testing practice
        cy.contains('Automation Testing Practice').should('be.visible')
    
        //enter the details
        cy.get('[id="name"]').type('Thaaragai')
        cy.get('input[id="email"]').type('rgayu179@gmail.com')
        cy.get('#phone').type('9876543210')
        cy.get('[id="textarea"]').type('Chennai, TamilNadu')
        cy.get('input[id="female"]').check()

        //check box
        cy.get('input[value="sunday"]').check().should('be.checked')
        cy.get('[id="wednesday"]').check()
        cy.get('[id="friday"]').check()

        //select tag
        cy.wait(5000)
        cy.get('[id="country"]').select('option10')


        

    })
})