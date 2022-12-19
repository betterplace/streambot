import React from 'react'
import { HeadlineWithBr, Nickname } from '.'
import { List } from './List'
import { formatCents } from '../tools'

export const BasicWidget = (props: any) => {
  const headline = props.params.get('headline') ?? props.defaultHeadline
  const listMode = props.params.get('list') === 'true'

  return (
    <div className="truncate-with-ellipsis" style={{ width: props.params.get('width') }}>
      <HeadlineWithBr content={headline} />
      {listMode ? (
        <List {...props} simple={props.simpleList} />
      ) : (
        <>
          <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
          <br />
          {formatCents(props.data.donated_amount_in_cents, props.params)}
        </>
      )}
    </div>
  )
}
