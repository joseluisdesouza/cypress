/// <reference types="cypress" />

describe("Ongs", () => {
  // skip - para o teste
  it.skip("devem poder realizar um cadastro", () => {
    // cy.visit - vai até a pagina a ser testada
    cy.visit("http://localhost:3000/register");
    // cy.get - busca um elemento
    // .type - insere um texto
    cy.get('[placeholder="Nome da ONG"]').type("Dogs feliz");
    cy.get('[type="email"]').type("dogs@email.com");
    cy.get('[placeholder="WhatsApp"]').type("51998999999");
    cy.get('[placeholder="Cidade"]').type("Guaiba");
    cy.get('[placeholder="UF"]').type("RS");

    // routing
    // start server com cy.server()
    // criar uma rota com o cy.route
    // atribuir rota a um alias() - variavel temporaria
    // esperar com cy.wait() e fazer uma validação

    //cy.server();
    cy.route("POST", "**/ongs").as("postOng");

    cy.get(".button").click();

    cy.wait("@postOng").then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property("id");
      expect(xhr.response.body.id).is.not.null;
    });
  });

  it("devem poder realizar um login no sistema", () => {

    // cy.request({
    //   method: "POST",
    //   url: "https://betheheroapi4.herokuapp.com/ongs",
    //   body: {
    //     name: "Gatos feliz",
    //     email: "gato@gmail.com",
    //     whatsapp: "51989898989",
    //     city: "Guaiba",
    //     uf: "RS",
    //   },
    // }).then((response) => {
    //   expect(response.body.id).is.not.null;
    //   cy.log(response.body.id);

    //   Cypress.env("createdOngId", response.body.id);
    // });

    cy.visit('http://localhost:3000/');
    cy.get('input').type(Cypress.env('createdOngId'));
    cy.get('.button').click();
  });
});