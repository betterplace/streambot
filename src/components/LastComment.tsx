import React from 'react'
import sanitizeHtml from 'sanitize-html'
import { Nickname } from '.'
import { decodeHtmlEntities, formatCents, truncate } from '../tools'

export const LastComment = (props: any) => {
  const message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = props.params.get('maxLength')

  return (
    <div className="truncate-with-ellipsis">
      <div className="truncate-with-ellipsis">{truncate(message, maxLength)}</div>
      {formatCents(props.data.donated_amount_in_cents, props.params) || 'Spende'} von{' '}
      <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
    </div>
  )
}
