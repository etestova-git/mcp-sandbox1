const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Core Flows', () => {
  const baseUrl = 'https://www.saucedemo.com';
  const username = 'standard_user';
  const password = 'secret_sauce';

  test('Successful login with valid credentials', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Add a product to the cart and verify cart badge', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });

  test('Change product sorting and verify order', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
    await page.selectOption('[data-test="product-sort-container"]', 'lohi');
    const firstItem = await page.locator('.inventory_item_name').first().textContent();
    expect(firstItem).toContain('Sauce Labs Onesie');
  });

  test('Open and close the navigation menu', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
    await page.click('#react-burger-menu-btn');
    await expect(page.locator('.bm-menu')).toBeVisible();
    await page.click('#react-burger-cross-btn');
    await expect(page.locator('.bm-menu')).not.toBeVisible();
  });

  test('Verify presence and functionality of footer social links', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
    const twitter = page.locator('a[href="https://twitter.com/saucelabs"]');
    const facebook = page.locator('a[href="https://www.facebook.com/saucelabs"]');
    const linkedin = page.locator('a[href="https://www.linkedin.com/company/sauce-labs/"]');
    await expect(twitter).toBeVisible();
    await expect(facebook).toBeVisible();
    await expect(linkedin).toBeVisible();
  });
});
