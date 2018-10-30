describe('Collapse Accordian', () => {
  beforeEach(() => {
    cy.visit('/patterns/00-atoms-03-lists-13-list-accordion/00-atoms-03-lists-13-list-accordion.rendered.html')
  })

  it('Lists with the ".list--accordion" class should become accordions', () => {
    cy.get('.list--accordion').contains('Really Far.').should('not.be.visible')
    cy.get('.list--accordion').contains('How far away is the Sun?').click()
    cy.get('.list--accordion').contains('Really Far.').should('be.visible')
    cy.get('.list--accordion').contains('How far away is the Sun?').click()
    cy.get('.list--accordion').contains('Really Far.').should('not.be.visible')
  })

  it('Accordion lists should allow mulitple items opened at the same time', () => {
    cy.get('.list--accordion').contains('Really Far.').should('not.be.visible')
    cy.get('.list--accordion').contains('How far away is the Sun?').click()
    cy.get('.list--accordion').contains('Really Far.').should('be.visible')
    cy.get('.list--accordion').contains('How close is the Sun?').click()
    cy.get('.list--accordion').contains('That\'s basically the same question as above.').should('be.visible')
    cy.get('.list--accordion').contains('Really Far.').should('be.visible')
  })
})
