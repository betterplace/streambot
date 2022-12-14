import React from 'react'
import { BasicWidget } from '.'
import { RouteComponentProps } from 'react-router-dom'

export const LastDonation = (props: RouteComponentProps) => (
  <BasicWidget {...props} defaultHeadline="Letzte Spende:" simpleList />
)
