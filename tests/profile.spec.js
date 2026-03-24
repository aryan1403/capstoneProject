import { test, expect } from '@playwright/test';
import { profilePage } from '../POM/profile';

[  {name:"Vinay K S",phone:"1234567890"},
  {name:"John Doe",phone:"0987654321"},
  {name:"Jane Smith",phone:"1122334455"},
  {name:"Alice Johnson",phone:"5555555555"},
  {name:"Bob Brown",phone:"6666666666"}
].forEach(obj=> {
test(`profile update with valid data for ${obj.name}`, async ({ page }) => {    
    const c = new profilePage(page);
    await c.navigate();
    await c.fillForm(obj.name, obj.phone);
    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe("Profile updated successfully!");
    });
});
});

test('profile update with invalid phone shows validation error', async ({ page }) => {
    const c = new profilePage(page);
    await c.navigate();
    await c.fillForm('Vinay K S', '123 ');
    await expect(page.getByText('Valid phone number required')).toBeVisible();
});

test('profile update with empty username shows validation error', async ({ page }) => {
    const c = new profilePage(page);
    await c.navigate();
    await c.fillForm('', '9876543210');
    await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
}); 

test('profile update with empty phone and email shows validation error', async ({ page }) => {
    const c = new profilePage(page);
    await c.navigate();
    await c.fillForm('', '');
    await expect(page.getByText('Valid phone number required')).toBeVisible();
    await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
}
);

