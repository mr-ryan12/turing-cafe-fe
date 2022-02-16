describe('Turing Cafe User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should have a heading', () => {
    cy.get('.app-title')
      .should('exist')
      .should('have.text', 'Turing Cafe Reservations')
  });

  it('Should have a backdrop photo', () => {
    cy.get('.App')
      .should('have.css', 'background-image')
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

  it('Should display current reservations', () => {
    cy.get('.reservation-card')
      .should('have.length', 9)
  });

  it('Should display the reservation name', () => {
    cy.get('.card-name')
      .first()
      .should('have.text', 'Christie')
  });

  it('Should display the reservation time', () => {
    cy.get('.card-time')
      .first()
      .should('have.text', '7:00')
  });

  it('Should display the number of guests', () => {
    cy.get('.card-number')
      .first()
      .should('have.text', 'Number of Guests: 12')
  });

  it('Should have a cancel reservation button', () => {
    cy.get('.cancel-button')
      .first()
      .should('exist')
      .should('have.text', 'Cancel')
  });
});