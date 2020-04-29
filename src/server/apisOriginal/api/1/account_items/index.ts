/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      base_date?: string
    }

    resBody: Types.accountItemsResponse
  }

  post: {
    resBody: Types.accountItemResponse
    reqFormat: URLSearchParams
    reqBody: Types.accountItemParams
  }
}
