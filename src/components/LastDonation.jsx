import React from 'react'
import {formatCents} from '../tools'
import {Nickname, HeadlineWithBr} from '.'

export const LastDonation = (props) => {
  const headline = props.params.get('headline') || 'Letzte Spende:'

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

const List = (props) =>
  <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
    {props.listData.map((data) => (
      <li key={data.id}>
        <Nickname {...data.author} color={props.params.get('nicknameColor')} /> {formatCents(data.donated_amount_in_cents, props.params)}
      </li>
    ))}
  </ul>
