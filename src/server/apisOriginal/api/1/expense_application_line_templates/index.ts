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
      expense_application_line_templates: Types.expense_application_line_template[]
    }
  }

  post: {
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    reqBody: Types.expenseApplicationLineTemplateParams
  }
}
