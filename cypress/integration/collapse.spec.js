describe('Collapse Accordian', () => {
  beforeEach(() => {
    cy.visit('/patterns/01-molecules-06-components-16-collapse/01-molecules-06-components-16-collapse.rendered.html')
  })

  it('Click the title to open the content', () => {
    cy.get('.collapse__content').should('not.be.visible')

    cy.get('.collapse__title').click()

    cy.get('.collapse__content').should('be.visible')

    cy.get('.collapse__title').click()

    cy.get('.collapse__content').should('not.be.visible')
  })
})
