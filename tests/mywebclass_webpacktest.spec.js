// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Webpack Dev Server Test', () => {
  test('Dev server runs on the expected port', async ({ page }) => {
    // Navigate to the page with the Webpack dev server running
    await page.goto('http://localhost:3000');

    // Get the current URL of the page
    const currentUrl = page.url();

    // Check if the current URL contains the expected port number
    expect(currentUrl).toContain(':3000');
  });
});
