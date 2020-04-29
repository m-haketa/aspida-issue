/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      with_balance?: boolean
      type?: 'bank_account' | 'credit_card' | 'wallet'
    }

    resBody: {
      walletables: Types.walletable[]

      meta?: {
        up_to_date?: boolean
      }
    }
  }

  post: {
    resBody: Types.walletableCreateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableCreateParams
  }
}
