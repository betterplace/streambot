import React from 'react'
import sanitizeHtml from 'sanitize-html'
import {Author} from '.'
import {formatCents, decodeHtmlEntities, truncate} from '../tools'

export const LastComment = (props) => {
  let message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = props.params.get('maxLength')

  return <div className='truncate-with-ellipsis'>
    <div className='truncate-with-ellipsis'>{truncate(message, maxLength)}</div>
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}
