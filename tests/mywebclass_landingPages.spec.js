const { test, expect } = require('@playwright/test');

test('Landing Page Load Time Test', async ({ page }) => {
  // Navigate to the landing page and wait for it to load
  const startTime = Date.now();
  await page.goto('http://localhost:3000/landing');
  await page.waitForLoadState('domcontentloaded');

  // Check that the page loaded within a reasonable time
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThanOrEqual(3000);
});
In this ex