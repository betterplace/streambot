import React from 'react'
import backgroundImage from '../../images/spendenanzeige_betterplay.png'
import { RouteComponentProps } from 'react-router-dom'
import { Standard } from '..'

export const Betterplay = (props: RouteComponentProps) => (
  <Standard {...props} backgroundImage={backgroundImage} headlineStyle={{ marginTop: 0 }} />
)
