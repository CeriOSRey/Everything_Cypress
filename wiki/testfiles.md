# Test components inside testfiles

- need a cypress file identifier at the top
    - ///<reference types="cypress">

- Wrap the tests in either a context or describe block

- user beforeEach and afterEach to setup and clean up.

- wrap the test in an it block

- for readability purpose. only use one .should, after the first .should, use .and 