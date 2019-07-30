describe('Hero Banner', () => {
  beforeEach(() => {
    cy.visit('/patterns/01-molecules-07-hero-banner-00-hero-banner-video-button/01-molecules-07-hero-banner-00-hero-banner-video-button.rendered.html')
  })

  it('Click the Play Video button to launch video', () => {
    // The Video should display and show
    cy.get('.hero-banner__video-popup').should('not.be.visible')
    cy.get('.hero-banner__video-play').click()
    cy.get('.hero-banner__video-popup').should('be.visible')

    // The rest of the hero banner should hide.
    cy.get('.hero-banner__image').should('not.be.visible')
    cy.get('.hero-banner__body').should('not.be.visible')
  })
})
