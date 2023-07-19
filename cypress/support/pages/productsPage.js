export class productsPage {
	shoppingCartContainerSelector = "#shopping_cart_container";
	itemNameSelector = ".inventory_item_name";
	priceBarSelector = ".pricebar";
	addToCartButtonSeletor = ".btn_inventory";
	itemSelector = ".inventory_item";
	priceSelector = ".inventory_item_price";
	shoppingCartBadgeSelector = ".shopping_cart_badge";
	sortingSelector = ".product_sort_container";

	clickOnButtonForItem(nameOfItem, nameOfButton) {
		cy.contains(this.itemNameSelector, nameOfItem)
			.parents(this.itemSelector)
			.find(this.addToCartButtonSeletor, nameOfButton)
			.click();
		return this;
	}

	checkIfShoppingCartIsVisible() {
		cy.get(this.shoppingCartContainerSelector).should("be.visible");
	}

	checkIfButtonHasChangedNameOn(nameOfItem, name) {
		cy.contains(this.itemNameSelector, nameOfItem)
			.parents(this.itemSelector)
			.find(this.addToCartButtonSeletor)
			.should("contain", name);
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
}

export const products = new productsPage();
