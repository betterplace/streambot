import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import {decodeHtmlEntities, formatCents, styled, reloading} from './tools'
import {ProjectCarrierLogos, DonationAlert, Author} from './components'

const Progress = (props) => {
  return <div>
    {formatCents(props.data.donated_amount_in_cents)} von {formatCents(props.data.requested_amount_in_cents)} gesammelt.
    <div className='progressbar'><span style={{width: `${Math.round(props.data.progress_percentage)}%`}}></span></div>
  </div>
}

const Total = (props) => {
  const headline = props.params.get('headline') || 'Spendenstand'
  return <div>
    <HeadlineWithBr content={headline} />
    {formatCents(props.data.donated_amount_in_cents)}
  </div>
}

const LastDonation = (props) => {
  const headline = props.params.get('headline') || 'Letzte Spende'
  return <div>
    <HeadlineWithBr content={headline} />
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}

const TopDonation = (props) => {
  const headline = props.params.get('headline') || 'Top-Spende'
  return <div>
    <HeadlineWithBr content={headline} />
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}

const LastComment = (props) => {
  const message = decodeHtmlEntities(sanitizeHtml(props.data.message, { allowedTags: [] }))
  return <div>
    <div className='message'>{message}</div>
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}

const HeadlineWithBr = ({content, visible}) => {
  if (!content || 0 === content.length || content === 'false') return null
  return <React.Fragment>{content}<br/></React.Fragment>
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => window.location = "https://github.com/betterplace/streambot" }/>
      <Route path="/fundraising-events/:id/progress"       component={styled(reloading(Progress))} />
      <Route path="/fundraising-events/:id/last-donation"  component={styled(reloading(LastDonation))} />
      <Route path="/fundraising-events/:id/top-donation"   component={styled(reloading(TopDonation))} />
      <Route path="/fundraising-events/:id/total"          component={styled(reloading(Total))} />
      <Route path="/fundraising-events/:id/last-comment"   component={styled(reloading(LastComment))} />
      <Route path="/fundraising-events/:id/donation-alert" component={styled(reloading(DonationAlert))} />
      <Route path="/fundraising-events/:id/project-logos"  component={styled(ProjectCarrierLogos)} />
    </div>
  </Router>
)
export default App
