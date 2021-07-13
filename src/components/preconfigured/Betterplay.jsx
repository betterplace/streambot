import React from 'react'
import { Standard } from '..'
import backgroundImage from '../../images/spendenanzeige_betterplay.png'

export const Betterplay = (props) => <Standard
  {...props}
  backgroundImage={backgroundImage}
  headlineStyle={{marginTop: 0}}
/>
