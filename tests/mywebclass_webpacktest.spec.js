test('Measure Webpack Build Time', async ({ page }) => {
  // Increase timeout to 60 seconds
  page.setDefaultTimeout(60000);

  // Navigate to the website to test
  await page.goto('http://localhost:3000');

  // Click on the build button to trigger Webpack build process
  const buildButton = await page.$('#build-button');
  await buildButton.click();

  // Wait for the build process to complete and check for success message
  const buildResult = await page.$('#build-result');
  await page.waitForSelector('content.html.success');
  const buildTime = Date.now() - buildStartTime;

  // Check if the build time is below a certain threshold
  expect(buildTime).toBeLessThanOrEqual(60000); // 60 seconds
});
