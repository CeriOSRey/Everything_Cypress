# Handling asyc commands

- any commands that is not a method of cypress will be run asychronously so to handle them. wrap them inside a then()

example:
    cy.get("button").then(() => {
        console.log("This will run asychronously so put this in here.")
    })

