import { baseTest as base } from '../baseFixtures/base-fixtures'
import loginData from '../../testData/loginData.json'
import loginErrData from '../../testData/loginErrData.json'





export const test = base.extend<{
  loginData: typeof loginData
  loginErrData : typeof loginErrData

}>({
  loginData: async ({}, use) => {
    await use(loginData)
  },

  loginErrData: async ({}, use) => {
    await use(loginErrData)
  },
})

