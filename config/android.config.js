module.exports = {
  platformName: 'Android',
  platformVersion: process.env.PLATFORM_VERSION || '11.0',
  deviceName: process.env.DEVICE_NAME || 'Pixel_5_API_30',
  app: process.env.APP_PATH || '/path/to/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
  automationName: 'UiAutomator2'
}
