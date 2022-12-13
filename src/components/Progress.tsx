// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { formatCents } from '../tools'

export const ProgressBar = (props: any) => {
  const {
    data: { progress_percentage },
  } = props
  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="progressbar">
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <span style={{ width: `${Math.round(progress_percentage)}%` }}></span>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}

const Collected = ({
  params
}: any) => {
  const collected = params.get('collected')
  // add standard suffix if not overridden or there are zero donations
  if (!collected || 0 === collected.length) return ' gesammelt.'
  // pass 'false' to disable
  if (collected === 'false') return null
  // pass another param value to use as alternate suffix
  return collected
}

const TargetText = (props: any) => {
  const {
    data: { donated_amount_in_cents, requested_amount_in_cents },
  } = props

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="progress-label">
      {formatCents(donated_amount_in_cents, props.params)}{' '}
      {`von ${formatCents(requested_amount_in_cents, props.params)} `}
      {Collected(props)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}

const TargetProgress = (props: any) => {
  switch (props.params.get('display')) {
    case 'text':
      return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
          <TargetText {...props} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
      )
    case 'bar':
      return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
          <ProgressBar {...props} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
      )
    default:
      return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
          <TargetText {...props} />
          <ProgressBar {...props} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
      )
  }
}

const NonTargetProgress = (props: any) => {
  const {
    data: { donated_amount_in_cents },
  } = props

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className="progress-label">
        {formatCents(donated_amount_in_cents, props.params)}
        {Collected(props)}
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}

export const Progress = (props: any) => {
  if (props.data.requested_amount_in_cents) {
    return <TargetProgress {...props} />
  } else {
    return <NonTargetProgress {...props} />
  }
}
