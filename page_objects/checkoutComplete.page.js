const BasePage = require("./base.page");

class CheckoutCompletePage extends BasePage {
  get thankYouMessage() {
    return $( '//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]');
  }

  async getConfirmationMessageText() {
    return await this.thankYouMessage.getText();
  }
}

module.exports = new CheckoutCompletePage();
