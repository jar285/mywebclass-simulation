// @ts-check
const { test, expect } = require('@playwright/test')
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:3000/content.html');

  const form = await page.$('form');
  const inputField = await form.$('input[name="emailSubscription"]');
  const subscribeButton = await form.$('button[type="button"]');

  expect(form).not.toBeNull();
  expect(inputField).not.toBeNull();
  expect(subscribeButton).not.toBeNull();

  await browser.close();
})();

