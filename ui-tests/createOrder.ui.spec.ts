import { expect } from '@playwright/test'
import { createOrderTest as test } from '../fixtures/createOrderFixtures/fixtures'
import { RoutesEnum } from '../enums/routesEnum'

test.describe('Create Order Test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html')
  })


  test('Place order', async ({ page,InventoryPage,productsData,CartPage,CheckoutPage,userData,confirmationMsgData }) => {
     await InventoryPage.addToCart(productsData.backPack)
     await InventoryPage.clickOnCartBtn();
     await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible();
     await CartPage.clickOnCheckout();
     await CheckoutPage.completeCheckoutInformationForm(userData);
     await CheckoutPage.clickOnContinueBtn();
     await CheckoutPage.checkIfInventoryElIsDisplayed();
     await expect(CheckoutPage.priceInfo).toBeVisible();
     await expect(CheckoutPage.paymentInfoCart).toBeVisible();
     await expect(CheckoutPage.shippmentInfo).toBeVisible();
     await CheckoutPage.clickOnFinishBtn();
     await expect(CheckoutPage.confirmationHeaderSelector).toHaveText(confirmationMsgData.confirmationHeaderText)
     await expect(CheckoutPage.confirmationMsgSelector).toHaveText(confirmationMsgData.confirmationMsgText)
     await CheckoutPage.clickOnBackBtn();
     await page.waitForURL(`**${RoutesEnum.invetoryRoute}`)
  })


  test('Remove product from cart', async ({ InventoryPage,productsData }) => {
     await InventoryPage.addToCart(productsData.backPack)
     await InventoryPage.addToCart(productsData.bikeLight)
     await InventoryPage.addToCart(productsData.bolttShirt)
     await expect(InventoryPage.cartBtn).toHaveText('3')
     await InventoryPage.removeFromCart(productsData.bikeLight)
     await expect(InventoryPage.cartBtn).toHaveText('2')
  })

    test('Check Continue Shoping', async ({page, InventoryPage,productsData, CartPage }) => {
     await InventoryPage.addToCart(productsData.backPack)
     await InventoryPage.clickOnCartBtn();
     await CartPage.clickOnContinueShopping();
     await page.waitForURL(`**${RoutesEnum.invetoryRoute}`)
     await expect(InventoryPage.cartBtn).toHaveText('1')
  })

   test('Check Filter', async ({InventoryPage }) => {
     await InventoryPage.selectSortOption('Price (low to high)')
     await InventoryPage.checkLowPriceFilter();
  })
})
