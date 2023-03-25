const { test, expect } = require('@playwright/test');
const HTML5Validator = require('html5-validator');

test('HTML Validation Test', async ({ context, page }) => {
  // Add the html5-validator library to the page context
  await context.addInitScript({ content: `window.HTML5Validator = ${HTML5Validator.toString()}` });

  // Navigate to the website to test
  await page.goto('http://localhost:3000');

  // Check if there are any HTML validation errors
  const validationErrors = await page.evaluate(() => {
    const validationErrors = [];
    const validator = new window.HTML5Validator();

    validator.check(document, (err) => {
      if (err) {
        validationErrors.push(err.message);
      }
    });

    return validationErrors;
  });

  expect(validationErrors).toHaveLength(0);
});
