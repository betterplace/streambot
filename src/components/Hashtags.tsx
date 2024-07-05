import React from 'react'
import { ProgressBar } from '.'
import { ReloadingWidgetProps } from './types'
import { formatCents } from 'tools'

export const Hashtags = (props: ReloadingWidgetProps<Record<string, number>>) => {
  const entries = Object.entries(props.data)
  const sumOfHashtagAmounts = entries.reduce((acc, [_, amount]) => acc + amount, 0)
  const highestAmount = Math.max(...entries.map(([_, amount]) => amount))

  const rows = entries.map(([hashtag, amountInCents]) => (
    <tr key={hashtag}>
      <td className="label-td">
        <span>#{hashtag}</span>
      </td>
      <td className="bar-td">
        <ProgressBar data={{ progress_percentage: highestAmount ? (amountInCents * 100) / highestAmount : 0 }} />
      </td>
      <td className="percentage-td">
        <span>{sumOfHashtagAmounts && formatCents(amountInCents, new URLSearchParams())}</span>
      </td>
    </tr>
  ))

  return (
    <table className="hashtags-table">
      <tbody>{rows}</tbody>
    </table>
  )
}
