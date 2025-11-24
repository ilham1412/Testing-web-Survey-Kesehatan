describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar a.dropdown-toggle').click();
    cy.get('#navbar a[href="/commands/querying"]').click();
    cy.get('#navbar a[href="/utilities"]').click();
    cy.get('div:nth-child(10) code.javascript').click();
    cy.get('div:nth-child(10) code.javascript').click();
    cy.get('div:nth-child(10) code.javascript').click();
    cy.get('div:nth-child(10) pre').click();
    cy.get('div:nth-child(10) code.javascript').click();
    cy.get('div:nth-child(10) code.javascript').click();
    cy.get('div:nth-child(10) a code').click();
    
  })
})