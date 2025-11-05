// fixtures/CreateChannelManagerPage.ts
import { baseTest as base } from '../baseFixtures/base-fixtures'
import { LoginPage } from '../../pages/LoginPage'


export const test = base.extend<{
  LoginPage: LoginPage

}>({
  
  LoginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  }
})
