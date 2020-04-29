/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: {
      tags: Types.tag[]
    }
  }

  post: {
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody: Types.tagParams
  }
}
