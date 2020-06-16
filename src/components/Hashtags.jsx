import React from 'react'
import {ProgressBar} from '.'

export const Hashtags = ({data}) => {
  const counts = Object.values(data)
  const totalCount = counts.reduce((acc, count) => acc + count)
  const highestCount = Math.max(...counts)

  const rows = Object.entries(data).map((entry) => (
    <tr key={entry[0]}>
      <td className='label-td'>
        <span>#{entry[0]}</span>
      </td>
      <td className='bar-td'>
        <ProgressBar
          data={{ progress_percentage: highestCount ? (entry[1] * 100) / highestCount : 0 }}
        />
      </td>
      <td className='percentage-td'>
        <span>{totalCount ? Math.round((entry[1] * 100) / totalCount) : 0}%</span>
      </td>
    </tr>
  ))

  return <table className='hashtags-table'><tbody>{rows}</tbody></table>
}
