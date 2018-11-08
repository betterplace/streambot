import React from 'react'
import {formatCents} from '../tools'
import {ProgressBar} from '.'

const Collected = ({params}) => {
  const collected = params.get('collected')
  if (!collected || 0 === collected.length) return ' gesammelt.'
  if (collected === 'false') return null
  return collected
}

export const Progress = (props) => {
  const {data: {progress_percentage, donated_amount_in_cents, requested_amount_in_cents}} = props
  return <div>
    <div className='progress-label'>
      {formatCents(donated_amount_in_cents)} {requested_amount_in_cents && `von ${formatCents(requested_amount_in_cents)} `}{Collected(props)}
    </div>
    {progress_percentage && <ProgressBar percentage={progress_percentage}/>}
  </div>
}
