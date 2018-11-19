import React from 'react'

export const Nickname = ({name, color}) => {
  return <span style={color ? {color: `#${color}`} : {}}>
    {name ? name : 'Anonym'}
  </span>
}
