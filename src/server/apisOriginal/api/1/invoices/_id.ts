/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.invoiceResponse
  }

  put: {
    resBody: Types.invoiceResponse
    reqFormat: URLSearchParams
    reqBody?: Types.invoiceUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
