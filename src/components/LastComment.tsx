import React from 'react'
import sanitizeHtml from 'sanitize-html'
import { Nickname } from '.'
import { RouteComponentProps } from 'react-router-dom'
import { decodeHtmlEntities, formatCents, truncate } from '../tools'

type LastCommentData = {
  id: number | null
  author: any
  message: string
  donated_amount_in_cents: any
}

export const LastComment = (props: RouteComponentProps & { params: URLSearchParams; data: LastCommentData }) => {
  const message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = props.params.get('maxLength')

  return (
    <div className="truncate-with-ellipsis">
      <div className="truncate-with-ellipsis">{maxLength ? truncate(message, parseInt(maxLength)) : message}</div>
      {formatCents(props.data.donated_amount_in_cents, props.params) || 'Spende'} von{' '}
      <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
    </div>
  )
}
