// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
import { Nickname } from '.'
import { formatCents, decodeColor } from '../tools'

const ListNickname = ({
  name,
  color
}: any) => {
  const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
  }
  if (color) {
    // @ts-expect-error TS(2339): Property 'color' does not exist on type '{ whiteSp... Remove this comment to see the full error message
    style.color = decodeColor(color)
  }
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return <div style={style} dangerouslySetInnerHTML={{ __html: name ? name : 'Anonym' }} />
}

const Amount = ({
  amount,
  params
}: any) => {
  const style = {
    fontFamily: 'Roboto Mono',
  }
  // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return <div style={style}>{formatCents(amount, params)}</div>
}

export const List = (props: any) => {
  // TODO: This is a temporary solution to get the differences out of <LastDonation>. Gotta assimilate both versions.
  if (props.simple)
    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        {props.listData.map((data: any) => <li key={data.id}>
          <Nickname {...data.author} color={props.params.get('nicknameColor')} />{' '}
          {formatCents(data.donated_amount_in_cents, props.params)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>)}
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </ul>
    );

  return <>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;display=swap" rel="stylesheet" />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div>
      {props.listData.map((data: any) => {
        if (!data.id) return null
        return (
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div key={data.id} style={{ display: 'flex' }}>
            <ListNickname {...data.author} color={props.params.get('nicknameColor')} />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div style={{ flexGrow: 1 }}>&nbsp;</div>
            <Amount amount={data.donated_amount_in_cents} params={props.params} />
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          </div>
        )
      })}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  </>;
}
