/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.sectionResponse
  }

  put: {
    resBody: Types.sectionResponse
    reqFormat: URLSearchParams
    reqBody?: Types.sectionParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
