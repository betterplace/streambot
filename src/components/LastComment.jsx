import React from 'react'
import sanitizeHtml from 'sanitize-html'
import {Author} from '.'
import {formatCents, decodeHtmlEntities} from '../tools'

export const LastComment = (props) => {
  let message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = props.params.get('maxLength')

  if (maxLength && message.length > maxLength) {
    message = message.slice(0, maxLength) + '…'
  }

  return <div>
    <div className='message'>{message}</div>
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}
