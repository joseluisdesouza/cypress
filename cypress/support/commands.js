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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// logica para criar request e salva em uma variavel temporaria e garante
//que isso sera executado antes do teste usando o before da index.js
Cypress.Commands.add("createOng", () => {
  cy.request({
    method: "POST",
    url: "https://betheheroapi4.herokuapp.com/ongs",
    body: {
      name: "Gatos feliz",
      email: "gato@gmail.com",
      whatsapp: "51989898989",
      city: "Guaiba",
      uf: "RS",
    },
  }).then((response) => {
    expect(response.body.id).is.not.null;
    cy.log(response.body.id);

    Cypress.env("createdOngId", response.body.id);
  });
});
