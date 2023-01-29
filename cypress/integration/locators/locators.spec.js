/// <reference types="cypress"/>

describe("locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with the get command", () => {
        // get all elements by tag name
        cy.get("button")

        // get all elements by className use class name by prefixing with .
        cy.get(".btn-with-class")

        // get all elements with specific classes. Use attributes by wrapping it in []
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // get all elements by id using attribute or using #
        cy.get("[id='btn-with-id']")   // using attribute
        cy.get("#btn-with-id")         // prefixing with #

        // get all elements combo tagName AND class AND id
        cy.get("button.Elements-btn#btn-with-id")  // tag.className

        // get all elements combo tagName, class and type attribute
        cy.get("button.Elements-btn[type='Submit']")
    })

    it("locating elements with the contains command", () => {
        // get elements by text
        cy.contains("Unique Text")

        // get elements by text with selector
        cy.contains("[class='Elements-btn']", "Not Unique Text")
    })

    // get the parent element first with a get() then use find to get the element you want.
    it("locating elements with the find comman", () => {
        cy.get("#form-1").find(".btn-1")
    })
})