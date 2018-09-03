import React from 'react'
import {formatCents} from '../tools'
import {ProgressBar} from '.'

export const Progress = ({data: {progress_percentage, donated_amount_in_cents, requested_amount_in_cents}}) => {
  return <div>
    <div className='progress-label'>
      {formatCents(donated_amount_in_cents)} {requested_amount_in_cents && `von ${formatCents(requested_amount_in_cents)} `} gesammelt.
    </div>
    {progress_percentage && <ProgressBar percentage={progress_percentage}/>}
  </div>
}
