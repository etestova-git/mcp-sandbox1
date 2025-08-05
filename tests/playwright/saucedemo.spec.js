const { test, expect } = require('@playwright/test');

test('SauceDemo: login, view backpack, verify price', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Click on "Sauce Labs Backpack"
  await page.click('a[id="item_4_title_link"]');

  // Verify the price is $29.99
  const price = await page.textContent('.inventory_details_price');
  expect(price).toBe('$29.99');
});

test('SauceDemo checkout overview loads after form submission', async ({ page }) => {
  // 1. Login to SauceDemo
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // 2. Add any product to cart (Sauce Labs Bike Light)
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // 3. Go to cart
  await page.click('[data-test="shopping-cart-link"]');

  // 4. Go to checkout
  await page.click('[data-test="checkout"]');

  // 5. Fill the form
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');

  // 6. Click Continue
  await page.click('[data-test="continue"]');

  // 7. Verify the checkout overview page loads
  await expect(page.locator('text=Checkout: Overview')).toBeVisible();
});