import React from 'react'
import {
  Betterplay,
  DonationAlert,
  DonationList,
  Hashtags,
  LastComment,
  LastDonation,
  Mashup,
  Progress,
  ProjectCarrierLogos,
  Standard,
  TopDonation,
  TopDonor,
  Total,
  Waterstreams,
  Xmas,
} from './components'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { reloading, styled } from './tools'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => (window.location.href = 'https://github.com/betterplace/streambot')} />
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
    </div>
  </Router>
)
export default App
