import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput : Locator
  readonly loginBtn : Locator
  readonly loginErrSelector : Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.loginBtn = page.locator('[data-test="login-button"]')
    this.loginErrSelector = page.locator('[data-test="error"]')
  }

  async completeNameInput(value:string) {
    await this.usernameInput.fill(value)
  }

  async completePasswordInput(value:string) {
    await this.passwordInput.fill(value)
  }

  async clickOnLoginBtn() {
    await this.loginBtn.click()
  }

  async loginMethod(username:string,password = 'secret_sauce' ) {
   await this.completeNameInput(username)
   await this.completePasswordInput(password)
   await this.clickOnLoginBtn();
  }
  
  async checkErrMsg(errText: string) {
  await expect(this.loginErrSelector).toHaveText(errText);
}

}
