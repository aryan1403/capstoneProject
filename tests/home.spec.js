import { test, expect } from '@playwright/test';
import { homePage } from '../POM/home';
import { fdatasyncSync } from 'node:fs';

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

test.skip('home page combox testing for mason', async ({ page }) => {
  const a = new homePage(page);
  await a.navigate();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('combobox').selectOption('Laundry');
        expect(page.getByRole('combobox')).toHaveValue('Laundry');
});




