import React from 'react'
import { Standard } from '..'
import backgroundImage from '../../images/spendenanzeige_xmas.png'

export const Xmas = (props) => <Standard
  {...props}
  backgroundImage={backgroundImage}
  // TODO: Positioning is broken. Add dataContainerStyle here.
/>
