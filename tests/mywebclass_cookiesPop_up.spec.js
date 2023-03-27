const { test, expect } = require('@playwright/test')

test('Popup contains cookies', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000')

  // Wait for the popup to appear
  await page.waitForSelector('.modal-content')

  // Get the text content of the popup
  const popupText = await page.textContent('.modal-content')

  // Check if the text "cookies" is present in the popup
  expect(popupText).toContain('cookies')
})