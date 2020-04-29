/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.receiptResponse
  }

  put: {
    resBody: Types.receiptResponse
    reqFormat: URLSearchParams
    reqBody: Types.receiptUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
