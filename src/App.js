import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {v4Query} from './v4/v4Query'
import {reloading} from './tools/reloading'
import {styled} from './tools/styled'
import {formatCents} from './tools/formatCents'

const Progress = (props) => {
  return <div>
    {formatCents(props.data.donated_amount_in_cents)} von {formatCents(props.data.requested_amount_in_cents)} gesammelt.
    <div className='progressbar' style={{marginTop: '0.6rem'}}><span style={{width: `${Math.round(props.data.progress_percentage)}%`}}></span></div>
  </div>
}

const App = () => (
  <Router>
    <Route path="/fundraising-events/:id/progress" component={reloading(styled(Progress))} />
  </Router>
)
export default App
