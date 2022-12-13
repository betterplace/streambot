// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { formatCents } from '../tools'
import { HeadlineWithBr } from '.'

export const Total = (props: any) => {
  const headline = props.params.get('headline') === null ? 'Spendenstand' : props.params.get('headline')
  const subtrahend = props.params.get('subtractCents') || 0
  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="truncate-with-ellipsis">
      <HeadlineWithBr content={headline} />
      {formatCents(props.data.donated_amount_in_cents - subtrahend, props.params)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}
