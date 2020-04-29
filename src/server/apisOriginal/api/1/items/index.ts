/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: {
      items: Types.item[]
    }
  }

  post: {
    resBody: Types.itemResponse
    reqFormat: URLSearchParams
    reqBody?: Types.itemParams
  }
}
