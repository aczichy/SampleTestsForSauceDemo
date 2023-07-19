import { checkout } from "./checkoutPage";

export class cartPage {
	checkoutSelector = '.checkout_button';

    clickOnCheckoutButton() {
        cy.get(this.checkoutSelector).click();
        return checkout;
    }
}

export const cart = new cartPage();