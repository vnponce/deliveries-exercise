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

    // note: no es tabla porque todos tienen como un labek en cada valor,
    // por eso no lo tomaré como table si no como un list
    cy.findByRole('table', {
      name: /deliveries/i,
    });
  });
});
