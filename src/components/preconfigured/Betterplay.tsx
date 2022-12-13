import React from 'react'
import backgroundImage from '../../images/spendenanzeige_betterplay.png'
import { Standard } from '..'

export const Betterplay = (props: any) => (
  <Standard {...props} backgroundImage={backgroundImage} headlineStyle={{ marginTop: 0 }} />
)
