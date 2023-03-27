// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('HTML Validation Test', () => {
  test('No HTML validation errors', async ({ page }) => {
    // Navigate to the website to be tested
    await page.goto('http://localhost:3000');

    // Check if there are any HTML validation errors
    const validationErrors = await page.evaluate(() => {
      const results = document.querySelectorAll('#results .error');
      return Array.from(results).map((result) => result.textContent);
    });

    // Check if there are no validation errors
    expect(validationErrors).toHaveLength(0);
  });
});


