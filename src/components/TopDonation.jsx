import React from 'react'
import { formatCents } from '../tools'
import { Nickname, HeadlineWithBr } from '.'
import { List } from './List'

export const TopDonation = (props) => {
  const headline = props.params.get('headline') === null ? 'Top-Spende:' : props.params.get('headline')

  if (props.params.get('list')) {
    return <div className='truncate-with-ellipsis'>
      <HeadlineWithBr content={headline} />
      <List {...props} />
    </div>
  } else {
    return <div className='truncate-with-ellipsis'>
      <HeadlineWithBr content={headline} />
      <Nickname {...props.data.author} color={props.params.get('nicknameColor')} /><br />{formatCents(props.data.donated_amount_in_cents, props.params)}
    </div>
  }
}
