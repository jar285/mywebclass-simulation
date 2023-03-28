const { chromium, expect } = require('@playwright/test')

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');
  const pageTitle = await page.title();

  expect(pageTitle).toBe('home.html');

  await browser.close();
})();