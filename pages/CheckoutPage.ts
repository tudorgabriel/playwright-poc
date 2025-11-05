import { expect, Locator, Page } from '@playwright/test'
import { checkoutInformationPayload } from '../interfaces/checkoutInformationPayloadInterface'

export class CheckoutPage {
  readonly page: Page
  readonly checkoutBtn : Locator
  readonly continueShoppingBtn : Locator 
  readonly firstNameInput : Locator
  readonly lastNameInput : Locator
  readonly zipCodeInput : Locator
  readonly continueBtn : Locator
  readonly inveoryItem : Locator
  readonly paymentInfoCart : Locator
  readonly shippmentInfo : Locator
  readonly priceInfo : Locator
  readonly finishBtn : Locator
  readonly confirmationMsgSelector: Locator
  readonly confirmationHeaderSelector : Locator
  readonly backHomeBtn : Locator

  constructor(page: Page) {
    this.page = page
    this.checkoutBtn = page.locator('[data-test="checkout"]')
    this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]')
    this.firstNameInput = page.locator('[data-test="firstName"]')
    this.lastNameInput = page.locator('[data-test="lastName"]')
    this.zipCodeInput = page.locator('[data-test="postalCode"]')
    this.continueBtn = page.locator('[data-test="continue"]')
    this.inveoryItem = page.locator('[data-test="inventory-item"]')
    this.paymentInfoCart = page.locator('[data-test="payment-info-label"]')
    this.shippmentInfo = page.locator('[data-test="shipping-info-label"]')
    this.priceInfo = page.locator('[data-test="total-info-label"]')
    this.finishBtn = page.locator('[data-test="finish"]')
    this.confirmationMsgSelector = page.locator('[data-test="complete-text"]')
    this.confirmationHeaderSelector = page.locator('[data-test="complete-header"]')
    this.backHomeBtn = page.locator('[data-test="back-to-products"]')

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

  
  async completeCheckoutInformationForm (payload : checkoutInformationPayload) {
     await this.firstNameInput.fill(payload.firstName);
     await this.lastNameInput.fill(payload.lastName);
     await this.zipCodeInput.fill(payload.zipCode);
  
  // Verify all at once
  await Promise.all([
    expect(this.firstNameInput).toHaveValue(payload.firstName),
    expect(this.lastNameInput).toHaveValue(payload.lastName),
    expect(this.zipCodeInput).toHaveValue(payload.zipCode),
  ]);
   
  }

  async clickOnContinueBtn() {
    await this.continueBtn.click();
  }

  async checkIfInventoryElIsDisplayed() {
    await expect(this.inveoryItem).toBeVisible();
  }

  async clickOnFinishBtn() {
    await this.finishBtn.click();
  }

  async clickOnBackBtn(){
    await this.backHomeBtn.click();
  }

}
