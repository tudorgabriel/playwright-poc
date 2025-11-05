import { baseTest as base } from '../baseFixtures/base-fixtures'
import productsData from '../../testData/productsData.json'
import userData from '../../testData/userData.json'
import confirmationMsgData from '../../testData/confirmationMsgData.json'




export const test = base.extend<{
  productsData: typeof productsData
  userData : typeof userData,
  confirmationMsgData : typeof confirmationMsgData

}>({
  productsData: async ({}, use) => {
    await use(productsData)
  },

  userData: async ({}, use) => {
    await use(userData)
  },

  confirmationMsgData: async ({}, use) => {
    await use(confirmationMsgData)
  }
})

