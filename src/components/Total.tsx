import React from 'react'
import { HeadlineWithBr } from '.'
import { ReloadingWidgetProps } from './types'
import { formatCents } from '../tools'

type TotalData = {
  id: number | null
  author: any
  donated_amount_in_cents: number | null
}

export const Total = (props: ReloadingWidgetProps<TotalData>) => {
  const headline = props.params.get('headline') === null ? 'Spendenstand' : props.params.get('headline')
  const subtrahend = props.params.get('subtractCents') || '0'
  return (
    <div className="truncate-with-ellipsis">
      <HeadlineWithBr content={headline} />
      {props.data.donated_amount_in_cents
        ? formatCents(props.data.donated_amount_in_cents - parseInt(subtrahend), props.params)
        : ''}
    </div>
  )
}
