## Links

- Test site https://www.saucedemo.com/ 
- Code repository https://github.com/aczichy/SampleTestsForSauceDemo

## Tests

### Login tests
1. User should log in to the application using correct username and password.
2. User should not log in to the application with wrong username.
3. User should not log in to the application with wrong password.
4. User should not log in on the locked out user.
5. User should not log in to the application with empty username.
6. User should not log in to the application with empty password.

### Products tests
1. Add item to cart.
2. Remove item from cart.
3. Sorting products.


## How to install cypress?
To install Cypress use a command ```npm install cypress --save-dev```


## How to run tests?
To run Cypress tests, use a command ```npx cypress run``` or ```npx cypress open``` (if you want to run tests in an open browser)


## Test Architecture

### Page Object Pattern

Page Object Pattern is used in this project, which helps in separating the interaction logic with web pages from assertions in automated tests. This pattern contributes to improved readability, flexibility, and maintainability of tests.

### Decision to Place Assertions in Page Objects

The decision has been made to place assertions directly in the page object files. This approach was chosen for the following reasons:

- Easier test maintenance,
- Improved code readability,
- Flexibility in reusing the same assertions across different tests.


