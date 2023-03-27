const { test, expect } = require('@playwright/test')

test('Page load speed test with static search term', async ({ page }) => {
  // Establecer un término de búsqueda estático
  const searchTerm = 'prueba';

  // Navigate to the page you want to test
  await page.goto('http://localhost:3000')

  // Fill in the search input with the static search term and measure the time it takes for the page to fully load
  const pageLoadTime = await page.evaluate((searchTerm) => {
    const timing = performance.timing
    const input = document.querySelector('input[type="search"]');
    input.value = searchTerm;
    return new Promise(resolve => {
      input.addEventListener('input', () => {
        if (timing.loadEventEnd > 0) {
          resolve(timing.loadEventEnd - timing.navigationStart);
        }
      });
    });
  }, searchTerm)

  // Expect the page to load in under 3 seconds (3000 ms)
  expect(pageLoadTime).toBeLessThanOrEqual(3000)
})