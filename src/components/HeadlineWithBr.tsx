import React from 'react'

export const HeadlineWithBr = ({ content }: any) => {
  if (!content || 0 === content.length || content === 'false') return null
  return (
    <React.Fragment>
      {content}
      <br />
    </React.Fragment>
  )
}
