const { test, expect } = require('@playwright/test');

test('HTML Validation Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000');

  // Check if there are any HTML validation errors
  const validationErrors = await page.evaluate(() => {
    const validationErrors = [];
    const validator = new window.html5Validator();

    validator.check(document, (err) => {
      if (err) {
        validationErrors.push(err.message);
      }
    });

    return validationErrors;
  });

  expect(validationErrors).toHaveLength(0);
});
