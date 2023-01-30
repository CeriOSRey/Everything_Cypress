/// <reference types="cypress"/>

describe("Accomplishment Dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should showcase error if information is missing", () => {
        cy.get('[data-cy="accomplishment-title-input"]')
        .type("Basketball accomplishments")
        cy.get('[data-cy="accomplishment-input"]')
        .type("I did a couple fade aways.")
        cy.contains("Submit Accomplishment")
        .click()
        cy.get('[class="Accomplishment-error-container"]')
        .should("be.visible")
    })

    it("should display validation page", () => {
        cy.get('[data-cy="accomplishment-title-input"]')
        .type("Basketball accomplishments")
        cy.get('[data-cy="accomplishment-input"]')
        .type("I did a couple fade aways.")
        cy.get('[data-cy="accomplishment-checkbox"]')
        .check()
        cy.contains("Submit Accomplishment")
        .click()
        cy.contains("This Accomplisment was Successfully Submitted")
        .should("be.visible")
    })

    it("should return back to accomplisment dashboard with empty input fields", () => {
        cy.get('[data-cy="accomplishment-title-input"]')
        .type("Basketball accomplishments")
        cy.get('[data-cy="accomplishment-input"]')
        .type("I did a couple fade aways.")
        cy.get('[data-cy="accomplishment-checkbox"]')
        .check()
        cy.contains("Submit Accomplishment")
        .click()
        cy.contains("This Accomplisment was Successfully Submitted")
        .should("be.visible")
        cy.get('[class="Accomplishment-btn"]')
        .click()
        cy.contains('Accomplishment')
        .should('be.visible')
        cy.get('[data-cy="accomplishment-input"')
        .should('be.empty')
        cy.get('[data-cy="accomplishment-checkbox"]')
        .should('not.be.checked')
        cy.get('[data-cy="accomplishment-title-input"]')
        .should('have.value', '')
    })
})