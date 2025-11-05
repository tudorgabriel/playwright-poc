import { test as setup } from '@playwright/test'
import path from 'path'
import { RoutesEnum } from '../../enums/routesEnum'

const authFile = path.join(__dirname, '../../.auth/user.json')

// this is a poc and we will harcoded the credentials. In a regular approach the credetials will be stored .env file and github secrets

// The setup method will perform login once before all test and save the loggin state for all tests. In this way we perform one single login for all tests

setup('authenticate', async ({ page }) => {
  await page.goto('/')
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await page.waitForURL(`**${RoutesEnum.invetoryRoute}`)
  await page.context().storageState({ path: authFile })
})
