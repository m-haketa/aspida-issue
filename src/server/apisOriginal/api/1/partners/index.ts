/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
      keyword?: string
    }

    resBody: Types.partnersResponse
  }

  post: {
    resBody: Types.partnerResponse
    reqFormat: URLSearchParams
    reqBody: Types.partnerCreateParams
  }
}
