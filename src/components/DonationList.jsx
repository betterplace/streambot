import React, {useState} from 'react'
import {useInterval} from 'react-use'
import {formatCents, TimeAgo} from '../tools'
import {uniqBy} from 'lodash/array'
import {noop} from 'lodash/util'

// Quick and dirty test to see if this little widget works ok enough for
// streamers that want to track the current donations in a separate window.

const apiUrl = 'https://api.betterplace.org'
// const apiUrl = 'https://api.bp42.com'

export const DonationList = (props) => {
  const [donations, setDonations] = useState([])
  const [since, setSince] = useState(new Date())

  noop(since) // silence warning

  useInterval(
    () => {
      const reloadData = async () => {
        const fiveMinutesAgo = new Date((new Date() - 5 * 60000))
        const sinceParam = fiveMinutesAgo.toISOString().replace(/\..*/, 'GMT')
        const url = `${apiUrl}/api_v4/fundraising_events/${props.match.params.id}/opinions?order=id:desc&facets=since:${sinceParam}`
        const response = await fetch(url)
        const json = await response.json()
        setDonations(uniqBy([...json.data, ...donations], 'id'))
      }
      reloadData()
      setSince(new Date())
    },
    5000
  )

  return <>
    <link rel="stylesheet" href="https://www.betterplace.org/de/layouts/current_stylesheet/application" />
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&amp;display=swap" rel="stylesheet" />

    <div className='container'>
      <div className='row'>
        <div className='col-md-24 m-y-md'>
          <h1 className="font-lg is-lighter">
            Spenden-Feed
          </h1>
        </div>
        {donations.map(d => <Donation key={d.id} {...d} params={props.params} />)}
      </div>
    </div>
  </>
}

const Donation = (props) => {
  const cents = props.donated_amount_in_cents
  const donor = props.author ? props.author.name : 'Anonym'
  const amountIsSmall = (cents >= 100000) || (cents % 100 > 0)

  const image = "https://betterplace-assets.betterplace.org/assets/default/donation_profile_picture/fill_100x100_default-2f969919aad3a0d51372c1474e73e452ea00947cb78d944c81aa1891b590b31e.png"

  return <div className='col-md-24'>
    <div className="generic-opinion media">
      <div className="opinion-avatar-and-amount media-left">
        <img className="user-avatar round-image" src={image} alt={`Avatar ${donor}`} width="50" />
        {cents && <div className={`amount ${amountIsSmall ? 'is-small' : ''}`}>{formatCents(cents, new URLSearchParams())}</div>}
      </div>
      <div className="opinion-body media-body">
        <div className="headline">
          <strong dangerouslySetInnerHTML={{__html: donor}} /> hat gespendet
          <br />
          <small><TimeAgo datetime={props.created_at} locale={'de'} /></small>
        </div>
        {props.message && <div className='message' dangerouslySetInnerHTML={{__html: props.message}} />}
      </div>
    </div>
  </div>
}
