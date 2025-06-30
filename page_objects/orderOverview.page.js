const BasePage = require("./base.page");
const testData = require("../testData");

class CheckoutOverviewPage extends BasePage {
  get finishButton() {
    return $("~test-FINISH");
  }

  async getLabelByText(text) {
    const element = await $(`//android.widget.TextView[@text="${text}"]`);
    return await element.getText();
  }

  async getSingleTextContaining(fullText) {
    const element = await this.scrollToElementContainingText(fullText);
    return await element.getText();
  }

  async getOverviewInfo() {
    return {
      paymentInformation: await this.getLabelByText(
        testData.paymentInformation
      ),
      payment: await this.getLabelByText(testData.payment),
      shippingInformation: await this.getLabelByText(
        testData.shippingInformation
      ),
      shipping: await this.getLabelByText(testData.shipping),
      itemTotalInformation: await this.getSingleTextContaining(
        testData.itemTotalInformation
      ),
      taxInformation: await this.getSingleTextContaining(
        testData.taxInformation
      ),
      totalInformation: await this.getSingleTextContaining(
        testData.totalInformation
      ),
    };
  }

  async finishOrder() {
    await this.click(this.finishButton);
  }
}

module.exports = new CheckoutOverviewPage();
