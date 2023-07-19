export class checkoutPage {

	firstNameSelector = '#first-name';
	lastNameSelector = '#last-name';
	zipCodeSelector = '#postal-code';
	continueSelector = '#continue';
	finishSelector = '#finish';
	checkoutCompleteSelector = '#checkout_complete_container';
	titleSelector = '.title';


	fillFirstName(firstName) {
		cy.get(this.firstNameSelector).type(firstName);
		return this;
	}

	fillLastName(lastName) {
		cy.get(this.lastNameSelector).type(lastName);
		return this;
	}

	fillZipCode(code) {
		cy.get(this.zipCodeSelector).type(code);
		return this;
	}

	clickOnContinueButton() {
		cy.get(this.continueSelector).click();
		return this;
	}

	clickOnFinishButton() {
		cy.get(this.finishSelector).click();
		return this;
	}

	validateInformation(information) {
		cy.get(this.checkoutCompleteSelector).should('contain.text', information);
		return this;
	}

	validateIfTitlehasText(text) {
		cy.get(this.titleSelector).should('contain.text', text);
		return this;
    }
}

export const checkout = new  checkoutPage();