import React from 'react'
import { formatCents } from '../tools'

export const ProgressBar = (props) => {
  const { data: { progress_percentage } } = props
  return <div className='progressbar'><span style={{width: `${Math.round(progress_percentage)}%`}}></span></div>
}

const Collected = ({ params }) => {
  const collected = params.get('collected')
  if (!collected || 0 === collected.length) return ' gesammelt.'
  if (collected === 'false') return null
  return collected
}

const TargetText = (props) => {
  const {
    data: { donated_amount_in_cents, requested_amount_in_cents }
  } = props

  return(
    <div className='progress-label'>
      {formatCents(donated_amount_in_cents, props.params)} {`von ${formatCents(requested_amount_in_cents, props.params)} `}{Collected(props)}
    </div>
  )
}

const TargetProgress = (props) => {
  switch(props.params.get('only')) {
    case 'text':
      return <div>
        <TargetText {...props} />
      </div>
    case 'bar':
      return <div>
        <ProgressBar {...props} />
      </div>
    default:
      return <div>
        <TargetText {...props} />
        <ProgressBar {...props} />
      </div>
  }
}

const NonTargetProgress = (props) => {
  const { data: { donated_amount_in_cents } } = props

  return <div>
    <div className='progress-label'>
      {formatCents(donated_amount_in_cents, props.params)}{Collected(props)}
    </div>
  </div>
}

export const Progress = (props) => {
  if (props.data.requested_amount_in_cents) {
    return <TargetProgress {...props} />
  } else {
    return <NonTargetProgress {...props} />
  }
}
