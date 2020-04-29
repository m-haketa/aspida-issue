/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.tagResponse
  }

  put: {
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody?: Types.tagParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
