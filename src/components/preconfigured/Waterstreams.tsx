import React from 'react'
import backgroundImage from '../../images/spendenanzeige_waterstreams.png'
import { Standard } from '..'
import { WidgetProps } from '../types'

export const Waterstreams = (props: WidgetProps) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    dataContainerStyle={{ top: 75, right: 150, bottom: 57, left: 480 }}
    headlineStyle={{ marginTop: 0, marginBottom: 13 }}
  />
)
