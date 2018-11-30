import React from 'react'

export const Nickname = ({name, color}) => {
  return <span
    style={color ? {color: `#${color}`} : {}}
    dangerouslySetInnerHTML={{__html: name ? name : 'Anonym'}}
  />
}
