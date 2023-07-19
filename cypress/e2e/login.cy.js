import { login } from "../support/pages/loginPage";
import { products } from "../support/pages/productsPage";

describe("Log in to the Application", () => {
	const wrongPassword = "wrongPassword";
	const lockedOutUser = "locked_out_user";
	const wrongUsername = "wrongUserName";

	it(`Should log in to the Application as ${Cypress.config(
		"standardUser"
	)}`, () => {
		// Act
		login.login(Cypress.config("standardUser"), Cypress.config("password"));

		// Assert
		products.checkIfShoppingCartIsVisible();
	});

	it("Should not log in to the Application with wrong username", () => {
		// Act
		login.login(wrongUsername, Cypress.config("password"));

		// Assert
		login.validateIfErrorMessageIsDiplayed(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});

	it("Should not log in to the Application with wrong password", () => {
		// Act
		login.login(Cypress.config("standardUser"), wrongPassword);

		// Assert
		login.validateIfErrorMessageIsDiplayed(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});

	it("Should not log in to the Application on the locked out user", () => {
		// Act
		login.login(lockedOutUser, Cypress.config("password"));

		// Assert
		login.validateIfErrorMessageIsDiplayed(
			"Epic sadface: Sorry, this user has been locked out."
		);
	});

	it("Should not log in to the Application with empty username", () => {
		// Act
		login.login("{backspace}", Cypress.config("password"));

		// Assert
		login.validateIfErrorMessageIsDiplayed(
			"Epic sadface: Username is required"
		);
	});

	it("Should not log in to the Application with empty password", () => {
		// Act
		login.login(Cypress.config("standardUser"), "{backspace}");

		// Assert
		login.validateIfErrorMessageIsDiplayed(
			"Epic sadface: Password is required"
		);
	});
});
