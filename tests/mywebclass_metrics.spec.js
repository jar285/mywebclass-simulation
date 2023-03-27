const { test, expect } = require('@playwright/test');

test.describe('MyWebClass.org metrics tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to site
    await page.goto('http://localhost:3000');
  });

  test('MyWebClass.org has alt text on images', async ({ page }) => {
    // Check for alt text on images
    const images = await page.$$('img');
    for (const image of images) {
      const alt = await image.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('MyWebClass.org has a valid SSL certificate', async ({ page }) => {
    // Check for valid SSL certificate
    const response = await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    const securityDetails = response.securityDetails();
    expect(securityDetails.protocol()).toBe('TLS 1.2');
    expect(securityDetails.validFrom()).toBeGreaterThan(0);
    expect(securityDetails.validTo()).toBeGreaterThan(Date.now() / 1000);
    expect(securityDetails.issuer()).toContain('Let\'s Encrypt');
  });

  test('MyWebClass.org has expected load time', async ({ page }) => {
    // Measure load time
    const startTime = Date.now();
    await page.goto('http://localhost:3000', { waitUntil: 'load' });
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThanOrEqual(5000); // 5 seconds
  });
});