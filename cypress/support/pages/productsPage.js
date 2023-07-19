import { cart } from "./cartPage";

export class productsPage {
	shoppingCartContainerSelector = "#shopping_cart_container";
	itemNameSelector = ".inventory_item_name";
	priceBarSelector = ".pricebar";
	addToCartButtonSeletor = ".btn_inventory";
	itemSelector = ".inventory_item";
	priceSelector = ".inventory_item_price";
	shoppingCartBadgeSelector = ".shopping_cart_badge";
	sortingSelector = ".product_sort_container";

	addToCart(nameOfItem) {
		this.clickOnButtonForItem(nameOfItem, 'Add to cart');
		return this;
	}

	removeFromCart(nameOfItem) {
		this.clickOnButtonForItem(nameOfItem, 'Remove')
		return this;
	}


	clickOnButtonForItem(nameOfItem, nameOfButton) {
		cy.contains(this.itemNameSelector, nameOfItem)
			.parents(this.itemSelector)
			.find(this.addToCartButtonSeletor, nameOfButton)
			.click();
	}

	checkIfShoppingCartIsVisible() {
		cy.get(this.shoppingCartContainerSelector).should("be.visible");
	}

	checkIfButtonHasChangedNameOn(nameOfItem, name) {
		cy.contains(this.itemNameSelector, nameOfItem)
			.parents(this.itemSelector)
			.find(this.addToCartButtonSeletor)
			.should("contain", name);
		return this;
	}

	checkIfNumberOfItemInCartIsValid(number) {
		cy.get(this.shoppingCartBadgeSelector).should("contain", number);
	}

	checkIfThereIsNoItemsInCart() {
		cy.get(this.shoppingCartBadgeSelector).should("not.exist");
	}

	chooseSorting(value) {
		cy.get(this.sortingSelector).select(value);
	}

	testSorting(sortOrder, sortBy) {
		cy.get(this.itemNameSelector).then((products) => {
			let values;
			if (sortBy === "name") {
				values = Array.from(products).map((product) => product.innerText);
			} else if (sortBy === "price") {
				values = Array.from(products).map((product) =>
					parseFloat(product.getAttribute(this.priceSelector))
				);
			}
			const sortedValues =
				sortOrder === "asc" ? [...values].sort() : [...values].sort().reverse();
			expect(values).to.deep.equal(sortedValues);
		});
	}

	viewCart() {
		cy.get(this.shoppingCartContainerSelector).click();
		return cart;
    }
}

export const products = new productsPage();
