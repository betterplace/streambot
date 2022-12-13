import React from 'react'
import backgroundImage from '../../images/spendenanzeige_xmas.png'
import { Standard } from '..'

export const Xmas = (props: any) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    // TODO: Positioning is broken. Add dataContainerStyle here.
  />
)
