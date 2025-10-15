describe('test scenarios', () => {

    it('to validate the flipkart page', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('[name="q"]').type('watches')
        cy.get('button[type="submit"]').click()

        cy.get('div[title="Fastrack"] input[type="checkbox"]').check({ force: true })

        cy.get('select').first().select('1000')  // Min dropdown
        cy.get('select').eq(1).select('5000')    // Max dropdown

        //to select the product
        cy.get('[class="DOjaWF gdgoEp"]').find('[class="wvIX4U"]').eq(4).click()

        //adding product to the cart
        cy.wait(5000)
        cy.get('[class="QqFHMw vslbG+ In9uk2 _7dtcvJ"]').click({ force: true })


    })

    it.only('test cases for healthcare application', () => {

        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('[id="btn-make-appointment"]').click()
        cy.get('[name="username"]').type('John Doe')
        cy.get('[id="txt-password"]').type('ThisIsNotAPassword')
        cy.get('button[type="submit"]').click()

        cy.get('[id="combo_facility"]').select('Hongkong CURA Healthcare Center').should('be.visible')

        cy.get('[id="radio_program_medicaid"]').click().should('be.visible')

        cy.get('[class="glyphicon glyphicon-calendar"]').click().should('be.visible')

        cy.get('[name="comment"]').type('welcome to CURA healthcare', { force: true }).should('be.visible')


        //date picker
        //cy.get('[class="datepicker-days"] [class="next"]').click() 
        //cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .next').click()
        //cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
        //cy.get('[class="datepicker-years"] [class="prev"]').click().click()

        cy.get('[id="txt_visit_date"]').type('03/12/2025').should('be.visible')

        cy.get('[id="btn-book-appointment"]').click()

        //to confirm you enter the correct page
        cy.contains('Appointment Confirmation').should('be.visible')

        //go to homepage
        cy.contains('Go to Homepage').click().should('be.visible')

    })


})