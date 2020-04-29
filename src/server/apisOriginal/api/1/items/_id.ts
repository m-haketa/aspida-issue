/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.itemResponse
  }

  put: {
    resBody: Types.itemResponse
    reqFormat: URLSearchParams
    reqBody?: Types.itemParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
