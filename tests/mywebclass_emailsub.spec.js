// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Email Subscription Form Test', () => {
  test('Verify email subscription form', async ({ page }) => {
    // Navigate to the web page
    await page.goto('http://localhost:3000/content.html');

    // Check if there is a form element with an input field with name attribute "emailSubscription"
    const emailInput = await page.$('form input[name="emailSubscription"]');
    expect(emailInput).toBeTruthy();

    // Check if there is a button with type attribute "button"
    const subscribeButton = await page.$('form button[type="button"]');
    expect(subscribeButton).toBeTruthy();
  });
});

