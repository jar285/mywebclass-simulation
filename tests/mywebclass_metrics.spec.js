const { test, expect } = require('@playwright/test');

test('MyWebClass.org has a valid SSL certificate', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const securityDetails = await page.context().securityDetails();
  expect(securityDetails.protocol()).toBe('TLS 1.3');
});

test.describe('CI/CD Pipeline - Performance Test', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Load Time', async () => {
    const loadTime = await page.evaluate(() => window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart);
    expect(loadTime).toBeLessThanOrEqual(5000);
  });
});
