import React from 'react'
import { TrustedHtml } from './TrustedHtml'
import { decodeColor } from '../tools'

export const Nickname = ({ name, color }: { name: string; color: string }) => {
  return <TrustedHtml as="span" style={color ? { color: decodeColor(color) } : {}} value={name ? name : 'Anonym'} />
}
