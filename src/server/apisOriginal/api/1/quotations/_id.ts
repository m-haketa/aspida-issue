/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.quotationResponse
  }

  put: {
    resBody: Types.quotationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.quotationUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
