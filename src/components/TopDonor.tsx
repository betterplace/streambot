import React from 'react'
import { BasicWidget } from '.'
import { RouteComponentProps } from 'react-router-dom'

export const TopDonor = (props: RouteComponentProps) => {
  return <BasicWidget {...props} defaultHeadline="Top-Spender:" />
}
