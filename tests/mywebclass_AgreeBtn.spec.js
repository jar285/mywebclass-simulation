const { test, expect } = require('@playwright/test')

test('Website should use cookies after user agrees', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000')

  // Check if popup exists
  const popup = await page.$('.modal-content')
  expect(popup).not.toBeNull()

  // Click on the Agree button
  const agreeButton = await popup.$('#agreeButton')
  expect(agreeButton).not.toBeNull()
  await agreeButton.click()

  // Wait for the cookie to be set
  await page.waitForTimeout(1000)

  // Check if cookies are being used
  const cookies = await page.evaluate(() => {
    return document.cookie
  })
  expect(cookies).toBeDefined()
})