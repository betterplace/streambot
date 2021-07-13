import React from 'react'
import { formatCents } from '../tools'
import { Nickname, HeadlineWithBr } from '.'
import { List } from './List'

export const LastDonation = (props) => {
  const headline = props.params.get('headline') ?? 'Letzte Spende:'
  const listMode = props.params.get('list') === 'true'

  return <div className='truncate-with-ellipsis' style={{width: props.params.get('width')}}>
    <HeadlineWithBr content={headline} />
    {listMode ?
      <List {...props} simple={true} />
      : <>
        <Nickname {...props.data.author} color={props.params.get('nicknameColor')} /><br />{formatCents(props.data.donated_amount_in_cents, props.params)}
      </>
    }
  </div>
}
