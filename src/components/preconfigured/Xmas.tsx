import React from 'react'
import backgroundImage from '../../images/spendenanzeige_xmas.png'
import { Standard } from '..'
import { WidgetProps } from 'components/types'

export const Xmas = (props: WidgetProps) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    // TODO: Positioning is broken. Add dataContainerStyle here.
  />
)
