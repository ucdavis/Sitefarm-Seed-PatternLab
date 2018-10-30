describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/patterns/04-pages-00-homepage/04-pages-00-homepage.rendered.html')
  })

  it('Site Name', () => {
    cy.get('.header__site-name').should('have.text', 'SiteFarm Seed')
  })
})
