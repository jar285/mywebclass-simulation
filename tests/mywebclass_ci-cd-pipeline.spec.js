// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('CI/CD Pipeline - Performance Test', () => {
  let logs = []

  test.beforeEach(async ({ page }) => {
    // Navigate to the website to test
    await page.goto('http://localhost:3000')
  })

  test('Load Time', async ({ page }) => {
    // Measure the load time of the website
    const loadStartTime = Date.now()
    await page.waitForLoadState('networkidle')
    const loadTime = Date.now() - loadStartTime

    // Check if the load time is below a certain threshold
    expect(loadTime).toBeLessThanOrEqual(5000) // 5 seconds
  })

  test.afterEach(async ({ page }) => {
    // Record console logs for debugging purposes
    logs.push(...await page.evaluate(() => {
      return window.__logs__ || []
    }))
  })

  test.afterAll(async () => {
    console.log(logs)
  })
})



