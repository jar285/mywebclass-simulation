// @ts-check
const { test, expect } = require('@playwright/test');

const languages = ['en', 'es', 'fr'];
const defaultLanguage = 'en';

test.describe('Localized URLs and content', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Switch language', async () => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');

    // Check that the default language is loaded
    const defaultText = await page.textContent('h1');
    expect(defaultText).toContain('Welcome to my website!');

    // Switch to a different language
    for (const lang of languages) {
      await page.goto(`http://localhost:3000/${lang}`);
      const newText = await page.textContent('h1');
      expect(newText).not.toEqual(defaultText);
    }
  });
});
