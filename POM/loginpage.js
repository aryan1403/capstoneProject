export class login {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.password = page.locator('input[name="password"]');
    this.submitButton =page.getByRole('button', { name: 'Sign in' });
  }
    
  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('https://daily-wage-book-1--vinayksgowda44.replit.app/');
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }

  async fillForm(email, password) {
    await this.emailInput.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }
}