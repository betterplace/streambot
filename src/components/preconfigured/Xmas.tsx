import React from 'react'
import backgroundImage from '../../images/spendenanzeige_xmas.png'
import { RouteComponentProps } from 'react-router-dom'
import { Standard } from '..'

export const Xmas = (props: RouteComponentProps) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    // TODO: Positioning is broken. Add dataContainerStyle here.
  />
)
