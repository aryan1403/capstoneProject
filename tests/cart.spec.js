import { test, expect } from '@playwright/test';
import { login} from '../POM/loginpage';

test.use({ storageState: 'storageState.json' });

test('search for carpenter', async ({ page }) => {
    const c=new login(page);
    await c.navigate();
    await c.fillForm('vinayksgowda123456@gmail.com', '123456');
    await c.submit();
    
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
  await page.getByRole('button', { name: 'Carpenter' }).click();
  await page.getByRole('button', { name: 'Book Now' }).first().click();
  await expect(page.getByRole('heading', { name: 'Rajan Kumar' })).toBeVisible();
});

test('search for plumber', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
  await page.getByRole('button', { name: 'Plumber' }).click();
  await page.getByRole('button', { name: 'Book Now' }).first().click();
  await expect(page.getByRole('heading', { name: 'Anil Sharma' })).toBeVisible();
});

test('search for electrician', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Electrician' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByRole('heading', { name: 'Suresh Verma' })).toBeVisible();
});

test('search for painter', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Painter' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByRole('heading', { name: 'Vikram Singh' })).toBeVisible();
});

test('search for cook', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Cook' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByRole('heading', { name: 'Priya Nair' })).toBeVisible();
});

test('search for cleaner', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Cleaner' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await expect(page.getByRole('heading', { name: 'Meena Devi' })).toBeVisible();
}
);

test('delete cart item carpenter', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Carpenter' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
});

test('delete cart item plumber', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Plumber' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
});

test('delete cart item electrician', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();     
    await page.getByRole('button', { name: 'Electrician' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
}
);

test('delete cart item painter', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Painter' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
});

test('delete cart item cook', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Cook' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
});

test('delete cart item cleaner', async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await page.getByRole('button', { name: 'Cleaner' }).click();
    await page.getByRole('button', { name: 'Book Now' }).first().click();
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your booking cart is empty' })).toBeVisible();
}

);



