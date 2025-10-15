describe('login scenario',()=>{

    it('login using valid cred',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('[name="password"]').type('Password123')
        cy.get('button#submit').click()

        //validating the url contains logged-in-sucessfully
        cy.url().should('contain','logged-in-successfully')

        //verifying the new page contains congrauglations or sucessfully
        cy.contains('successfully').should('be.visible')

        //loged out
        cy.get('[class="wp-block-button aligncenter is-style-fill"]').click()

    })

    it('login using invalid username',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('students')
        cy.get('[name="password"]').type('Password123')
        cy.get('button#submit').click()

        //verifying the error message is displayed
        cy.contains('Your username is invalid!').should('be.visible')

    })

    it('login using invalid pass',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('[name="password"]').type('Password12')
        cy.get('button#submit').click() 
        
        //verifying the error message is displayed
        cy.contains('Your username is invalid!').should('be.visible')

    })


    //ORANGE HRM LOGIN

    it.only('login orangehrm',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click() 

        //validating the url contains dashboard
        cy.url().should('contain','index.php/dashboard/index')

        //searching
        cy.get('[class="oxd-main-menu-search"]').click().type('time')
        
    }) 


})

    




