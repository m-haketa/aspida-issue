/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      companies?: 'true'
    }

    resBody: Types.meResponse
  }

  put: {
    resBody: Types.userResponse
    reqFormat: URLSearchParams
    reqBody?: Types.userParams
  }
}
