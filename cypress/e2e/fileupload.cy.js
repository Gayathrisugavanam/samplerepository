describe('file upload test scenarios', () => {

    /*it('file upload testcase',()=>{
        cy.visit('https://tus.io/demo')
        cy.get('[id="P0-0"]').as('fupinput')
        cy.get('@fupinput').selectFile('cypress/fixtures/confidential.txt')

        
     })*/

    it('file upload', () => {
        cy.visit('https://practice-automation.com/')
        cy.get('[class="wp-block-button__link wp-element-button"]').contains('File Upload').as('fileup')
        cy.get('@fileup').click()
        //cy.get('@fileup').selectFile('cypress/fixtures/confitextfile.txt')

    })

}) 