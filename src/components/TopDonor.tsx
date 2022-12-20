import React from 'react'
import { BasicWidget } from '.'
import { ReloadingWidgetProps } from './types'

export const TopDonor = (props: ReloadingWidgetProps) => {
  return <BasicWidget {...props} defaultHeadline="Top-Spender*in:" />
}
