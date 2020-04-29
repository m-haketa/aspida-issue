/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      limit?: number
    }

    resBody: {
      users: Types.user[]
    }
  }
}
