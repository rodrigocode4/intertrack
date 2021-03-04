/// <reference types="cypress" />

context('Vehicle Screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve retornar statusCode 200', () => {
    cy.intercept('*/positions/').as('vehicleCheck')

    cy.visit('/1/positions/')

    cy.wait('@vehicleCheck').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  })

  it('Deve validar placa', () => {
    cy.visit('/1/positions/')

    cy.get('[data-cy=plate').should((el) => {
      expect(el.get(0).innerHTML).to.eq('MTX-8901')
    })
  })

  it('Deve validar informaçao do veículo 1', () => {
    cy.visit('/1/positions/')

    cy.wait(500)

    cy.get('[data-cy=car-info]').should((el) => {
      expect(el.children('h1').get(0).innerHTML).to.eq('Volkswagen, Gol')
      expect(el.children('h3').get(0).innerHTML).to.eq(
        'Lorem ipsum dolor sit amet'
      )
    })
  })

  it('Deve validar quantidade de viagens do veículo 1', () => {
    cy.visit('/1/positions/')

    cy.wait(500)

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(3)
    })
  })

  it('Deve validar quantidade de viagens do veículo 2', () => {
    cy.visit('/2/positions/')

    cy.wait(500)

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(2)
    })
  })

  it('Deve validar quantidade de viagens do veículo 3 e retornar NotFoundTrip', () => {
    cy.visit('/3/positions/')

    cy.wait(500)

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(0)
    })

    cy.get('main > span').should((el) => {
      expect(el.children('h1').get(0).innerHTML).to.eq(
        'Nenhuma viagem encontrada!'
      )
      expect(el.children('h2').get(0).innerHTML).to.eq('404')
    })
  })

  it('Deve validar quantidade de viagens do veículo 4', () => {
    cy.visit('/4/positions/')

    cy.wait(500)

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(1)
    })
  })

  it('Deve validar quantidade de viagens do veículo 5', () => {
    cy.visit('/5/positions/')

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(0)
    })
  })

  it('Deve validar quantidade de viagens do veículo 6', () => {
    cy.visit('/6/positions/')

    cy.wait(500)

    cy.get('[data-cy=trip-list]').should((el) => {
      expect(el.children().length).to.eq(0)
    })
  })
})
