/// <reference types="cypress"/>

// SAMPLE ONLY NO ACTUAL SERVER/CLIENT BEING TESTED
describe("Testing the Server/Client connection", () => {
    beforeEach(() => {
        cy.visit("/rewards")
    })

    // testing server connection
    it("should display rewards by testing actual http call", () => {
        cy.get("ul")
        .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
        .and('contain', '850 points for fasting for 5 days straight')
    })

    // mocking data
    // intercept the http request, and returns the contents of the fixture, rewards.json instead.
    it("should display rewards by mocking http request", () => {
        cy.intercept('GET', 'http://localhost:3000/rewards', {
            fixture: "rewards.json"
        })

        // returning data w/out using a JSON file. first function will have a request parameter
        // which we use to have a reply  
        cy.intercept("POST", "http://requestYouWantToInterecept.com", (req) => {
                req.reply((res) => {
                    res.send({
                        msg: "Your comment is not appropriate."
                    })
                })
            })

        // then you can test the data returned from fixture.
        cy.get("ul")
        .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
        .and('contain', '850 points for fasting for 5 days straight')
    })
})