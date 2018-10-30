describe('Slideshow with Slick', () => {

  it('Single Slideshow', () => {
    cy.visit('/patterns/01-molecules-03-media-02-slideshow/01-molecules-03-media-02-slideshow.rendered.html')
    cy.get('.slideshow').should('have.class', 'slick-slider')
    cy.get('.slick-current .slideshow__caption').should('have.text', 'Look at me I\'m a caption.')
    cy.get('.slick-next').click()
    cy.get('.slick-current .slideshow__caption').should('have.text', 'I am also a caption.')
  })

  it('Slideshow with thumbnails', () => {
    cy.visit('/patterns/01-molecules-03-media-03-slideshow-thumbnails/01-molecules-03-media-03-slideshow-thumbnails.rendered.html')
    cy.get('.slider-nav').should('have.class', 'slick-slider')
    cy.get('.slick-current .slideshow__caption').should('have.text', 'Look at me I\'m a caption.')
    cy.get('.slider-nav .slick-next').click()
    cy.get('.slick-current .slideshow__caption').should('have.text', 'I am also a caption.')
  })
})
