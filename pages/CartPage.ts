import { Locator, Page } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly checkoutBtn : Locator
  readonly continueShoppingBtn : Locator 

  constructor(page: Page) {
    this.page = page
    this.checkoutBtn = page.locator('[data-test="checkout"]')
    this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]')

  }

  async removeProduct(productIdentifier: string) {
   await this.page.locator(`[data-test="remove-${productIdentifier}"]`).click();
  }

  async clickOnCheckout() {
    await this.checkoutBtn.click();
  }

  async clickOnContinueShopping() {
    await this.continueShoppingBtn.click();
  }

}
