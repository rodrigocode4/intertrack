/// <reference types="cypress" />

context('Home Screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve conter um card carro', () => {
    cy.get('[data-cy=search-input]').type('BRT-3204')
    cy.get('[data-cy=search-button]').click()

    cy.get('main>main').children().should('have.length', 1)
    cy.get('main > a > div').children().contains('Fiat').should('match', 'h1')
    cy.get('main > a > div').children().contains('Uno').should('match', 'h2')
    cy.get('main > a > div')
      .children()
      .contains('Veiculo sem posicoes com ignicao desligada')
      .should('match', 'strong')
  })

  it('Deve conter o valor da placa', () => {
    cy.get('[data-cy=search-input]').type('BRT-3204')
    cy.get('[data-cy=search-button]').click()

    cy.get('[data-cy=plate').contains('BRT-3204')
  })

  it('Deve redirecionar para 4/positions', () => {
    cy.get('[data-cy=search-input]').type('BRT-3204')
    cy.get('[data-cy=search-button]').click()

    cy.get('[data-cy=plate').contains('BRT-3204')
    cy.get('[data-cy=card-car]').click()

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/4/positions')
      expect(location.search).to.eq('')
    })
  })
})
