/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.expenseApplicationLineTemplateResponse
  }

  put: {
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    reqBody: Types.expenseApplicationLineTemplateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
