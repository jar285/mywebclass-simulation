const { test, expect } = require('@playwright/test');

test('Webpack builds successfully', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const result = await page.evaluate(() => {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.onload = () => resolve('Webpack build successful!');
      script.onerror = () => resolve('Webpack build failed.');
      script.src = 'http://localhost:3000/js/app.bundle.js';
      document.body.appendChild(script);
    });
  });
  expect(result).toBe('Webpack build successful!');
});
