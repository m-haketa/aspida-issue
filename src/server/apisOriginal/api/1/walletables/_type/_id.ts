/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.walletableResponse
  }

  put: {
    query: {
      company_id: number
    }

    resBody: Types.walletableResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
