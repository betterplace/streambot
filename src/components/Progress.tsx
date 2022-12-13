import React from 'react'
import { formatCents } from '../tools'

export const ProgressBar = (props: any) => {
  const {
    data: { progress_percentage },
  } = props
  return (
    <div className="progressbar">
      <span style={{ width: `${Math.round(progress_percentage)}%` }}></span>
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
    <div className="progress-label">
      {formatCents(donated_amount_in_cents, props.params)}{' '}
      {`von ${formatCents(requested_amount_in_cents, props.params)} `}
      {Collected(props)}
    </div>
  )
}

const TargetProgress = (props: any) => {
  switch (props.params.get('display')) {
    case 'text':
      return (
        <div>
          <TargetText {...props} />
        </div>
      )
    case 'bar':
      return (
        <div>
          <ProgressBar {...props} />
        </div>
      )
    default:
      return (
        <div>
          <TargetText {...props} />
          <ProgressBar {...props} />
        </div>
      )
  }
}

const NonTargetProgress = (props: any) => {
  const {
    data: { donated_amount_in_cents },
  } = props

  return (
    <div>
      <div className="progress-label">
        {formatCents(donated_amount_in_cents, props.params)}
        {Collected(props)}
      </div>
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
