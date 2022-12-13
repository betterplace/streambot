import React from 'react'
import { decodeColor } from '../tools'

export const Nickname = ({ name, color }) => {
  return (
    <span
      style={color ? { color: decodeColor(color) } : {}}
      dangerouslySetInnerHTML={{ __html: name ? name : 'Anonym' }}
    />
  )
}
