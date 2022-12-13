// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { BasicWidget } from '.'

export const LastDonation = (props: any) => <BasicWidget {...props} defaultHeadline="Letzte Spende:" simpleList />
