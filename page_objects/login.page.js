const BasePage = require('./base.page');

class LoginPage extends BasePage {
  get usernameInput() {
    return $('~test-Username');
  }

  get passwordInput() {
    return $('~test-Password');
  }

  get loginButton() {
    return $('~test-LOGIN');
  }

  async login(username, password) {
    await this.setValue(this.usernameInput, username);
    await this.setValue(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}

module.exports = new LoginPage();
