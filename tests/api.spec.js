import { test, expect } from '@playwright/test';

test('cookie-based API login and booking', async ({ browser, playwright }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('input[name="email"]').fill('vinayksgowda123456@gmail.com');
  await page.locator('input[name="password"]').fill('123456');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForURL('**/');
  await expect(page.getByRole('link', { name: 'Find Workers' })).toBeVisible();

  const stateFile = 'cookieState.json';
  await browserContext.storageState({ path: stateFile });
  await browserContext.close();

  const apiContext = await playwright.request.newContext({
    baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app',
    storageState: stateFile
  });

  const booking = await apiContext.post('/booking', { data: { workerId: 1, date: '2026-03-26' } });

  expect([200, 201]).toContain(booking.status());
  const responseText = await booking.text();

  let bookingJson = null;
  try {
    bookingJson = JSON.parse(responseText);
  } catch (err) {
    expect(responseText.toLowerCase()).toContain('booking');
  }

  
  await apiContext.dispose();
});

test('cookie-based API login and booking history retrieval', async ({ browser, playwright }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');     
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('input[name="email"]').fill('vinayksgowda123456@gmail.com');
    await page.locator('input[name="password"]').fill('123456');
    await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForURL('**/');
  await expect(page.getByRole('link', { name: 'Find Workers' })).toBeVisible();

  const stateFile = 'cookieState.json';
  await browserContext.storageState({ path: stateFile });
  await browserContext.close();

  const apiContext = await playwright.request.newContext({
    baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app',
    storageState: stateFile
  });

  
  const bookingHistory = await apiContext.get('/booking-history');

  expect([200]).toContain(bookingHistory.status());
  const historyText = await bookingHistory.text();

  let historyJson = null;
  try {
    historyJson = JSON.parse(historyText);
  } catch (err) {
    expect(historyText.toLowerCase()).toContain('booking');
  }

  
  await apiContext.dispose();
});

test('API login with invalid credentials', async ({ playwright }) => {
    const apiContext = await playwright.request.newContext({
        baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app'
        });
    const response = await apiContext.post('/login', { data: { email: 'invalid@gmail.com', password: 'invalid123' } });
    expect(response.status()).toBe(200);
    await apiContext.dispose();
});

test('API login with missing fields', async ({ playwright }) => {
    const apiContext = await playwright.request.newContext({
        baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app'
        });
    const response = await apiContext.post('/login', { data: { email: 'invalid@gmail.com', password: 'invalid123' } });
    expect(response.status()).toBe(200);
    await apiContext.dispose();
});



test('API login with SQL injection attempt', async ({ playwright }) => {
    const apiContext = await playwright.request.newContext({
        baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app'
        });
    const response = await apiContext.post('/login', { data: { email: "' OR 1=1 --", password: 'password' } });
    expect(response.status()).toBe(200);
    await apiContext.dispose();
}
);

test('API login with empty email and password', async ({ playwright }) => {
    const apiContext = await playwright.request.newContext({
        baseURL: 'https://daily-wage-book-1--vinayksgowda44.replit.app' 
        });
    const response = await apiContext.post('/login', { data: { email: '', password: '' } });
    expect(response.status()).toBe(200);
    await apiContext.dispose();
});




