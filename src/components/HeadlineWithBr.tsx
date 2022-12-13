// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'

export const HeadlineWithBr = ({
  content
}: any) => {
  if (!content || 0 === content.length || content === 'false') return null
  return (
    <React.Fragment>
      {content}
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <br />
    </React.Fragment>
  )
}
