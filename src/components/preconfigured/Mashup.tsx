import React from 'react'
import { Standard } from '..'
import backgroundImage from '../../images/spendenanzeige_mashup.png'

export const Mashup = (props) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    dataContainerStyle={{ top: 73, right: 120, bottom: 46, left: 300 }}
    headlineStyle={{ lineHeight: '43px' }}
  />
)
