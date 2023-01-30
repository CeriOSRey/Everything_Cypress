# Interacting with Server

- 2 ways of testing application that interacts with server
    - Test the client and server
        - testing the data returned by server
    - Mock http requests
        - intercept the http request
        - cy.intercept("GET", "http://requestYouWantToInterecept.com", {fixture: "fixtureFile.json"})
        - test the data inside fixture json file instead
        - we can also make a straight reply instead of using a json file.
            - cy.intercept("POST", "http://requestYouWantToInterecept.com", (req) => {
                req.reply((res) => {
                    res.send({
                        msg: "Your comment is not appropriate."
                    })
                })
            })


