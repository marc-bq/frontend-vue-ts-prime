/* eslint-disable no-unused-vars */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<any>;
    firstStep(email: string): Chainable<any>;
    secondStep(companyName: string): Chainable<any>;
    thirdStep(): Chainable<any>;
  }
}
