export class profilePage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="name"]');
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.phone = page.locator('input[name="phone"]');
    this.submitButton = page.getByRole('button', { name: 'Save Changes' });
  }
    
  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('https://daily-wage-hub--vinayksgowda123.replit.app/');
    await this.page.getByRole('link', { name: 'Sign In' }).click();
    await this.page.getByRole('textbox', { name: 'you@example.com' }).fill("vinayksgowda123456@gmail.com");
     await this.page.getByRole('textbox', { name: '••••••••' }).fill("123456");
     await this.page.getByRole('button', { name: 'Sign In' }).click();
     await this.page.getByRole('link', { name: 'Profile' }).click();
  }

  async fillForm(username, phone) {
    await this.username.fill(username);
    await this.phone.fill(phone);
    await this.submitButton.click();
  }

  async submit() {
    await this.submitButton.click();
  }
}