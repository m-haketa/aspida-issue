/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.accountItemResponse
  }

  put: {
    resBody: Types.accountItemResponse
    reqFormat: URLSearchParams
    reqBody: Types.accountItemParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
