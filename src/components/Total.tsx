import React from 'react'
import { HeadlineWithBr } from '.'
import { RouteComponentProps } from 'react-router-dom'
import { formatCents } from '../tools'

type TotalData = {
  id: number | null
  author: any
  amountInCents: number | null
}

export const Total = (props: RouteComponentProps & { params: URLSearchParams; data: TotalData }) => {
  const headline = props.params.get('headline') === null ? 'Spendenstand' : props.params.get('headline')
  const subtrahend = props.params.get('subtractCents') || '0'
  return (
    <div className="truncate-with-ellipsis">
      <HeadlineWithBr content={headline} />
      {props.data.amountInCents ? formatCents(props.data.amountInCents - parseInt(subtrahend), props.params) : ''}
    </div>
  )
}
