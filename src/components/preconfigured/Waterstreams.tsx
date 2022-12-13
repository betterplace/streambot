import React from 'react'
import { Standard } from '..'
import backgroundImage from '../../images/spendenanzeige_waterstreams.png'

export const Waterstreams = (props) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    dataContainerStyle={{ top: 75, right: 150, bottom: 57, left: 480 }}
    headlineStyle={{ marginTop: 0, marginBottom: 13 }}
  />
)
