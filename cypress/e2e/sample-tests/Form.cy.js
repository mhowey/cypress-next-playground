describe("The Form Functionlity", () => {
  
  function backspaces(length) {
    let backspaces = "";
    for (let i = 0; i < length; i++) {
      backspaces += "{backspace}";
    }
    return backspaces;
  }
  
  beforeEach(() => {
    cy.visit("http://localhost:3000/testing/forms");
  });

  it("should have a form element", () => {
    cy.get("form").should("be.visible");
  })
  
  it("should have 6 input elements", () => {
    cy.get("input").should("have.length", 6);
  })

  it("should allow user to enter text into the input fields and display that data on the page", () => {
    cy.get("input").eq(0).type("Martin");
    cy.get("input").eq(1).type("Gibbons");
    cy.get("input").eq(2).type("mgibbons");
    cy.get("input").eq(3).type("mgibbons@fake.com");
    cy.get("input").eq(4).type("password12345");
    cy.get("input").eq(5).type("password12345");

    cy.get("input").eq(0).should("have.value", "Martin");
    cy.get("input").eq(1).should("have.value", "Gibbons");
    cy.get("input").eq(2).should("have.value", "mgibbons");
    cy.get("input").eq(3).should("have.value", "mgibbons@fake.com");
    cy.get("input").eq(4).should("have.value", "password12345");
    cy.get("input").eq(5).should("have.value", "password12345");

    cy.get("button").click();

    cy.get("#firstName").should("have.value","Martin");
    cy.get("#lastName").should("have.value","Gibbons");
    cy.get("#username").should("have.value","mgibbons");
    cy.get("#email").should("have.value","mgibbons@fake.com");
    cy.get("#password").should("have.value","password12345");
    cy.get("#confirmPassword").should("have.value","password12345");
  })

  it("should show error messages when the user omits required data", () => {
    // populate the form with valid data
    // password fields entries do not match!
    cy.get("input").eq(0).type("Tom");
    cy.get("input").eq(1).type("Jones");
    cy.get("input").eq(2).type("tjones");
    cy.get("input").eq(3).type("tjones@fake.com");
    cy.get("input").eq(4).type("password12345");
    cy.get("input").eq(5).type("password12345678");
    cy.get("button").click();

    // we should see an error "Passwords do not match":
    cy.get("#error").should("be.visible");
    cy.get("#error").should("contain", "Passwords do not match");

    // delete the invlaid "678" from the second password field:
    cy.get("input").eq(5).type(backspaces(3));
    
    // submit the valid form:
    cy.get("button").click();
    
    // delete the entire username entry:
    cy.get("input").eq(2).type(backspaces("tjones".length));

    // submit the form again:
    cy.get("button").click();

    // we should see an error "Username is required":
    cy.get("#error").should("contain", "Username is required");
    
    // populate the username field with valid data:
    cy.get("input").eq(2).type("tomjones");

    // submit the form again:
    cy.get("button").click();
    
    // no errors should be shown:
    cy.get("#error").should("be.not.visible");

    cy.get("button").click();

  })
})