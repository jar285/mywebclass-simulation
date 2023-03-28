// @ts-check
const { test, expect } = require('@playwright/test');

test('Keyboard navigation test', async ({ page }) => {
  // Navigate to the page you want to test
  await page.goto('http://localhost:3000');

  // Find the button element
  const button = await page.$('#my-button');

  // Check if button exists before attempting to focus on it
  expect(button).not.toBeNull();

  // Focus on the button and press Enter
  await button.focus();
  await page.keyboard.press('Enter');

  // Check that the expected element is now visible
  const message = await page.$('#my-message');
  expect(await message.isVisible()).toBe(true);
});

