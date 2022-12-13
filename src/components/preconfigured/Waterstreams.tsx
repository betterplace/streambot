// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { Standard } from '..'
// @ts-expect-error TS(2307): Cannot find module '../../images/spendenanzeige_wa... Remove this comment to see the full error message
import backgroundImage from '../../images/spendenanzeige_waterstreams.png'

export const Waterstreams = (props: any) => <Standard
  {...props}
  backgroundImage={backgroundImage}
  dataContainerStyle={{ top: 75, right: 150, bottom: 57, left: 480 }}
  headlineStyle={{ marginTop: 0, marginBottom: 13 }}
/>
