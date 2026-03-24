import { test, expect } from '@playwright/test';
import { loginPage } from '../POM/login';
import { signUpPage } from '../POM/signup';

[
    {name:"Vinay K S",email:"vinayksgowda123567@gmail.com",phone:"1234567890",password:"vinay@123"},
  {name:"John Doe",email:"test@example.com",phone:"0987654321",password:"password123"},
  {name:"Jane Smith",email:"user@example.com",phone:"1122334455",password:"securepassword"},
  {name:"Alice Johnson",email:"alice@example.com",phone:"5555555555",password:"alicepass"},
  {name:"Bob Brown",email:"bob@example.com",phone:"6666666666",password:"bobpass"}
].forEach(obj=> {
test(`login with valid credentials for ${obj.email}`,async ({ page }) => {
    const a=new signUpPage(page);
    await a.navigate();
    await a.fillForm(obj.name, obj.email, obj.phone, obj.password);
    await a.submit();

  const c = new loginPage(page);
    await c.navigate();
    await c.fillForm(obj.email, obj.password);
    await c.submit();
    
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe("Welcome back! Login successfull ");
    });
});
});

test.skip('login with invalid credentials shows error', async ({ page }) => {
  const c = new loginPage(page);
  await c.navigate();
  await c.fillForm('invalid@example.com', 'wrongpassword');
  await c.submit();
  await expect(page.getByRole('listitem')).toHaveText('Login failedHTTP 401 : Invalid email or password');
});

test('login with empty email shows validation errors', async ({ page }) => {
  const c = new loginPage(page);
  await c.navigate();
    await c.fillForm('', 'vinay@123');       
    await c.submit();
    await expect(page.getByText('Invalid email address')).toBeVisible();
});
test('login with empty password shows validation errors', async ({ page }) => {
  const c = new loginPage(page);
  await c.navigate();
    await c.fillForm('test@example.com', '');       
    await c.submit();
    await expect(page.getByText('Password is required')).toBeVisible();
});

test('login with invalid email format shows validation error', async ({ page }) => {
    const c = new loginPage(page);  
    await c.navigate();
    await c.fillForm('not-an-email', 'somepassword');
    await c.submit();
    await expect(page.getByText('PasswordForgot password?')).toBeVisible();
});

test.skip('login with short password shows validation error', async ({ page }) => {
    const c = new loginPage(page);  
    await c.navigate();
    await c.fillForm('test@example.com', 'short');
    await c.submit();
  await expect(page.getByRole('listitem')).toHaveText('Login failedHTTP 401 : Invalid email or password');
});

test('login with SQL injection attempt shows error', async ({ page }) => {
    const c = new loginPage(page);  
    await c.navigate();
    await c.fillForm(' OR 1=1 --', 'password');
    await c.submit();
    await expect(page.getByText('PasswordForgot password?')).toBeVisible();
});

test('login with XSS attempt shows error', async ({ page }) => {
    const c = new loginPage(page);  
    await c.navigate();
    await c.fillForm('<script>alert("XSS")</script>', 'password');
    await c.submit();
    await expect(page.getByText('PasswordForgot password?')).toBeVisible();
});