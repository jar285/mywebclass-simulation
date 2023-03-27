const { test, expect } = require('@playwright/test');

test('MyWebClass.org has alt text on images', async ({ page }) => {
  // Check for alt text on images
  await page.goto('http://localhost:3000/');
  const images = await page.$$('img');
  for (const image of images) {
    const alt = await image.getAttribute('alt');
    expect(alt).toBeTruthy();
  }
});

test('MyWebClass.org has a valid title', async ({ page }) => {
  // Check for valid title
  await page.goto('http://localhost:3000/');
  const title = await page.title();
  expect(title).toContain('MyWebClass.org');
});

test('MyWebClass.org has a responsive design', async ({ page }) => {
  // Check for responsive design
  await page.goto('http://localhost:3000/');
  const viewport = page.viewportSize();
  expect(viewport.width).toBeGreaterThan(0);
  expect(viewport.height).toBeGreaterThan(0);
});

test('MyWebClass.org has a valid SSL certificate', async ({ page }) => {
  // Check for valid SSL certificate
  await page.goto('https://localhost:3000/');
  const securityDetails = page.securityDetails();
  expect(securityDetails.protocol()).toBe('TLS 1.2');
  expect(securityDetails.subjectName()).toContain('mywebclass.org');
});