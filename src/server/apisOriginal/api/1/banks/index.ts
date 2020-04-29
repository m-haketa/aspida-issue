/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      offset?: number
      limit?: number
      type?: 'bank' | 'credit_card' | 'wallet'
    }

    resBody: {
      banks: Types.bank[]
    }
  }
}
