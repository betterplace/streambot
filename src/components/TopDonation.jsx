import React from 'react'
import {formatCents} from '../tools'
import {Author, HeadlineWithBr} from '.'

export const TopDonation = (props) => {
  const headline = props.params.get('headline') || 'Top-Spende'
  return <div className='truncate-with-ellipsis'>
    <HeadlineWithBr content={headline} />
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}
