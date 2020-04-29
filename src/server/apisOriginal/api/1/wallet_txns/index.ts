/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      walletable_type?: 'bank_account' | 'credit_card' | 'wallet'
      walletable_id?: number
      start_date?: string
      end_date?: string
      entry_side?: 'income' | 'expense'
      offset?: number
      limit?: number
    }

    resBody: {
      wallet_txns: Types.wallet_txn[]
    }
  }

  post: {
    resBody: Types.walletTxnResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletTxnParams
  }
}
