import { expect } from '@playwright/test';
import { loginTest as test } from '../fixtures/loginFixutres/fixtures';

test.describe('Login Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('check locked user', async ({ LoginPage, loginData, page, loginErrData}) => {
    await LoginPage.loginMethod(loginData.lockedUser);
    await LoginPage.checkErrMsg(loginErrData.lockedUserErr)
  });

  test('check & logout on standard user', async ({ LoginPage, loginData, page, loginErrData}) => {
    await LoginPage.loginMethod(loginData.standarUser);
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(LoginPage.loginBtn).toBeVisible();
  });
});