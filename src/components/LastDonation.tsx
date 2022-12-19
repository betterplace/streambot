import React from 'react'
import { BasicWidget } from '.'
import { ReloadingWidgetProps } from './types'

export const LastDonation = (props: ReloadingWidgetProps) => (
  <BasicWidget {...props} defaultHeadline="Letzte Spende:" simpleList />
)
