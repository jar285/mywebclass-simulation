// @ts-check
const { test, expect } = require('@playwright/test')

test('Check for Side Navigation Bar Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000/content.html')

  // Check if the side navigation bar element is present on the page
  const sidebarExists = await page.$('#toc_menu')
  expect(sidebarExists).not.toBeNull()
})