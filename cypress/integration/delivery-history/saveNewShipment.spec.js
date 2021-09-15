describe('Add new shipment', () => {
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

  const createShipment = () => {
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
  };

  it('should not store nothing and clear modal form if user click cancel', () => {
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
        name: /cancel/i,
      }).click();
    });
    // validate store is same
    cy.storeHas({
      property: 'shipments',
      value: [
        firstShipment,
      ],
    });

    cy.wait(300);
    cy.findByRole('button', {
      name: /new deliver/i,
    }).click();

    // look defauls values
    cy.findByRole('presentation').within(() => {
      cy.findByLabelText(/order id/i).should('have.value', '');
      cy.findByLabelText(/technician/i).should('have.value', '');
      cy.findByLabelText(/platform/i).should('have.value', 'Theta');
      cy.findByLabelText(/drone/i).should('have.value', 'DJI-004Q');

      cy.findByRole('button', {
        name: /cancel/i,
      }).click();
    });
  });

  it('should store new delivery in context api', () => {
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

  // ver que esta en localstorage

  it('should show recently added shipment at beginning', () => {
    // having deliveries
    Cypress.env('customValues', {
      shipments: [firstShipment],
    });
    // click button add new dlicery
    cy.visit('/shipments');

    createShipment();

    // validate it is in the first row
    cy.findByTestId(/shipments/i)
      .find('tr:first-of-type')
      .should('have.attr', 'data-testid', newShipment.orderId);
  });

  // todos los campos requeridos
  it('should show error messages for required fields', () => {
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
      cy.findByRole('button', {
        name: /create new delivery/i,
      }).click();

      cy.findByRole('alert', {
        name: /order id is required/i,
      });
      cy.findByRole('alert', {
        name: /technician is required/i,
      });
    });
  });
});
