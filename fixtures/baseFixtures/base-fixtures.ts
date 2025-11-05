import { test as base } from '@playwright/test'

export const baseTest = base.extend<{
}>({

  page: async ({ page }, use) => {
    await use(page)

    // Global cleanup after each test
    if (page && !page.isClosed()) {
      await page.close()
    }
  }
})
