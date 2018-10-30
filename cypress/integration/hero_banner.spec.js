describe('Hero Banner', () => {
  beforeEach(() => {
    cy.visit('/patterns/02-organisms-04-hero-banner-04-hero-banner-video-button/02-organisms-04-hero-banner-04-hero-banner-video-button.rendered.html')
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
