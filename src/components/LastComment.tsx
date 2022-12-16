import React from 'react'
import sanitizeHtml from 'sanitize-html'
import { Nickname } from '.'
import { ReloadingWidgetProps } from './types'
import { decodeHtmlEntities, formatCents, truncate } from '../tools'

type LastCommentData = {
  id: number | null
  author: any
  message: string
  donated_amount_in_cents: any
}

export const LastComment = (props: ReloadingWidgetProps<LastCommentData>) => {
  const message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  const maxLength = parseInt(props.params.get('maxLength') || '')

  return (
    <div className="truncate-with-ellipsis">
      <div className="truncate-with-ellipsis">{truncate(message, maxLength)}</div>
      {formatCents(props.data.donated_amount_in_cents, props.params) || 'Spende'} von{' '}
      <Nickname {...props.data.author} color={props.params.get('nicknameColor')} />
    </div>
  )
}
