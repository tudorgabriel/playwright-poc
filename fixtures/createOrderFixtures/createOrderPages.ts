import { baseTest as base } from '../baseFixtures/base-fixtures'
import { InventoryPage } from '../../pages/InventoryPage'
import {CartPage} from '../../pages/CartPage'
import {CheckoutPage} from '../../pages/CheckoutPage'


export const test = base.extend<{
  InventoryPage: InventoryPage
  CartPage : CartPage
  CheckoutPage : CheckoutPage

}>({
  InventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page)
    await use(inventoryPage)
  },

  CartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page)
    await use(cartPage)
  },

  CheckoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page)
    await use(checkoutPage)
  }
})
