import { checkout } from "../support/pages/checkoutPage";
import { login } from "../support/pages/loginPage";
import { products } from "../support/pages/productsPage";

describe("Should buy a product", () => {
	const nameOfItem = "Sauce Labs Bolt T-Shirt";
	const firstName = "Ann";
	const lastName = "Smith";
	const zipCode = "1111111";

	beforeEach(() => {
		login.login(Cypress.config("standardUser"), Cypress.config("password"));
	});

	it(`Should buy product`, () => {
		// Act
		products
			.addToCart(nameOfItem)
			.viewCart()
			.clickOnCheckoutButton()
			.fillFirstName(firstName)
			.fillLastName(lastName)
			.fillZipCode(zipCode)
			.clickOnContinueButton()
			.clickOnFinishButton();
		// Assert
		checkout
			.validateInformation("Thank you for your order!")
			.validateIfTitleHasText("Checkout: Complete!");
	});
});
