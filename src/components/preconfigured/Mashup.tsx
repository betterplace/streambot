import React from 'react'
import backgroundImage from '../../images/spendenanzeige_mashup.png'
import { RouteComponentProps } from 'react-router-dom'
import { Standard } from '..'

export const Mashup = (props: RouteComponentProps) => (
  <Standard
    {...props}
    backgroundImage={backgroundImage}
    dataContainerStyle={{ top: 73, right: 120, bottom: 46, left: 300 }}
    headlineStyle={{ lineHeight: '43px' }}
  />
)
