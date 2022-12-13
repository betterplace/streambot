// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react'
import { useInterval } from 'react-use'
import { formatCents, TimeAgo } from '../tools'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { uniqBy } from 'lodash/array'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { noop } from 'lodash/util'

// Quick and dirty test to see if this little widget works ok enough for
// streamers that want to track the current donations in a separate window.

const apiUrl = 'https://api.betterplace.org'
// const apiUrl = 'https://api.bp42.com'

export const DonationList = (props: any) => {
  const [donations, setDonations] = useState([])
  const [since, setSince] = useState(new Date())

  noop(since) // silence warning

  useInterval(() => {
    const reloadData = async () => {
      // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      const fiveMinutesAgo = new Date(new Date() - 5 * 60000)
      const sinceParam = fiveMinutesAgo.toISOString().replace(/\..*/, 'GMT')
      const url = `${apiUrl}/api_v4/fundraising_events/${props.match.params.id}/opinions?order=id:desc&facets=since:${sinceParam}`
      const response = await fetch(url)
      const json = await response.json()
      setDonations(uniqBy([...json.data, ...donations], 'id'))
    }
    reloadData()
    setSince(new Date())
  }, 5000)

  return <>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <link rel="stylesheet" href="https://www.betterplace.org/de/layouts/current_stylesheet/application" />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&amp;display=swap" rel="stylesheet" />

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="container">
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className="row">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col-md-24 m-y-md">
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <h1 className="font-lg is-lighter">Spenden-Feed</h1>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        {donations.map((d: any) => <Donation key={d.id} {...d} params={props.params} />)}
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  </>;
}

const Donation = (props: any) => {
  const cents = props.donated_amount_in_cents
  const donor = props.author ? props.author.name : 'Anonym'
  const amountIsSmall = cents >= 100000 || cents % 100 > 0

  const image =
    'https://betterplace-assets.betterplace.org/assets/default/donation_profile_picture/fill_100x100_default-2f969919aad3a0d51372c1474e73e452ea00947cb78d944c81aa1891b590b31e.png'

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="col-md-24">
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className="generic-opinion media">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="opinion-avatar-and-amount media-left">
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <img className="user-avatar round-image" src={image} alt={`Avatar ${donor}`} width="50" />
          {cents && (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={`amount ${amountIsSmall ? 'is-small' : ''}`}>
              {formatCents(cents, new URLSearchParams())}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
          )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="opinion-body media-body">
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div className="headline">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <strong dangerouslySetInnerHTML={{ __html: donor }} /> hat gespendet
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <br />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <small>
              <TimeAgo datetime={props.created_at} locale={'de'} />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </small>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          </div>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          {props.message && <div className="message" dangerouslySetInnerHTML={{ __html: props.message }} />}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  )
}
