# InPost Test Task - Mobile Automation with Appium
## Description
This project automates testing of the **Android.SauceLabs.Mobile.Sample.app** mobile application using Appium and WebdriverIO.
The tests verify various app functionalities such as adding products to the cart, proceeding to checkout, and validating payment and shipping information.

## Installation and Setup
1. Clone the repository:
```bash
git clone https://github.com/nataliagorska007/inpost_test_task_ng.git
cd inpost_test_task_ng
```

2. Install dependencies:
```bash
npm install
```
3. Download the test APK from the official Sauce Labs page (https://github.com/saucelabs/sample-app-mobile/releases).
4. Configure the path to the APK in the **wdio.conf.js** file under the **capabilities.app** section or use a **.env** file with the APP_PATH environment variable:
```bash
"appium:app": "C:/path/to/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk",
```
5. Adjust device name and Android version if you use a different emulator or device (in the config file):
```bash
"appium:deviceName": "Pixel_5_API_30",
"appium:platformVersion": "11.0",
```
## Running tests
1. Make sure your emulator is running and recognized by Appium.
2. Start Appium server:
```bash
appium
```
3. In a separate terminal, run the tests:
```bash
npx wdio run wdio.conf.js
```
## Project Structure
- /tests – automated test scripts
- /page_objects – page models (Page Object Model pattern)
- wdio.conf.js – WebdriverIO and Appium configuration
- testData.js – test data
- secrests.js - user credentials

## Notes
- This project uses Mocha in bdd mode for clear and readable tests.
- If you use a different emulator, update **deviceName** and **platformVersion** accordingly.
- Make sure the app APK is available locally and the path is set correctly.
- You can use a .env file to manage your environment variables such as app path.
