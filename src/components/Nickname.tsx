// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { decodeColor } from '../tools'

export const Nickname = ({
  name,
  color
}: any) => {
  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <span
      style={color ? { color: decodeColor(color) } : {}}
      dangerouslySetInnerHTML={{ __html: name ? name : 'Anonym' }}
    />
  )
}
