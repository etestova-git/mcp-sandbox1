// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    headless: false,
  },
  reporter: 'list',
};

module.exports = config;
