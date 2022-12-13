// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { Standard } from '..'
// @ts-expect-error TS(2307): Cannot find module '../../images/spendenanzeige_xm... Remove this comment to see the full error message
import backgroundImage from '../../images/spendenanzeige_xmas.png'

export const Xmas = (props: any) => <Standard
  {...props}
  backgroundImage={backgroundImage}
  // TODO: Positioning is broken. Add dataContainerStyle here.
/>
