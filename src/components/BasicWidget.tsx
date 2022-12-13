// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { formatCents } from '../tools'
import { Nickname, HeadlineWithBr } from '.'
import { List } from './List'

export const BasicWidget = (props: any) => {
  const headline = props.params.get('headline') ?? props.defaultHeadline
  const listMode = props.params.get('list') === 'true'

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="truncate-with-ellipsis" style={{ width: props.params.get('width') }}>
      <HeadlineWithBr content={headline} />
      {listMode ? (
        <List {...props} simple={props.simpleList} />
      ) : (
        <>
          <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <br />
          {formatCents(props.data.donated_amount_in_cents, props.params)}
        </>
      )}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}
