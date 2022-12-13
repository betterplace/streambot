// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'sani... Remove this comment to see the full error message
import sanitizeHtml from 'sanitize-html'
import { Nickname } from '.'
import { formatCents, decodeHtmlEntities, truncate } from '../tools'

export const LastComment = (props: any) => {
  let message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = props.params.get('maxLength')

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="truncate-with-ellipsis">
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className="truncate-with-ellipsis">{truncate(message, maxLength)}</div>
      {formatCents(props.data.donated_amount_in_cents, props.params) || 'Spende'} von{' '}
      <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}
