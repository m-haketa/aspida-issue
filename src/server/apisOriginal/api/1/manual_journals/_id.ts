/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.manualJournalResponse
  }

  put: {
    resBody: Types.manualJournalResponse
    reqFormat: URLSearchParams
    reqBody?: Types.manualJournalUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}
