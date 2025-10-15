describe('test scenarios', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')  //navigation

    })

    //web table handle
    it('get the table value', () => {

        cy.get('table>tbody>tr>td:nth-child(2)').each(($searchTable) => {

            if ($searchTable.text().includes('Mechanic')) {
                cy.wrap($searchTable).then((tablevalues) => {
                    const result = tablevalues.text()
                    cy.log(result)
                })

            }

        })

    })

    it.only('table value', () => {

        cy.get('table>tbody>tr>td:nth-child(2)').each(($searchTable) => {

            if ($searchTable.number() === (48)) {
                cy.wrap($searchTable).then((tabval) => {
                    const val = tabval()
                    cy.log(val)
                })
            }
        })


    })

    /*cy.get('.s-main-slot .s-result-item').each(($el,index) =>{

            const mobileName= $el.find('h2 a span').text().trim()

            if(mobileName){
                cy.log('mobile ${index + 1}: ${mobileName}')
                cy.task('log','Mobile $(index + 1}: ${mobileName}')
            }

        }) */


})