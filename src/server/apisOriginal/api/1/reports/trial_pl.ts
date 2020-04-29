/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      fiscal_year?: number
      start_month?: number
      end_month?: number
      start_date?: string
      end_date?: string
      account_item_display_type?: 'account_item' | 'group'
      breakdown_display_type?: 'partner' | 'item' | 'section' | 'account_item'
      partner_id?: number
      partner_code?: string
      item_id?: number
      section_id?: number
      adjustment?: 'only' | 'without'
      cost_allocation?: 'only' | 'not_include'
    }

    resBody: Types.trialPlResponse
  }
}
