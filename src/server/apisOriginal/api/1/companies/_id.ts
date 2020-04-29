/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      details?: 'true'
      account_items?: 'true'
      taxes?: 'true'
      items?: 'true'
      partners?: 'true'
      sections?: 'true'
      tags?: 'true'
      walletables?: 'true'
    }

    resBody: Types.companyResponse
  }

  put: {
    resBody: Types.companyUpdateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.companyParams
  }
}
