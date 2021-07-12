import React from 'react'
import { formatCents } from '../tools'
import { Nickname, HeadlineWithBr } from '.'

export const LastDonation = (props) => {
  const headline = props.params.get('headline') ?? 'Letzte Spende:'
  const listMode = props.params.get('list') === 'true'

  return <div className='truncate-with-ellipsis' style={{width: props.params.get('width')}}>
    <HeadlineWithBr content={headline} />
    {listMode ?
      <List {...props} />
      : <>
        <Nickname {...props.data.author} color={props.params.get('nicknameColor')} /><br />{formatCents(props.data.donated_amount_in_cents, props.params)}
      </>
    }
  </div>
}

const List = (props) =>
  <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
    {props.listData.map((data) => (
      <li key={data.id}>
        <Nickname {...data.author} color={props.params.get('nicknameColor')} /> {formatCents(data.donated_amount_in_cents, props.params)}
      </li>
    ))}
  </ul>
