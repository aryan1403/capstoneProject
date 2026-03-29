import { test, expect } from '@playwright/test';
import { homePage } from '../POM/home';
import { login } from '../POM/loginpage';
import { loginPage } from '../POM/login';


test.use({ storageState: 'storageState.json' });


test('home page combox testing for cleaning', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
  await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('combobox').selectOption('Cleaning');

  expect(page.getByRole('combobox')).toHaveValue('Cleaning');
});


test('home page combox testing for electrician', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Electrician');
        expect(page.getByRole('combobox')).toHaveValue('Electrician');
});

test('home page combox testing for plumber', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Plumbing');
        expect(page.getByRole('combobox')).toHaveValue('Plumbing');
});

test('home page combox testing for painter', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Painting');
        
});

test('home page combox testing for mason', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Laundry');
        expect(page.getByRole('combobox')).toHaveValue('Laundry');
});

test('home page combox testing for laundry', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate(); 
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Laundry');
        expect(page.getByRole('combobox')).toHaveValue('Laundry');
});



test.describe('QuickHelp UI Tests (With Stored Session)', () => {

test.use({ storageState: 'storageState.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
  });

  test('1. Home page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle('Daily Wage Service Booking');
  });

  test('2. Header links are visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find Workers' })).toBeVisible();
    
  });

  test('3. Click Home navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('https://daily-wage-book-1--vinayksgowda44.replit.app/');
  });

  test('4. Click Find Workers navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Find Workers' }).click();
    await expect(page).toHaveURL("https://daily-wage-book-1--vinayksgowda44.replit.app/search");
  });

  

  test('6. Hero section text visible', async ({ page }) => {
    await expect(page.getByText('Trusted Professionals')).toBeVisible();
  });

  test('7. Main heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Book expert daily wage' })).toBeVisible();
  });

  test('8. Feature section visible', async ({ page }) => {
    await expect(page.getByText('Background Checked')).toBeVisible();
    await expect(page.getByText('Upfront Pricing')).toBeVisible();
  });

  test('9. Services section heading visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
  });

  

  

  test('16. Navigate to Cook', async ({ page }) => {
    await page.getByRole('link', { name: 'Cook' }).click();
    await expect(page).toHaveURL("https://daily-wage-book-1--vinayksgowda44.replit.app/search?category=cook");
  });

  test('17. Footer is visible', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('18. Footer logo navigation works', async ({ page }) => {
    await page.getByRole('contentinfo').getByRole('link', { name: 'QuickHelp' }).click();
    await expect(page).toHaveURL("https://daily-wage-book-1--vinayksgowda44.replit.app/");
  });

  test('19. Contact info section visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contact Info' })).toBeVisible();
  });

  test('20. Contact details visible', async ({ page }) => {
    await expect(page.getByText('support@quickhelp.com')).toBeVisible();
    await expect(page.getByText('+1 (555) 123')).toBeVisible();
  });

});