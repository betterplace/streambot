import React from 'react'
import { formatCents } from '../tools'
import { Nickname, HeadlineWithBr } from '.'
import { List } from './List'

export const TopDonation = (props) => {
  const headline = props.params.get('headline') ?? 'Top-Spende:'
  const listMode = props.params.get('list') === 'true'

  return <div className='truncate-with-ellipsis'>
    <HeadlineWithBr content={headline} />
    {listMode ?
      <List {...props} />
      : <>
        <Nickname {...props.data.author} color={props.params.get('nicknameColor')} /><br />{formatCents(props.data.donated_amount_in_cents, props.params)}
      </>
    }
  </div>
}
