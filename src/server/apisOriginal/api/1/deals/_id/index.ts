/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      accruals?: 'without' | 'with'
    }

    resBody: Types.dealResponse
  }

  put: {
    resBody: Types.dealResponse
    reqFormat: URLSearchParams
    reqBody?: Types.dealUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
