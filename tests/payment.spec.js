import { test, expect } from '@playwright/test';
import { login } from '../POM/loginpage';

test.describe('Payment Processing Tests', () => {
test.use({ storageState: 'storageState.json' });

test.only('payment processing for carpenter booking', async ({ page }) => {
 await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
  // const c=new login(page);
  // await c.navigate();
  // await c.fillForm('vinayksgowda123456@gmail.com', '123456');
  // await c.submit();
  // await page.waitForLoadState('load');




  await page.getByRole('link', { name: 'Find Workers' }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Carpenter', exact: true }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Book Now' }).first().click();
  await page.waitForLoadState('load');

  
  await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();


   await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123456');

await page.getByRole('textbox', { name: 'MM/YY' }).fill('4567');
 await page.getByRole('textbox', { name: '123' }).fill('456');
 await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('vinay');

  await page.getByRole('button', { name: 'Pay ₹' }).click();

  await expect(page.getByText('Booking Confirmed')).toBeVisible();
});


test('payment processing for plumber booking', async ({ page }) => {
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
});

test('payment processing for electrician booking', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Electrician', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
     await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
    await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234877890123456');
    await page.getByRole('textbox', { name: 'MM/YY' }).fill('4587');

 await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('anjan'); 
   
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

test('payment processing for painter booking', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
   
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Painter', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
    await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234567890123676');
    await page.getByRole('textbox', { name: 'MM/YY' }).fill('456e');

 await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('akash'); 
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

test('payment processing for cook booking', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
   
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cook', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
     await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
    await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('8978567890123456');
    await page.getByRole('textbox', { name: 'MM/YY' }).fill('7667');

 await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('ajay'); 
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

test('payment processing for cleaner booking', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
   
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
    await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234568790123456');
    await page.getByRole('textbox', { name: 'MM/YY' }).fill('6754');

 await page.getByRole('textbox', { name: 'Full Name on Card' }).fill('santhosh'); 
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

test('card details wrong selection',async({page})=>
{
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
    await page.getByRole('textbox', { name: '0000 0000 0000' }).fill('1234568790123456');
    await page.getByRole('textbox', { name: 'MM/YY' }).fill('6754');
    await page.getByRole('textbox', { name: '123' }).fill('634');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Card holder name required')).toBeVisible();
});

test('card details wrong selection 2',async({page})=>
{
     await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
   await page.getByRole('textbox', { name: 'MM/YY' }).fill('6754');
    await page.getByRole('textbox', { name: '123' }).fill('634');
    await page.getByPlaceholder('Full Name on Card').fill('santhosh');
    await page.getByRole('button', { name: 'Pay ₹' }).click();
    await expect(page.getByText('Valid 16-digit card number required')).toBeVisible();
});

test('payment method upi checking',async({page})=>
{
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
   await page.getByRole('button', { name: 'UPI Apps' }).click();
   await page.getByPlaceholder('username@bankname').fill('santhosh@okaxis');
   await page.getByRole('button', { name: 'Pay ₹' }).click();
   await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

test('upi tesing without details',async({page})=>
{
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
   await page.getByRole('button', { name: 'UPI Apps' }).click();
   await page.getByRole('button', { name: 'Pay ₹' }).click();
   await expect(page.getByText('Valid UPI ID required (e.g., name@bank)')).toBeVisible();

});

test('payment using cash on delivery',async({page})=>
{
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
   
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Cleaner', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('textbox').fill('2026-03-26');
   await page.getByRole('button', { name: 'Proceed to Payment' }).click();
   await page.getByRole('button', { name: 'Cash on Delivery' }).click();
  await page.getByRole('button', { name: 'Pay ₹' }).click();
  await expect(page.getByText('Booking Confirmed')).toBeVisible();
});
});