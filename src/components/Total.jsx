import React from 'react'
import {formatCents} from '../tools'
import {HeadlineWithBr} from '.'

export const Total = (props) => {
  const headline = props.params.get('headline') || 'Spendenstand'
  return <div className='truncate-with-ellipsis'>
    <HeadlineWithBr content={headline} />
    {formatCents(props.data.donated_amount_in_cents)}
  </div>
}
