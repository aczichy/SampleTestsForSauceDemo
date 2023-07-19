import { login } from "../support/pages/loginPage";
import { products } from "../support/pages/productsPage";

describe("Operation on the Products page", () => {

	const nameOfItem = "Sauce Labs Bolt T-Shirt";
	const numberOfItemInCart = "1";
	let sortingValues = [
		["Name (A to Z)", "asc", "name"],
		["Name (Z to A)", "desc", "name"],
		["Price (low to high)", "asc", "price"],
		["Price (high to low)", "desc", "price"],
	];

	beforeEach(() => {
		login.login(Cypress.config("standardUser"), Cypress.config("password"));
	});

	it(`Should add item to cart`, () => {
		// Act
		products.clickOnButtonForItem(nameOfItem, "Add to cart");

		// Assert
		products.checkIfButtonHasChangedNameOn(nameOfItem, "Remove");
		products.checkIfNumberOfItemInCartIsValid(numberOfItemInCart);
	});

	it(`Should remove item to cart`, () => {
		// Act
		products.clickOnButtonForItem(nameOfItem, "Add to cart");
		products.clickOnButtonForItem(nameOfItem, "Remove");

		// Assert
		products.checkIfButtonHasChangedNameOn(nameOfItem, "Add to cart");
		products.checkIfThereIsNoItemsInCart();
	});

	sortingValues.forEach((sort) => {
		it(`Should sorting item by ${sort[0]}`, () => {
			// Act
			products.chooseSorting(sort[0]);

			//Assert
			products.testSorting(sort[1], sort[2]);
		});
	});
});
