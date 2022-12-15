import React from 'react'
import { ProgressBar } from '.'

export const Hashtags = ({ data }: { data: any }) => {
  const counts: number[] = Object.values(data)
  const totalCount: number = counts.reduce((acc, count) => acc + count)
  const highestCount = Math.max(...counts)

  const entries = Object.entries(data) as [[key: string, value: number]]

  const rows = entries.map((entry) => (
    <tr key={entry[0]}>
      <td className="label-td">
        <span>#{entry[0]}</span>
      </td>
      <td className="bar-td">
        <ProgressBar data={{ progress_percentage: highestCount ? ((entry[1] as number) * 100) / highestCount : 0 }} />
      </td>
      <td className="percentage-td">
        <span>{totalCount ? Math.round(((entry[1] as number) * 100) / totalCount) : 0}%</span>
      </td>
    </tr>
  ))

  return (
    <table className="hashtags-table">
      <tbody>{rows}</tbody>
    </table>
  )
}
