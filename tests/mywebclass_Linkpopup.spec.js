const { test, expect } = require('@playwright/test')
test('Privacy Policy Link Test', async ({ page }) => {
  // Go to the link that has the popup
  await page.goto('http://localhost:3000')
  // Wait for the popup to appear
  const popup = await page.waitForSelector('.modal-content', { visible: true })
  // Check if the privacy policy link is present in the popup
  const privacyPolicyLink = await popup.$('a[href="privacy.html"]')
  expect(privacyPolicyLink).not.toBeNull()
})
}, { timeout: 60000 })