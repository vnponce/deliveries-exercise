describe('Delivery history', () => {
  it('should see delivery history layout', () => {
    Cypress.env('customValues', {
      shipments: [{
        status: 'Ready',
        orderId: 'custom-order-id',
        technician: 'Johon Doe',
        platform: 'Alpha',
        drone: 'DJI-004Q',
        technicalCheck: 'Passed',
      }],
    });

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
      .should('have.attr', 'data-testid', 'custom-order-id');
    // encontrar la manera de poner el data-testid nosotros en el test
    // esto debe ser con el contextApi
    // y uno debe estar loggeado
  });
  it('should order deliveries by fakeTimestamp', () => {
    Cypress.env('customValues', {
      shipments: [
        {
          status: 'Ready',
          orderId: 'second-id',
          technician: 'Johon Doe',
          platform: 'Alpha',
          drone: 'DJI-004Q',
          technicalCheck: 'Passed',
          fakeTimestamp: 2,
        },
        {
          status: 'Ready',
          orderId: 'first-id',
          technician: 'Jane',
          platform: 'Alpha',
          drone: 'DJI-004Q',
          technicalCheck: 'Passed',
          fakeTimestamp: 1,
        },
      ],
    });

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
      .should('have.attr', 'data-testid', 'second-id');
    // encontrar la manera de poner el data-testid nosotros en el test
    // esto debe ser con el contextApi
    // y uno debe estar loggeado
  });
  it('should show delivery details when user clicks on Details button', () => {
    Cypress.env('customValues', {
      shipments: [{
        status: 'Ready',
        orderId: 'custom-order-id',
        technician: 'Johon Doe',
        platform: 'Alpha',
        drone: 'DJI-004Q',
        technicalCheck: 'Passed',
      }],
    });
    cy.visit('/shipments');
    cy.findByTestId(/custom-order-id/i).within(() => {
      cy.findByRole('button', {
        name: /details/i,
      }).click();
    });
    cy.url().should('include', '/shipment/custom-order-id');
    cy.findByRole('heading', {
      level: 1,
      name: /custom-order-id/i,
    });
  });
});
