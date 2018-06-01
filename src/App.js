import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import {decodeHtmlEntities, formatCents, styled, reloading} from './tools'

const Progress = (props) => {
  return <div>
    {formatCents(props.data.donated_amount_in_cents)} von {formatCents(props.data.requested_amount_in_cents)} gesammelt.
    <div className='progressbar'><span style={{width: `${Math.round(props.data.progress_percentage)}%`}}></span></div>
  </div>
}

const LastDonation = (props) => {
  return <div>
    Letzte Spende
    <br />
    {formatCents(props.data.donated_amount_in_cents)} von <Author {...props.data.author} />
  </div>
}

const TopDonation = (props) => {
  return <div>
    Top-Spende
    <br />
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

const Author = ({name}) => { return (name ? name : 'Anonym') }

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => window.location = "https://github.com/betterplace/streambot" }/>
      <Route path="/fundraising-events/:id/progress" component={reloading(styled(Progress))} />
      <Route path="/fundraising-events/:id/last-donation" component={reloading(styled(LastDonation))} />
      <Route path="/fundraising-events/:id/top-donation" component={reloading(styled(TopDonation))} />
      <Route path="/fundraising-events/:id/last-comment" component={reloading(styled(LastComment))} />
    </div>
  </Router>
)
export default App
