/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  put: {
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
