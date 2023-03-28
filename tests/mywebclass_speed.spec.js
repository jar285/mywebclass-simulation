const { test, expect } = require('@playwright/test');

const WEBSITE_URL = 'http://localhost:3000';

test.describe('Website Performance Test', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(WEBSITE_URL, { waitUntil: 'domcontentloaded' });
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Should load the website within 3 seconds', async () => {
    const navigationPromise = page.waitForNavigation();
    const startTime = Date.now();
    await page.goto(WEBSITE_URL, { waitUntil: 'domcontentloaded' });
    await navigationPromise;
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThanOrEqual(3000);
  });