// import { test, expect } from '@playwright/test';
// import { login } from '../POM/loginpage';

// test('payment processing for carpenter booking', async ({ page }) => {
//   await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//   const c=new login(page);
//   await c.navigate();
//   await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//   await c.submit();
//   await page.waitForLoadState('load');

//   await page.getByRole('link', { name: 'Find Workers' }).click();
//   await page.waitForLoadState('load');
//   await page.getByRole('button', { name: 'Carpenter', exact: true }).click();
//   await page.waitForLoadState('load');
//   await page.getByRole('button', { name: 'Book Now' }).first().click();
//   await page.waitForLoadState('load');

//   // Select date
//   await page.locator('input[type="date"]').waitFor();
//   await page.locator('input[type="date"]').fill('2026-03-25');
//   await page.waitForTimeout(1000);

//   // Click payment button
//   await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//   await page.getByRole('button', { name: 'Pay ₹' }).click();

//   // Expect success message
//   await expect(page.getByText('Payment successful')).toBeVisible();
// });

// test('payment processing for plumber booking', async ({ page }) => {
//   await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//   const c=new login(page);
//   await c.navigate();
//   await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//   await c.submit();
//   await page.waitForLoadState('load');
//   await page.getByRole('link', { name: 'Find Workers' }).click();
//   await page.waitForLoadState('load');
//   await page.getByRole('button', { name: 'Plumber',exact: true }).click();
//   await page.waitForLoadState('load');
//   await page.getByRole('button', { name: 'Book Now' }).first().click();
//   await page.waitForLoadState('load');
//   await page.locator('input[type="date"]').waitFor();
//   await page.locator('input[type="date"]').fill('2026-03-26');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//   await page.getByRole('button', { name: 'Pay ₹' }).click();
//   await expect(page.getByText('Payment successful')).toBeVisible();
// });

// test('payment processing for electrician booking', async ({ page }) => {
//     await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//     const c=new login(page);
//     await c.navigate();
//     await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//     await c.submit();
//     await page.waitForLoadState('load');
//     await page.getByRole('link', { name: 'Find Workers' }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Electrician', exact: true }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Book Now' }).first().click();
//     await page.waitForLoadState('load');
//     await page.locator('input[type="date"]').waitFor();
//     await page.locator('input[type="date"]').fill('2026-03-27');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//     await page.getByRole('button', { name: 'Pay ₹' }).click();
//     await expect(page.getByText('Payment successful')).toBeVisible();
// });

// test('payment processing for painter booking', async ({ page }) => {
//     await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//     const c=new login(page);
//     await c.navigate();
//     await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//     await c.submit();
//     await page.waitForLoadState('load');
//     await page.getByRole('link', { name: 'Find Workers' }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Painter', exact: true }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Book Now' }).first().click();
//     await page.waitForLoadState('load');
//     await page.locator('input[type="date"]').waitFor();
//     await page.locator('input[type="date"]').fill('2026-03-28');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//     await page.getByRole('button', { name: 'Pay ₹' }).click();
//     await expect(page.getByText('Payment successful')).toBeVisible();
// });

// test('payment processing for cook booking', async ({ page }) => {
//     await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//     const c=new login(page);
//     await c.navigate();
//     await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//     await c.submit();
//     await page.waitForLoadState('load');
//     await page.getByRole('link', { name: 'Find Workers' }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Cook', exact: true }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Book Now' }).first().click();
//     await page.waitForLoadState('load');
//     await page.locator('input[type="date"]').waitFor();
//     await page.locator('input[type="date"]').fill('2026-03-29');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//     await page.getByRole('button', { name: 'Pay ₹' }).click();
//     await expect(page.getByText('Payment successful')).toBeVisible();
// });

// test('payment processing for cleaner booking', async ({ page }) => {
//     await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
//     const c=new login(page);
//     await c.navigate();
//     await c.fillForm('vinayksgowda123456@gmail.com', '123456');
//     await c.submit();
//     await page.waitForLoadState('load');
//     await page.getByRole('link', { name: 'Find Workers' }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
//     await page.waitForLoadState('load');
//     await page.getByRole('button', { name: 'Book Now' }).first().click();
//     await page.waitForLoadState('load');
//     await page.locator('input[type="date"]').waitFor();
//     await page.locator('input[type="date"]').fill('2026-03-30');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Pay ₹' }).waitFor();
//     await page.getByRole('button', { name: 'Pay ₹' }).click();
//     await expect(page.getByText('Payment successful')).toBeVisible();
// });
