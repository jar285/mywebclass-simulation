const { test, expect } = require('@playwright/test')

test('Popup Test', async ({ page }) => {
  // Go to the website that has the popup
  await page.goto('http://localhost:3000')

  // Wait for the popup to appear
  const popup = await page.waitForSelector('.modal-content', { visible: true })

  // Check if the popup is visible
  const isPopupVisible = await popup.isVisible()
  expect(isPopupVisible).toBe(true)
})