/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date: string
      end_date: string
      user_name?: string
      number?: number
      comment_type?: 'posted' | 'raised' | 'resolved'
      comment_important?: boolean
      category?: 'all' | 'without_deal' | 'with_expense_application_line' | 'with_deal' | 'ignored'
      offset?: number
      limit?: number
    }

    resBody: {
      receipts: Types.receipt[]
    }
  }

  post: {
    resBody: Types.receiptResponse
    reqFormat: FormData
    reqBody: Types.receiptCreateParams
  }
}
