/// <reference types="cypress" />

describe("habit dashboard", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("should display modal when add button is clicked", () => {
        cy.get("#habit-add-btn")
        .click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("should display habit card when new habit is added", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']")
        .type("Drink water.")
        cy.contains("[type='button']","Save Changes")
        .click()
        cy.contains("Drink water.")
        .should("be.visible")
        .and("have.class", "HabitCard__habit-container")
        
    })

    it("should togle icon when habit card is clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']")
        .type("Drink water.")
        cy.contains("[type='button']","Save Changes")
        .click()
        cy.contains("Drink water.")
        .click()
        cy.get("[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']")
        .should("be.visible")
        .click()
        cy.get('[src="/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg"]')
        .should("be.visible")
    })
})