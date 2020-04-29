/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
    }

    resBody: {
      expense_applications: Types.expense_application[]
    }
  }

  post: {
    resBody: Types.expenseApplicationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.expenseApplicationCreateParams
  }
}
