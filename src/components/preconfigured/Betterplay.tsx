// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { Standard } from '..'
// @ts-expect-error TS(2307): Cannot find module '../../images/spendenanzeige_be... Remove this comment to see the full error message
import backgroundImage from '../../images/spendenanzeige_betterplay.png'

export const Betterplay = (props: any) => <Standard {...props} backgroundImage={backgroundImage} headlineStyle={{ marginTop: 0 }} />
