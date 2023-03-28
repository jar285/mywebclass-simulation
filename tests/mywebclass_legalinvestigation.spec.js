// Import Playwright libraries and assertion library
const { test, expect } = require('@playwright/test');

// Define the test
test('Should display a consent banner and allow user to opt-in or out', async ({ page }) => {
  // Navigate to the website
  await page.goto('http://localhost:3000');

  // Assert that the consent banner is visible
  const consentBanner = await page.waitForSelector('.consent-banner');
  expect(consentBanner).not.toBeNull();

  // Assert that the opt-in and opt-out buttons are visible
  const optInButton = await consentBanner.waitForSelector('.opt-in');
  expect(optInButton).not.toBeNull();

  const optOutButton = await consentBanner.waitForSelector('.opt-out');
  expect(optOutButton).not.toBeNull();

  // Click the opt-in button and assert that data collection is enabled
  await optInButton.click();
  const dataCollectionEnabled = await page.evaluate(() => window.dataCollectionEnabled);
  expect(dataCollectionEnabled).toBe(true);

  // Click the opt-out button and assert that data collection is disabled
  await optOutButton.click();
  const dataCollectionDisabled = await page.evaluate(() => window.dataCollectionEnabled);
  expect(dataCollectionDisabled).toBe(false);
});
