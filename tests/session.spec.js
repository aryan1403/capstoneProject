import { test } from '@playwright/test';

test('Create session and save login state', async ({ page }) => {

  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/login');

  await page.locator('input[name="email"]').fill('vinayksgowda123456@gmail.com');
  await page.locator('input[name="password"]').fill('123456');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Wait for login to complete and page to load
  await page.getByRole('link', { name: 'Find Workers' }).waitFor();

  await page.context().storageState({ path: 'storageState.json' });

});