describe('test scenario', () => {

  //beforeEach method is used for calling the method before all the testcases
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')  //navigation

  })

  it('test cases', () => {

    //radio button

    cy.get('[value="radio1"]').check().should('be.checked') //uniqe elements (1st element)
    cy.get('[value="radio1"]').check().should('be.checked') //uniqe elements (2nd element)
    cy.get('[type="radio"]').last().check().should('be.checked') //multiple locators (here we mentioned last (only applicable for first and last))
    cy.get('[type="radio"]').eq(1).check()  //index based element check(2nd element)

    //check box

    cy.get('[id="checkBoxOption1"]').check().should('be.checked')
    cy.get('[name=checkBoxOption2]').check().should('be.checked')
    cy.get('[type="checkbox"]').last().check()

    //select tag
    cy.get('[name="dropdown-class-example"]').select('option2')

  })

  //suggestion box
  it('suggestion class', () => {

    cy.get('[id="autocomplete"]').type('ne')
    cy.get('.ui-menu-item-wrapper').each(($searchcountry) => {

      if ($searchcountry.text().includes('ne')) {
        cy.wrap($searchcountry).click({ force: true })
      }
    })

  })


  it.only('get china in suggestin box', () => {

    cy.get('[id="autocomplete"]').type('ch')
    cy.get('.ui-menu-item-wrapper').each(($searchcountry) => {

      if ($searchcountry.text() === 'china') {
        cy.wrap($searchcountry).click({ force: true })

      }

    })

  })

  it.only('get india in suggestion box', () => {

    cy.get('[id="autocomplete"]').type('ind')
    cy.get('.ui-menu-item-wrapper').each(($el, index, list) => {

      if ($el.text() === 'india') {
        cy.wrap($el).click({ force: true })

      }

    })

  })



  it('get country in suggestion box', () => {

    cy.get('[id="autocomplete"]').type('sw')
    cy.get('.ui-menu-item-wrapper').each(($searchcountry) => {

      if ($searchcountry.text().includes('sw')) {
        cy.wrap($searchcountry).click({ force: true })
      }

    })

  })



  //open new tab
  it('open new', () => {

    cy.contains('Open Tab').invoke('removeAttr', 'target').click()

  })

  //alert handling

  it('alert handling', () => {

    //this is for alert 

    /*cy.on('window:alert',(text)=>{
     expect(text).to.eq('Hello , share this practice page and share your knowledge')  
     return true;
    })

    cy.get('[id="alertbtn"]').click() */

    //this is for confirm

    cy.on('window:confirm', (confirmsg) => {
      expect(confirmsg).to.eq('Hello , Are you sure you want to confirm?')
      return true;
    })

    cy.get('[value="Confirm"]').click()

  })

  //hide shoe
  it('hide show', () => {

    cy.get('[id="hide-textbox"]').type('cypressclass')
    cy.wait(3000)
    cy.get('#hide-textbox').click()

    cy.wait(3000)
    cy.get('#show-textbox').click()

  })

  //Mouseover
  it('mouse hover', () => {

    cy.get('[id="mousehover"]').trigger('mouseover')
    cy.wait(3000)
    cy.get('[href="#top"]').click({ force: true })

  })

  //assertion
  it('assertion', () => {

    cy.title().should('include', 'Practice Page')
    cy.url().should('contain', 'Automation')
    cy.contains('Practice Page').should('be.visible')

  })

  //iframe

  it('try to click mentorship', () => {

    cy.frameLoaded('[id="courses-iframe"]') //this will verify the iframe content

    //cy.iframe().find('[href="mentorship"]').first().click()  //this is for to click the mentorship using locator

    cy.iframe().contains('Mentorship').click()  //this is for to click the mentorship using text

    cy.wait(4000) //it will not suddenly check the visibility of the bronze, it need some time to load.. so thats why we are using the wait concept here
    cy.iframe().contains('BRONZE').should('be.visible') //to check if the bronze word is visible in the mentorship page  (assersion)

  })

  it('try to click practice', () => {

    cy.frameLoaded('[id="courses-iframe"]')

    cy.iframe().find('[href="practice-project"]').first().click()

    cy.wait(4000)
    cy.iframe().contains('Join now to Practice').should('be.visible')

  })




})