const { test, expect } = require('@playwright/test');

test.describe('Products - Browse and Find Most Expensive', () => {
  const baseUrl = 'https://www.saucedemo.com';
  const username = 'standard_user';
  const password = 'secret_sauce';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await test.step('Login with valid credentials', async () => {
      await page.getByRole('textbox', { name: /username/i }).fill(username);
      await page.getByRole('textbox', { name: /password/i }).fill(password);
      await page.getByRole('button', { name: /login/i }).click();
      await expect(page).toHaveURL(/inventory/);
    });
  });

  test('Browse all products and report the most expensive', async ({ page }) => {
    const products = [];

    // Get all product cards on the inventory page
    const productCards = page.locator('.inventory_item');
    const count = await productCards.count();
    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
      await test.step(`Browse product ${i + 1}`, async () => {
        const card = productCards.nth(i);
        const name = await card.getByRole('link').first().innerText();
        await card.getByRole('link').first().click();

        // On product detail page, get name and price
        const detailName = await page.getByRole('heading').first().innerText();
        const priceText = await page.getByText(/\$\d+\.\d{2}/).innerText();
        const price = parseFloat(priceText.replace('$', ''));
        products.push({ name: detailName, price });

        // Go back to products list
        await page.getByRole('button', { name: /back to products/i }).click();
      });
    }

    // Find the most expensive product
    const mostExpensive = products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
    console.log(`Most expensive item: ${mostExpensive.name} - $${mostExpensive.price.toFixed(2)}`);

    // Assertion for reporting (optional)
        await test.step('Report the most expensive item', async () => {
      expect(mostExpensive).toBeDefined();
      expect(typeof mostExpensive.name).toBe('string');
      expect(typeof mostExpensive.price).toBe('number');
    });
  });
});