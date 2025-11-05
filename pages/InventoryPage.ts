import { expect, Locator, Page } from '@playwright/test'

export class InventoryPage {
  readonly page: Page
  readonly dropdownBtn: Locator
  readonly cartBtn: Locator
  readonly sortContainer : Locator

  constructor(page: Page) {
    this.page = page
    this.dropdownBtn = page.locator('[data-test="product-sort-container"]')
    this.cartBtn = page.locator('[data-test="shopping-cart-link"]')
    this.sortContainer = page.locator('[data-test="product-sort-container"]')

  }

  async addToCart(productIdentifier: string) {
   await this.page.locator(`[data-test="add-to-cart-${productIdentifier}"]`).click();
   await expect(this.page.locator(`[data-test="remove-${productIdentifier}"]`)).toBeVisible();  
  }

  async removeFromCart(productIdentifier: string) {
   await this.page.locator(`[data-test="remove-${productIdentifier}"]`).click();
   await expect(this.page.locator(`[data-test="add-to-cart-${productIdentifier}"]`)).toBeVisible();  
  }

  async clickOnProductTitle(title: string) {
    await this.page.getByText(title).click();
  }

  async selectFilterPage(value: string) {
    await this.dropdownBtn.click();
    // await this.page.getByText(value).click();
  }

  async selectSortOption(optionText: string) {
  await this.sortContainer.selectOption({ label: optionText });
}


  async clickOnCartBtn() {
    await this.cartBtn.click();
  }

  async checkLowPriceFilter() {
  const items = this.page.locator('[data-test="inventory-item-description"]');
  
  const prices = await Promise.all([
    items.nth(0).locator('[data-test="inventory-item-price"]').textContent(),
    items.nth(1).locator('[data-test="inventory-item-price"]').textContent(),
  ]);
  
  const [firstPrice, secondPrice] = prices.map(p => parseFloat(p!.replace('$', '').trim()));
  
  expect(firstPrice).toBeLessThan(secondPrice);
  console.log(`✅ Price verified: $${firstPrice} < $${secondPrice}`);
}

}
