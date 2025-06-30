const LoginPage = require("../page_objects/login.page");
const ProductsPage = require("../page_objects/products.page");
const CartPage = require("../page_objects/cart.page");
const CheckoutInformationPage = require("../page_objects/checkoutinformation.page");
const CheckoutOverviewPage = require("../page_objects/orderOverview.page");
const CheckoutCompletePage = require("../page_objects/checkoutComplete.page");
const secrets = require("../secrets");
const testData = require("../testData");
const { expect } = require("chai");

describe("Order flow", () => {
  it("Should complete order successfully", async () => {
    await LoginPage.login(
      secrets.username,
      secrets.password
    );

    await ProductsPage.addProductByName(testData.productName);
    await ProductsPage.openCart();
    const isProductInCart = await CartPage.isProductInCart(
      testData.productName
    );
    expect(isProductInCart).to.be.true;

    await CartPage.continueCheckout();

    await CheckoutInformationPage.fillCheckoutInformation(
      testData.shippingInfo.firstName,
      testData.shippingInfo.lastName,
      testData.shippingInfo.postalCode
    );
    await CheckoutInformationPage.continue();

    const overview = await CheckoutOverviewPage.getOverviewInfo();
    expect(overview.paymentInformation).to.equal(testData.paymentInformation);
    expect(overview.payment).to.equal(testData.payment);
    expect(overview.shippingInformation).to.equal(testData.shippingInformation);
    expect(overview.shipping).to.equal(testData.shipping);
    expect(overview.itemTotalInformation).to.equal(
      testData.itemTotalInformation
    );
    expect(overview.taxInformation).to.equal(testData.taxInformation);
    expect(overview.totalInformation).to.equal(testData.totalInformation);

    await CheckoutOverviewPage.finishOrder();

    const confirmationMessage =
      await CheckoutCompletePage.getConfirmationMessageText();
    expect(confirmationMessage).to.equal(testData.message);
  });
});
