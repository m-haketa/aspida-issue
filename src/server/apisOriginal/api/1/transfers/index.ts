/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date?: string
      end_date?: string
      offset?: number
      limit?: number
    }

    resBody: {
      transfers: Types.transfer[]
    }
  }

  post: {
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody?: Types.transferParams
  }
}
