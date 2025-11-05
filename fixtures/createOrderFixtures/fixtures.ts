import { mergeTests } from '@playwright/test'
import { test as inventoryPage } from './createOrderPages'
import { test as inventoryPageData } from './createOrderData'

export const createOrderTest = mergeTests(inventoryPage, inventoryPageData)
