import { mergeTests } from '@playwright/test'
import { test as loginData } from './loginData'
import { test as loginPage } from './loginPage'

export const loginTest = mergeTests(loginData, loginPage)
