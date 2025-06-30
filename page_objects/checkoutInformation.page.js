const BasePage = require('./base.page');

class CheckoutInformationPage extends BasePage {
    get firstNameInput() {
        return $('~test-First Name');
    }
    get lastNameInput() {
        return $('~test-Last Name');
    }
    get postalCodeInput() {
        return $('~test-Zip/Postal Code');
    }
    get continueButton() {
        return $('~test-CONTINUE');
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(String(firstName));
        await this.lastNameInput.setValue(String(lastName));
        await this.postalCodeInput.setValue(String(postalCode));
    }

    async continue() {
        await this.continueButton.click();
    }
}

module.exports = new CheckoutInformationPage();
