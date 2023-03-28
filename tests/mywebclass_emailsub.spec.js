// @ts-check
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('http://localhost:3000/content.html');

  // Check if the email subscription box exists
  const subscriptionBox = await page.$('input[name="emailSubscription"]');
  if (subscriptionBox) {
    console.log('Email subscription box exists');
  } else {
    console.log('Email subscription box does not exist');
  }

  await browser.close();
})();
