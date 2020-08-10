/// <reference types="cypress" />

const { ClassificationType } = require("typescript");

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //by Tag name
    cy.get("input");

    //by ID
    cy.get("#inputEmail");

    //by class name
    cy.get(".input-full-width");

    //by attribute name
    cy.get("[placeholder]");

    //by attribute name and value
    cy.get('[placeholder="Email"]');

    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //by tag name and attribute value
    cy.get('input[placeholder="Email"]');

    //by two different attribute
    cy.get('[placeholder="Email"][type="email"]');

    // by tag name, attribute with value, ID, and class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

    //most recommended way by cypress
    cy.get('[data-cy="imputEmail1"]');
  });
});
