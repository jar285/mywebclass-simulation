// @ts-check
const { test, expect } = require('@playwright/test')

test('Check for Img Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000')

  // Check if the img element is present on the page
  const imgExists = await page.$('img')
  expect(imgExists).not.toBeNull()
})