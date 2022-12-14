import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { decodeColor } from '../tools'

export const Nickname = ({ name, color }: RouteComponentProps & { name: string; color: string }) => {
  return (
    <span
      style={color ? { color: decodeColor(color) } : {}}
      dangerouslySetInnerHTML={{ __html: name ? name : 'Anonym' }}
    />
  )
}
