const BasePage = require('./base.page');

class ProductsPage extends BasePage {
    get productTitles() {
        return $$('~test-Item title');
    }
    get addToCartButtons() {
        return $$('~test-ADD TO CART');
    }
    get cartIcon() {
        return $('~test-Cart');
    }

    async addProductByName(name) {
        await this.waitForElement(this.productTitles[0]);
        const titles = await this.productTitles;
        const buttons = await this.addToCartButtons;
        for (let i = 0; i < titles.length; i++) {
            const titleText = await titles[i].getText();
            console.log(`Adding product: ${titleText}`);
            if (titleText === name) {
                await this.click(buttons[i]);
                return;
            }
        }
        throw new Error(`Product ${name} not found`);
    }

    async openCart() {
        await this.click(this.cartIcon);
    }
}

module.exports = new ProductsPage();
