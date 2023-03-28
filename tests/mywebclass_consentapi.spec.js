// @ts-check
const { test, expect } = require('@playwright/test');

test('Google Analytics Consent API should be implemented', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('http://localhost:3000'); // Replace with your website URL

  // Check if the Google Analytics Consent API is loaded
  const isGoogleAnalyticsLoaded = await page.evaluate(() => {
    return typeof ga === 'function' && typeof gaOptout === 'function';
  });

  expect(isGoogleAnalyticsLoaded).toBeTruthy();

  // Check if the Google Analytics cookie is blocked until the user gives consent
  const cookiesBeforeConsent = await context.cookies();
  expect(cookiesBeforeConsent.some(cookie => cookie.name === '_ga')).toBeFalsy();

  // Give consent to Google Analytics tracking
  await page.click('#agreeButton');

  // Check if the Google Analytics cookie is set after the user gives consent
  const cookiesAfterConsent = await context.cookies();
  expect(cookiesAfterConsent.some(cookie => cookie.name === '_ga')).toBeTruthy();

  // Check if the Google Analytics cookie is blocked after the user opts out of tracking
  await page.click('#disagreeButton');
  const cookiesAfterOptOut = await context.cookies();
  expect(cookiesAfterOptOut.some(cookie => cookie.name === '_ga')).toBeFalsy();
});
