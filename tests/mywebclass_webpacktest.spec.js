// @ts-check
const { test, expect } = require('@playwright/test');

test('Webpack Build Time Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000');

  // Measure the time it takes for the Webpack bundle to be built
  const buildStartTime = Date.now();
  await page.click('content.html');
  await page.waitForSelector('content.html.success');
  const buildTime = Date.now() - buildStartTime;

  // Check if the build time is below a certain threshold
  expect(buildTime).toBeLessThanOrEqual(10000); // 10 seconds
});
