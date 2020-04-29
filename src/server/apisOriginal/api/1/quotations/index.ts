/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      partner_id?: number
      partner_code?: string
      start_issue_date?: string
      end_issue_date?: string
      quotation_number?: string
      description?: string
      quotation_status?: 'all' | 'unsubmitted' | 'submitted'
      offset?: number
      limit?: number
    }

    resBody: {
      quotations: Types.quotation[]
    }
  }

  post: {
    resBody: Types.quotationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.quotationCreateParams
  }
}
