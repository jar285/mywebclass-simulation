// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Webpack Build Status Test', () => {
  test('Webpack builds successfully', async ({ page }) => {
    // Navigate to the page that displays the build status
    await page.goto('http://localhost:3000/webpack-build-status');

    // Verify that the build status is displayed as expected
    const buildStatus = await page.innerText('#build-status');
    expect(buildStatus).toBe('Webpack build successful!');
  });
});
