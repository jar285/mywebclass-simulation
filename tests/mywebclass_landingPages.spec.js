const { test, expect } = require('@playwright/test')

test('Landing Page Load Time Test', async ({ page }) => {
  // Start the performance trace
  await page.route('**/*', (route) => route.continue())
  await page.tracing.start({ categories: ['devtools.timeline'] })

  // Navigate to the landing page and wait for it to load
  const startTime = Date.now()
  await page.goto('http://localhost:3000/landing')
  await page.waitForLoadState()

  // Stop the performance trace and get the metrics
  const performanceTrace = await page.tracing.stop()
  const metrics = await page.evaluate(() => JSON.stringify(window.performance.timing))

  // Check that the page loaded within a reasonable time
  const loadTime = Date.now() - startTime
  expect(loadTime).toBeLessThanOrEqual(3000)

  // Log the performance metrics
  console.log('Performance Metrics:', metrics)
})
