describe("Home Page", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    cy.visit("/");
  });

  it("has vue app", () => {
    cy.get("#app").should("exist");
  });

  it("has Signup Button", () => {
    cy.get("#signup-button").click();
    cy.url().should("include", "/signup");
  });
  it("has Join now Button", () => {
    cy.get("#join-button").click();
    cy.url().should("include", "/signup");
  });
  it("has Login Button", () => {
    cy.get("#login-button").click();
    cy.url().should("include", "/login");
  });
});
