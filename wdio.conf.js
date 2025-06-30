require('dotenv').config();

exports.config = {
    runner: 'local',
    specs: ['./tests/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_5_API_30',
        'appium:platformVersion': '11.0',
        'appium:app': 'C:/{path}/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:appWaitActivity': 'com.swaglabsmobileapp.*'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    services: ['appium'],
    appium: { command: 'appium' },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    waitforTimeout: 10000,
    specFileRetries: 1,
};
