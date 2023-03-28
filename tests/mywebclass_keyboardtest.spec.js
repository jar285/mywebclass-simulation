// @ts-check
const { test, expect } = require('@playwright/test');

test('Keyboard navigation test', async ({ page }) => {
  // Navigate to the page you want to test
  await page.goto('http://localhost:3000');

  // Check if button exists before attempting to focus on it
  const button = await page.$('#my-button');
  expect(button).not.toBeNull();

  // Focus on the button and press Enter
  await button.focus();
  await page.keyboard.press('Enter');

  // Wait for the message to become visible
  const message = await page.$('#my-message');
  await message.waitForElementState('visible');

  // Check that the expected element is now visible
  expect(await message.isVisible()).toBe(true);
});

