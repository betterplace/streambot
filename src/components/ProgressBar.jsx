import React from 'react'

export const ProgressBar = ({percentage}) => {
  return <div className='progressbar'><span style={{width: `${Math.round(percentage)}%`}}></span></div>
}
