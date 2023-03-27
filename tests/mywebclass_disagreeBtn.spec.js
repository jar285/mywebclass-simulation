// @ts-check
const { test, expect } = require('@playwright/test')

test('Website should use cookies after user disagree', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000')

  // Check if popup exists
  const popup = await page.$('.modal-content')
  expect(popup).not.toBeNull()

  // Click on the Agree button
  const disagreeButton = await popup.$('#disagreeButton')
  expect(disagreeButton).not.toBeNull()
  await disagreeButton.click()

  // Wait for the cookie to be set
  await page.waitForTimeout(1000)

  // Check if cookies are being used
  const cookies = await page.evaluate(() => {
    return document.cookie
  })
  expect(cookies).toBeDefined()
})