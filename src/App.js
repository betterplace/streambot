import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'
import {decodeHtmlEntities, formatCents, styled, reloading} from './tools'
import betterplaceLogo from './images/betterplace-logo.png'
import betterplayLogo from './images/betterplay-logo.png'

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

class ProjectCarrierLogos extends React.Component {

  constructor(props) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    this.state = {
      logos:         [],
      apiUrl:        `https://api.betterplace.org/api_v4/fundraising_events/${props.match.params.id}/featured_projects`,
      currentIndex:  0,
      duration:      params.get('duration') || 5,
    }
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then(response => response.json())
      .then(json     => this.collectProjectLogos(json.data))
      .then(this.startInterval)
      .then(undefined, err => console.log(err))
  }

  componentWillUnmount() {
     clearInterval(this.logoInterval);
  }

  collectProjectLogos = (projects) => {
    let projectImages = [betterplaceLogo, betterplayLogo]
    projects.filter((e) => {
      if (!e.carrier.picture.links[0].href.includes('/assets/default')) {
        return projectImages.push(e.carrier.picture.links[0].href)
      }
    })
    projectImages = projectImages.filter((v, i, a) => a.indexOf(v) === i)
    this.setState({logos: projectImages})
  }

  startInterval = () => {
    this.interval = window.setInterval(this.incrementIndex, this.state.duration * 1000)
  }

  incrementIndex = () => {
    let nextIndex = this.state.currentIndex + 1
    if (nextIndex >= this.state.logos.length) nextIndex = 0
    this.setState({ currentIndex: nextIndex })
  }

  get currentLogoUrl() {
    return this.state.logos[this.state.currentIndex]
  }

  render() {
    if (!this.currentLogoUrl) return null
    return <img src={this.currentLogoUrl} width='100' height='100'/>
  }
}

class DonationAlert extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    this.state = {
      hidden:    true,
      gif:       params.get('gif'),
      gifHeight: params.get('gifHeight') || 'inherit',
      mp3:       params.get('mp3'),
      duration:  params.get('duration') || 3,
      wording:   params.get('wording') || 'Neue Spende'
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.id !== prevProps.data.id) {
      this.setState({hidden: false})
      if (this.timeout) clearInterval(this.timeout)
      this.timeout = window.setTimeout(() => this.setState({hidden: true}), this.state.duration * 1000)
    }
  }

  render() {
    if (this.state.hidden) return null
    return <div>
      <Gif src={this.state.gif} height={this.state.gifHeight} />
      <Mp3 src={this.state.mp3} />
      <br />
      {this.state.wording}
      <br />
      {formatCents(this.props.data.donated_amount_in_cents)} von <Author {...this.props.data.author} />
    </div>
  }
}

const Author = ({name}) => { return (name ? name : 'Anonym') }

const Gif = ({src, height}) => {
  if (!src) return null
  return <img src={src} alt='' height={height} />
}

const Mp3 = ({src}) => {
  if (!src) return null
  return <audio autoPlay><source src={src} type="audio/mpeg" /></audio>
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => window.location = "https://github.com/betterplace/streambot" }/>
      <Route path="/fundraising-events/:id/progress"       component={styled(reloading(Progress))} />
      <Route path="/fundraising-events/:id/last-donation"  component={styled(reloading(LastDonation))} />
      <Route path="/fundraising-events/:id/top-donation"   component={styled(reloading(TopDonation))} />
      <Route path="/fundraising-events/:id/last-comment"   component={styled(reloading(LastComment))} />
      <Route path="/fundraising-events/:id/donation-alert" component={styled(reloading(DonationAlert))} />
      <Route path="/fundraising-events/:id/project-logos"  component={styled(ProjectCarrierLogos)} />
    </div>
  </Router>
)
export default App
