
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

describe("The navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should contain the navigation", () => {
    cy.get("nav").should("be.visible");
  })

  it("should contain the link Charts", () => {
    cy.get("nav").contains("Charts");
  })

  it("should contain the link Photos", () => {
    cy.get("nav").contains("Photos");
  })

  it("should contain the link Forms", () => {
    cy.get("nav").contains("Forms");
  })

  it("should navigate to the Charts page", () => {
    cy.get("nav").contains("Charts").click();
    cy.url().should("include", "/charts");
  })

  it("should navigate tot he Photos page", () => {
    cy.get("nav").contains("Photos").click();
    cy.url().should("include", "/photos");
  })

  it("should navigate to the Forms page", () => {
    cy.get("nav").contains("Forms").click();
    cy.url().should("include", "/forms");
  })
})