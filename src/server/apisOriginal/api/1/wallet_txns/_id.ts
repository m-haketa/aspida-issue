/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.walletTxnResponse
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
