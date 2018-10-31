describe('Photoswipe', () => {
  beforeEach(() => {
    cy.visit('/patterns/01-molecules-05-media-01-image-gallery/01-molecules-05-media-01-image-gallery.rendered.html')
  })

  it('Activate Photoswipe by clicking the First image', () => {
    cy.get('.pswp__ui').should('be.hidden')
    cy.get('.gallery__item:first-child').click()
    cy.get('.pswp__caption__center').contains('Look at me I\'m a caption.')
    cy.get('.pswp__button--arrow--right').click()
    cy.get('.pswp__caption__center').contains('I Also, am a caption.')
    cy.get('.pswp__button--close').click()
    cy.get('.pswp__ui').should('is.hidden')
  })
})
