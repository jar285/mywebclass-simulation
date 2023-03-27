const { test, expect } = require('@playwright/test')

test('Privacy policy contains target words', async ({ page }) => {
  await page.goto('http://localhost:3000/privacy.html')
  const privacyPolicyText = await page.textContent('#bodyOfPrivacyPolicy')

  expect(privacyPolicyText).toContain('Google Analytics')
  expect(privacyPolicyText).toContain('protect')
  expect(privacyPolicyText).toContain('collect')
  expect(privacyPolicyText).toContain('legal')
})