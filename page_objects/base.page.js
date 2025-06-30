class BasePage {
  async click(element) {
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
  }

  async setValue(element, value) {
    await element.waitForDisplayed({ timeout: 5000 });
    await element.setValue(value);
  }

  async getText(element) {
    await element.waitForDisplayed({ timeout: 5000 });
    return element.getText();
  }

  async waitForElement(element) {
    await element.waitForDisplayed({ timeout: 10000 });
  }

  async isDisplayed(element) {
    await element.waitForDisplayed({ timeout: 5000 });
    return element.isDisplayed();
  }

  async scrollDown() {
    const { height, width } = await driver.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.8;
    const endY = height * 0.3;

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 300 },
          { type: "pointerMove", duration: 500, x: startX, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();
  }

  async scrollToElementContainingText(text, maxScrolls = 5) {
    for (let i = 0; i < maxScrolls; i++) {
      try {
        const element = await $(
          `//android.widget.TextView[contains(@text, "${text}")]`
        );
        if (await element.isDisplayed()) {
          return element;
        }
      } catch (err) {}

      await this.scrollDown();
    }

    throw new Error("Element not found");
  }
}

module.exports = BasePage;
