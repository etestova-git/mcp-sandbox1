import { test, expect } from '@playwright/test';

test.describe('Sauce Demo Product Verification', () => {
  test('should display correct price for Sauce Labs Backpack', async ({ page }) => {
    await test.step('Login to the application', async () => {
      await page.goto('https://www.saucedemo.com');
      // Using data-test attributes for more reliable element selection
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('Navigate to product details', async () => {
      // First verify we're on the inventory page
      await expect(page).toHaveURL('/inventory.html');
      // Using specific data-test attribute for the product link
      await page.locator('[data-test="item-4-title-link"]').click();
    });

    await test.step('Verify product details', async () => {
      // Verify we're on the correct product page
      await expect(page).toHaveURL('/inventory-item.html?id=4');
      // Verify product name
      await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');
      // Verify product price
      await expect(page.locator('.inventory_details_price')).toHaveText('$29.99');
    });
  });
});
