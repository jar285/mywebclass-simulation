const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the mywebclass.org homepage
  await page.goto('http://localhost:3000');

  // Measure site performance
  const metrics = await page.metrics();
  console.log(metrics);

  // Close the browser
  await browser.close();
})();