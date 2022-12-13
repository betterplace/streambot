// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { Standard } from '..'
// @ts-expect-error TS(2307): Cannot find module '../../images/spendenanzeige_ma... Remove this comment to see the full error message
import backgroundImage from '../../images/spendenanzeige_mashup.png'

export const Mashup = (props: any) => <Standard
  {...props}
  backgroundImage={backgroundImage}
  dataContainerStyle={{ top: 73, right: 120, bottom: 46, left: 300 }}
  headlineStyle={{ lineHeight: '43px' }}
/>
