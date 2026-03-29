import { test, expect } from '@playwright/test';


test.use({ storageState: 'storageState.json' });


test('test1', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
   

    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Plumber',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    
    await page.getByRole('textbox').fill('2026-03-26');
     await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
  
   await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');  
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
     await page.getByRole('button', { name: 'View Booking History' }).click();
     await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();

});

test('test2', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Carpenter',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');

      await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
    await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();

      await page.getByRole('button', { name: 'View Booking History' }).click();
      await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();
});

test('test3', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Painter',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
      await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
    await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();

      await page.getByRole('button', { name: 'View Booking History' }).click();
      await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();
});

test('test4', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cook',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
      await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
    await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
      await page.getByRole('button', { name: 'View Booking History' }).click();
      await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();
});

test('test5', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Electrician',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');

      await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
    await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
      await page.getByRole('button', { name: 'View Booking History' }).click();
      await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();

});

test('test6', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();

    await page.getByRole('textbox').fill('2026-03-26');
      await page.getByRole('button', { name: 'Proceed to Payment' }).click();
      await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');
      await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
    await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
      await page.getByRole('button', { name: 'View Booking History' }).click();
      await expect(page.getByRole('heading', { name: 'My Bookings' })).toBeVisible();
});

test('test7', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Electrician',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByText('Please select a date to proceed.')).toBeVisible();
});

test('test8', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click(); 
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cook',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByText('Please select a date to proceed.')).toBeVisible();
});

test('test9', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Painter',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByText('Please select a date to proceed.')).toBeVisible();
});

test('test10', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');

    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Plumber',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByText('Please select a date to proceed.')).toBeVisible();
});

test('test11', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner',exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByText('Please select a date to proceed.')).toBeVisible();
});

