/* eslint-disable @typescript-eslint/triple-slash-reference */
// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add("login", () => {
  cy.intercept("POST", "/auth/login").as("login");
  cy.visit("/login", {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
    },
  });
  cy.get("#email").type("test@test.com");
  cy.get("#password").type("testPassword");
  cy.get("#login-button").click();
  cy.wait("@login");
});
Cypress.Commands.add("firstStep", (email: string) => {
  cy.intercept("POST", "/auth/isRegistered").as("isRegistered");
  cy.visit("/signup", {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
    },
  });
  cy.get("#email").type(email);
  cy.wait("@isRegistered").then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    assert.equal(interception.response.body.isRegistered, false);
  });
  cy.get("#password").type("123456");
  cy.get("#continue-button").click();
});
Cypress.Commands.add("secondStep", (companyName: string) => {
  cy.intercept("GET", "/companies/isNameAvailable/**").as("isNameAvailable");
  cy.get("#company").clear();
  cy.get("#company").type(companyName);
  cy.wait("@isNameAvailable");
  cy.get("#continue-button").click();
});
