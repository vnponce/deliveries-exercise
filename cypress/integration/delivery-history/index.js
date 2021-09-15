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
        fakeTimestamp: 1,
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
  it('should store new delivery in context api', () => {
    const firstShipment = {
      status: 'Ready',
      orderId: 'custom-order-id',
      technician: 'Johon Doe',
      platform: 'Alpha',
      drone: 'DJI-004Q',
      technicalCheck: 'Passed',
      fakeTimestamp: 1,
    };
    const newShipment = {
      status: 'Pending',
      orderId: 'new-order-id',
      technician: 'Jane',
      platform: 'Alpha',
      drone: 'DJI-005Q',
      technicalCheck: 'Passed',
      fakeTimestamp: 2,
    };
    // having deliveries
    Cypress.env('customValues', {
      shipments: [firstShipment],
    });
    // click button add new dlicery
    cy.visit('/shipments');

    cy.findByRole('button', {
      name: /new deliver/i,
    }).click();

    cy.findByRole('presentation').within(() => {
      cy.findByLabelText(/order id/i).type(newShipment.orderId);
      cy.findByLabelText(/technician/i).type(newShipment.technician);
      cy.findByLabelText(/platform/i).select(newShipment.platform);
      cy.findByLabelText(/drone/i).select(newShipment.drone);

      cy.findByRole('button', {
        name: /create new delivery/i,
      }).click();
    });
    // validate it is in the store api
    cy.storeHas({
      property: 'shipments',
      value: [
        newShipment,
        firstShipment,
      ],
    });
  });
  // ver que esta el primero

  // ver que esta en localstorage

  // settear localstorage y ver que lo toma de ahí

  // cerrar el modal y no pasa nada

  // todos los campos requeridos
});
