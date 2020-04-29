/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.transferResponse
  }

  put: {
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody: Types.transferParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
