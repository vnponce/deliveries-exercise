// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('storeHas', ({ value, property }) => {
  cy.window()
    .its('store')
    .its(property)
    .should('deep.equal', value);
  // .its(property).then((prop) => {
  //   console.log('prop =>', prop);
  //   console.log('value =>', value);
  // });
});
