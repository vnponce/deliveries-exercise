describe('Delivery history', () => {
  it('should see delivery history layout', () => {
    cy.visit('/shipments');
    cy.findByRole('heading', {
      level: 1,
      name: /delivery/i,
    });
    cy.findByRole('heading', {
      level: 2,
      name: /history/i,
    });

    cy.findByLabelText(/search/i);
    cy.findByRole('button', {
      name: /new deliver/i,
    });

    cy.findByTestId(/shipments/i)
      .find('tr:first-of-type')
      .should('have.attr', 'data-testid', '009-300FCT');
    // encontrar la manera de poner el data-testid nosotros en el test
    // esto debe ser con el contextApi
    // y uno debe estar loggeado
  });
  it.only('should show delivery details when user clicks on Details button', () => {
    cy.visit('/shipments');
    cy.findByTestId(/009-300FCT/i).within(() => {
      cy.findByRole('button', {
        name: /details/i,
      }).click();
    });
    cy.url().should('include', '/shipment/009-300FCT');
    cy.findByRole('heading', {
      level: 1,
      name: /009-300FCT/i,
    });
  });
});
