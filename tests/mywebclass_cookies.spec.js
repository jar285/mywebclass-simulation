// @ts-check
const { test, expect } = require('@playwright/test')

test('Website should be using cookies', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000')

  // Check if cookies are being used
  const cookies = await page.evaluate(() => {
    return document.cookie
  })
  expect(cookies).toBeDefined()
})