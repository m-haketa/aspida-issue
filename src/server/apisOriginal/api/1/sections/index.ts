/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: {
      sections: Types.section[]
    }
  }

  post: {
    resBody: Types.sectionResponse
    reqFormat: URLSearchParams
    reqBody?: Types.sectionParams
  }
}
