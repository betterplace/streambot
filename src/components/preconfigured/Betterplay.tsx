import React from 'react'
import backgroundImage from '../../images/spendenanzeige_betterplay.png'
import { Standard } from '..'
import { WidgetProps } from '../types'

export const Betterplay = (props: WidgetProps) => (
  <Standard {...props} backgroundImage={backgroundImage} headlineStyle={{ marginTop: 0 }} />
)
