// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { styled, reloading } from './tools'
import {
  Standard,
  Betterplay,
  Waterstreams,
  Mashup,
  Xmas,
  DonationAlert,
  Hashtags,
  LastComment,
  LastDonation,
  Progress,
  ProjectCarrierLogos,
  TopDonation,
  TopDonor,
  Total,
  DonationList,
} from './components'

const App = () => (
  <Router>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(2322): Type 'string' is not assignable to type '(string |... Remove this comment to see the full error message
      <Route exact path="/" render={() => (window.location = 'https://github.com/betterplace/streambot')} />
      <Route path="/fundraising-events/:id/standard" component={Standard} />
      <Route path="/fundraising-events/:id/betterplay" component={Betterplay} />
      <Route path="/fundraising-events/:id/waterstreams" component={Waterstreams} />
      <Route path="/fundraising-events/:id/mashup" component={Mashup} />
      <Route path="/fundraising-events/:id/xmas" component={Xmas} />
      <Route path="/fundraising-events/:id/progress" component={styled(reloading(Progress))} />
      <Route path="/fundraising-events/:id/hashtags" component={styled(reloading(Hashtags))} />
      <Route path="/fundraising-events/:id/last-donation" component={styled(reloading(LastDonation))} />
      <Route path="/fundraising-events/:id/top-donation" component={styled(reloading(TopDonation))} />
      <Route path="/fundraising-events/:id/top-donor" component={styled(reloading(TopDonor))} />
      <Route path="/fundraising-events/:id/total" component={styled(reloading(Total))} />
      <Route path="/fundraising-events/:id/last-comment" component={styled(reloading(LastComment))} />
      <Route path="/fundraising-events/:id/donation-alert" component={styled(reloading(DonationAlert))} />
      <Route path="/fundraising-events/:id/project-logos" component={styled(ProjectCarrierLogos)} />
      <Route path="/fundraising-events/:id/donation-list" component={DonationList} />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  </Router>
)
export default App
