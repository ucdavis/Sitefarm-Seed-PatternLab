describe('Pattern Lab', () => {
  it('Pattern Lab loads', () => {
    cy.visit('/')

    cy.get('#pl-size-full').should('contain', 'Full')
  })
})
