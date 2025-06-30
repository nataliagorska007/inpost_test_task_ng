const BasePage = require("./base.page");

class CartPage extends BasePage {
  get continueButton() {
    return $("~test-CHECKOUT");
  }

  async isProductInCart(name) {
    const selector = `//android.widget.TextView[@text="${name}"]`;
    try {
      const product = await $(selector);
      return await product.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  async continueCheckout() {
    await this.continueButton.click();
  }
}

module.exports = new CartPage();
