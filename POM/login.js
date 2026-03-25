export class loginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'you@example.com' });
    this.password = page.getByRole('textbox', { name: '••••••••' });
    this.submitButton = page.getByRole('button', { name: 'Sign In' });
  }
    
  async navigate() {
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