import { test, expect } from '@playwright/test';
import { contactPage } from '../POJO/contact';


[  {name:"Vinay K S",email:"vinay@example.com",subject:"How can we help?",message:"I have a question about your services."},
    {name:"John Doe",email:"john@example.com",subject:"How can we help?",message:"I have a question about your services."},
    {name:"Jane Smith",email:"jane@example.com",subject:"How can we help?",message:"I have a question about your services."},
    {name:"Alice Johnson",email:"alice@example.com",subject:"How can we help?",message:"I have a question about your services."},
    {name:"Bob Brown",email:"bob@example.com",subject:"How can we help?",message:"I have a question about your services."}
 ].forEach(obj=> {
test(`contact form submission with valid data for ${obj.email}`, async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm(obj.name, obj.email, obj.subject, obj.message);
    await c.submit();
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe("Message sent! We will get back to you shortly.");
    });
 }
);
});

test('contact form submission with empty fields shows validation errors', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('', 'akash@example.com', 'ddsaf ', 'fdasiensdfn');
    await c.submit();
    await expect(page.getByText('Name is required')).toBeVisible();
});

test('contact form submission with invalid email shows validation error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', 'not-an-email', 'How can we help?', 'I have a question about your services.');
    await c.submit();
    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe("Please include an '@' in the email address. 'not-an-email' is missing an '@'.");
});
});

test('contact form submission with empty message shows validation error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', 'akash@example.com', 'How can we help?', '');
    await c.submit();
    await expect(page.getByText('Message must be at least 10 characters')).toBeVisible();
});

test('contact form submission with short message shows validation error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', 'akash@example.com', 'How can we help?', 'Hi there!');
    await c.submit();
    await expect(page.getByText('Message must be at least 10 characters')).toBeVisible();
});

test('contact form submission with empty subject shows validation error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', 'akash@example.com', '', 'I have a question about your services.');
    await c.submit();
    await expect(page.getByText('Subject is required')).toBeVisible();
});

test('contact form submission with short subject shows validation error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', 'akash@example.com', 'Hi', 'I have a question about your services.');
    await c.submit();
    await expect(page.getByText('Subject is required')).toBeVisible();
});

test('contact form submission with SQL injection attempt shows error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', ' OR 1=1 --', 'How can we help?', 'I have a question about your services.');
    await c.submit();   
    page.once('dialog', async (dialog) => {        expect(dialog.message()).toBe("Please include an '@' in the email address. ' OR 1=1 --' is missing an '@'.");
});
}   );

test('contact form submission with XSS attempt shows error', async ({ page }) => {
    const c = new contactPage(page);
    await c.navigate();
    await c.fillForm('Akash', '<script>alert("XSS")</script>', 'How can we help?', 'I have a question about your services.');
    await c.submit();   
    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe("Please include an '@' in the email address. '<script>alert(\"XSS\")</script>' is missing an '@'.");
});
}
);




