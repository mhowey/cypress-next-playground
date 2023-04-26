
describe("The Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should contain the header", () => {
    cy.get("header").should("be.visible");
  });

  it("should contain the text NEXT.js Cypress Playground", () => {
    cy.get("header").contains("NEXT.js Cypress Playground");
  })

  it("should contain the text cypress-testing-v1", () => {
    cy.get("header").contains("cypress-testing-v1");
  })

  it("should have the logo", () => {
    cy.get("header").find("svg").should("be.visible");
  })
})