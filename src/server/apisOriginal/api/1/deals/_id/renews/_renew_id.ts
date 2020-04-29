/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  put: {
    resBody: Types.dealResponse
    reqFormat: URLSearchParams
    reqBody: Types.renewUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    resBody: Types.dealResponse
  }
}
