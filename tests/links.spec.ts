import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test.describe('Services page', () => {

  test('Has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Mike Thielvoldt/);
    await expect(page.getByText('Firmware')).toBeVisible();
  });

  test('Questionnaire link works', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Start Questionnaire' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'Embedded Project Introduction' })).toBeVisible();
  });

  test('Capabilities link works.', async ({ page }) => {
    await page.getByRole('link', { name: 'My Capabilities' }).click();
    await expect(page.getByRole('heading', { name: 'My Capabilities' })).toBeVisible();
  });

  test('Momentum link works.', async ({ page }) => {
    await page.getByRole('link', { name: 'How I Build Momentum' }).click();
    await expect(page.getByRole('heading', { name: 'How I Build Momentum' })).toBeVisible();
  });
});

test.describe.only('NavBar', () => {

  test('Projects link works', async ({ page }) => {
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.getByRole('heading', { name: 'my projects and past work' })).toBeVisible();
  });

  test.skip('Blog link works.', async ({ page }) => {
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  });

  test('Contact link works.', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  });
});

