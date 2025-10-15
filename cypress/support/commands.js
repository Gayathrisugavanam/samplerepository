// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('visitingUrl', () => {
    cy.visit('https://www.saucedemo.com/v1/')
})



Cypress.Commands.add('loginCredFill', (usern, password) => {
          cy.get('[id="user-name"]').type(usern)
          cy.get('[name="password"]').type(password)
})

Cypress.Commands.add('addingProductToCart', (pro) => {
            cy.get('#inventory_container .inventory_item').each(($searchproduct)=>{

             if($searchproduct.text().includes(pro)){
                cy.wrap($searchproduct).find('[class="btn_primary btn_inventory"]').click()
             }
            })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';

require('@4tw/cypress-drag-drop');


