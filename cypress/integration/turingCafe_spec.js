describe('Turing Cafe User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should have a heading', () => {
    cy.get('.app-title')
      .should('exist')
      .should('have.text', 'Turing Cafe Reservations')
  });

  it('Should have a form with inputs and a submit button to create a new reservation', () => {
    cy.get('form')
      .should('exist')
      .get('input[name="name"]')
      .should('have.attr', 'name', 'name')
      .get('input[name="date"]')
      .should('have.attr', 'name', 'date')
      .get('input[name="time"]')
      .should('have.attr', 'name', 'time')
      .get('input[name="number"]')
      .should('have.attr', 'name', 'number')
      .get('.submit-button')
      .should('exist')
      .should('have.text', 'Make Reservation')
  });


});