import { test, expect } from '@playwright/test';
import { login} from '../POM/loginpage';

test('test1', async ({ page }) => {
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    const c=new login(page);
    await c.navigate();
    await c.fillForm('vinayksgowda123456@gmail.com', '123456');
    await c.submit();
    await page.waitForLoadState('load');
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