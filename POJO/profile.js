export class contactPage {
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
     await this.page.getByRole('link', { name: 'Contact', exact: true }).click();
  }

  async fillForm(username,email,subject,message) {
    await this.username.fill(username);
    await this.email.fill(email);
    await this.subjeect.fill(subject);
    await this.message.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }
}