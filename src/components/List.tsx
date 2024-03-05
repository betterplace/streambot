import React from 'react'
import { CSSProperties } from 'styled-components'
import { Nickname } from '.'
import { ReloadingWidgetProps } from './types'
import { decodeColor, formatCents } from '../tools'

const ListNickname = ({ name, color }: { name: string; color: string }) => {
  const style: CSSProperties = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
  }
  if (color) {
    style.color = decodeColor(color)
  }
  return <div style={style} dangerouslySetInnerHTML={{ __html: name ? name : 'Anonym' }} />
}

const Amount = ({ amount, params }: { amount: number; params: URLSearchParams }) => {
  return <div>{formatCents(amount, params)}</div>
}

type ListData = {
  id: number
  author: any
  donated_amount_in_cents: number
}

type ListProps = Pick<ReloadingWidgetProps, 'params'> & { simple: boolean; listData: ListData[] }

export const List = ({ simple, listData, params }: ListProps) => {
  // TODO: This is a temporary solution to get the differences out of <LastDonation>. Gotta assimilate both versions.
  if (simple)
    return (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {listData.map((data) => (
          <li key={data.id}>
            <Nickname {...data.author} color={params.get('nicknameColor')} />{' '}
            {formatCents(data.donated_amount_in_cents, params)}
          </li>
        ))}
      </ul>
    )

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;display=swap" rel="stylesheet" />
      <div>
        {listData.map((data) => {
          if (!data.id) return null
          return (
            <div key={data.id} style={{ display: 'flex' }}>
              <ListNickname {...data.author} color={params.get('nicknameColor')} />
              <div style={{ flexGrow: 1 }}>&nbsp;</div>
              <Amount amount={data.donated_amount_in_cents} params={params} />
            </div>
          )
        })}
      </div>
    </>
  )
}
