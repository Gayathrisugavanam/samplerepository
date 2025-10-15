describe('navigation commands',()=>{

    it('testcases for navigation',()=>{

        cy.visit('https://demoblaze.com/')
        cy.get('#cartur').click()
        cy.url().should('contain','cart')

        cy.wait(4000)

        //back to dashboard
        cy.go('back')
        cy.contains('HTC One M9').should('be.visible')

        //forward to cart

        cy.go('forward')

        cy.reload()


    })

    it.only('navigation cmds for amazon',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('[id="nav-xshop"]').click()

    })


})