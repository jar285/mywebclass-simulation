// @ts-check
const { test, expect } = require('@playwright/test')

test('Privacy policy should follow GDPR guidelines', async ({ page }) => {
  // Navigate to the privacy policy page
  await page.goto('http://localhost:3000/privacy.html')

  // Check if the policy includes a statement about GDPR compliance
  const policyText = await page.textContent('body')
  const includesGDPRStatement = policyText.includes('GDPR')
  expect(includesGDPRStatement).toBeTruthy()

  // Check if the policy includes information about data
  const includesDataProcessingInfo = policyText.includes('data')
  expect(includesDataProcessingInfo).toBeTruthy()

  // Check if the policy includes information about rights
  const includesDataSubjectRights = policyText.includes('rights')
  expect(includesDataSubjectRights).toBeTruthy()
})

