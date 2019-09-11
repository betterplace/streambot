import React from 'react'
import {formatCents} from '../tools'
import {Nickname, HeadlineWithBr} from '.'

export const TopDonor = (props) => {
  const headline = props.params.get('headline') || 'Top-Spender:'
  return <div className='truncate-with-ellipsis'>
    <HeadlineWithBr content={headline} />
    <Nickname {...props.data.author} color={props.params.get('nicknameColor')} /><br/>{formatCents(props.data.donated_amount_in_cents)}
  </div>
}
