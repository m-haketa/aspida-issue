/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.partnerResponse
  }

  put: {
    resBody: Types.partnerResponse
    reqFormat: URLSearchParams
    reqBody: Types.partnerUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
