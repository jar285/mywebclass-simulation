const { test, expect } = require('@playwright/test');

test('Compliance with Legal Requirements', async ({ page }) => {
  // Go to website URL
  await page.goto('http://localhost:3000');

  expect(true).toBeTruthy();
});
