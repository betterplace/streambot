import React from 'react'
import {formatCents,decodeColor} from '../tools'

const ListNickname = ({ name, color }) => {
  const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
    flexGrow: 2
  }
  if (color) {
    style.color = decodeColor(color)
  }
  return <div
    style={style}
    dangerouslySetInnerHTML={{__html: name ? name : 'Anonym'}}
  />
}

const Amount = ({ amount, params }) => {
  const style = {
    fontFamily: 'Roboto Mono',
  }
  return <div style={style}>{formatCents(amount, params)}</div>
}

export const List = (props) => {
  return <>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&amp;display=swap" rel="stylesheet" />
    <div style={{ listStyle: 'none', width: props.params.get('width') || '400px'}}>
    {props.listData.map((data) => {
      if (!data.id) return null
      return <div key={data.id} style={{display: 'flex'}}>
        <ListNickname {...data.author} color={props.params.get('nicknameColor')} />
        <div style={{flexGrow: 1}}>&nbsp;</div>
        <Amount amount={data.donated_amount_in_cents} params={props.params} />
      </div>
    })}
    </div>
  </>
}
