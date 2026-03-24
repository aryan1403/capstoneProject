export class loginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'you@example.com' });
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.password = page.getByRole('textbox', { name: '••••••••' });
    this.submitButton = page.getByRole('button', { name: 'Sign In' });
  }
    
  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('https://daily-wage-hub--vinayksgowda123.replit.app/');
    await this.page.getByRole('link', { name: 'Sign In' }).click();
  }

  async fillForm(email, password) {
    await this.emailInput.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }
}