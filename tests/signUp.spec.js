import { test, expect } from '@playwright/test';
import { loginPage } from '../POJO/login';
import { signUpPage } from '../POJO/signup';
test('test1', async ({ page }) => {
  await page.goto('https://daily-wage-hub--vinayksgowda123.replit.app/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Register here' }).click();
  await page.getByRole('textbox', { name: 'John Doe' }).click();
  await page.getByRole('textbox', { name: 'John Doe' }).fill('Vinay K S');
  await page.getByRole('textbox', { name: 'you@example.com' }).click();
  await page.getByRole('textbox', { name: 'you@example.com' }).fill('vinayksgowda123@gmail.com');
  await page.getByRole('textbox', { name: '9876543210' }).click();
  await page.getByRole('textbox', { name: '9876543210' }).fill('1234567890');
  await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).fill('vinay');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).fill('vinay56');
  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText('TaskMates')).toBeVisible();
});

test('test2', async ({ page }) => {
  await page.goto('https://daily-wage-hub--vinayksgowda123.replit.app/');
  await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('textbox', { name: 'Search services...' }).click();
  await page.getByRole('textbox', { name: 'Search services...' }).fill('carpenter');
  await page.getByRole('textbox', { name: 'Search services...' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
await expect(page.getByPlaceholder('Search services...')).toHaveValue('carpenter');

});


    [
  {name:"Vinay K S",email:"vinayksgowda123567@gmail.com",phone:"1234567890",password:"vinay@123"},
  {name:"John Doe",email:"test@example.com",phone:"0987654321",password:"password123"},
  {name:"Jane Smith",email:"user@example.com",phone:"1122334455",password:"securepassword"},
  {name:"Alice Johnson",email:"alice@example.com",phone:"5555555555",password:"alicepass"},
  {name:"Bob Brown",email:"bob@example.com",phone:"6666666666",password:"bobpass"}
  
].forEach(obj=> {
test(`signup with valid credentials for ${obj.email}`,async ({ page }) => {


  const c = new signUpPage(page);
  await c.navigate();
  await c.fillForm(obj.name, obj.email, obj.phone, obj.password);
  await c.submit();
  
  await expect(page.getByText('TaskMates')).toBeVisible();
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe("Login successfully");
    
  });
});
});

test('signup1 with invalid email  ', async ({ page }) => {
  const c = new signUpPage(page);
  await c.navigate();
  await c.fillForm('Vinay K S', 'not-an-email', '9876543210', 'vinay@123');
  await c.submit();

  // app should not move to TaskMates page and should show error text
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe("please include an '@' in the email address and not-an-email is missing an '@'"); // Adjust based on your actual validation message
  });
  
});

test('signup2 with invalid phone shows validation error', async ({ page }) => {
  const c = new signUpPage(page);
  await c.navigate();
  await c.fillForm('Vinay K S', 'vinayksgowda123567@gmail.com', '123', 'vinay@123');
  await c.submit();
await expect(page.getByText('Valid phone number required')).toBeVisible();
  
});

test('signup3 with invalid username shows validation error', async ({ page }) => {
  const c = new signUpPage(page);
  await c.navigate();
  await c.fillForm('', 'vinayksgowda123567@gmail.com', '9876543210', 'vinay@123');
  await c.submit();

  await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
});

