import { products } from "./productsPage";

export class loginPage {
	loginInput = "#user-name";
	passwordInput = "#password";
	logInButton = "#login-button";
	errorMessage = ".error-message-container";

	login(username, password) {
		cy.get(this.loginInput).type(username);
		cy.get(this.passwordInput).type(password);
		cy.get(this.logInButton).click();
		return products;
	}

	validateIfErrorMessageIsDiplayed(errorMessage) {
		cy.get(this.errorMessage).should("contain", errorMessage);
	}
}

export const login = new loginPage();
