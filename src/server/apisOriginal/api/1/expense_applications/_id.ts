/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.expenseApplicationResponse
  }

  put: {
    resBody: Types.expenseApplicationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.expenseApplicationUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
