# Setup Cypress

- install node packages after cloning: npm install
- run your application on your local machine: npm start
- install cypress: npm install cypress
- open cypress instance: npx cypress open
- it should generate a cypress folder with the cypress components and cypress.json
- setup cypres.json
    - ignore sample testfiles: "ignoreTestFiles: "/\*_/examples/_"
    - setup baseUrl: "baseUrl": "https://localhost:3000"
    - viewportWidth: 1920
    - viewportHeight: 1080
