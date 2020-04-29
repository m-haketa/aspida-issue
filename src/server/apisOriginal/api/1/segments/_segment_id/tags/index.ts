/* eslint-disable */
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
    }

    resBody: {
      segment_tags: Types.segment_tag[]
    }
  }

  post: {
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }
}
