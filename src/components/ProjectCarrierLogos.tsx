import React from 'react'
import betterplaceLogo from '../images/betterplace-logo.png'
import betterplayLogo from '../images/betterplay-logo.png'
import { WidgetProps } from './types'

type ProjectCarrierLogosState = {
  logos: string[]
  apiUrl: string
  currentIndex: number
  duration: number
}
export class ProjectCarrierLogos extends React.Component<WidgetProps, ProjectCarrierLogosState> {
  interval: any
  logoInterval: any
  constructor(props: any) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    this.state = {
      logos: [],
      apiUrl: `https://api.betterplace.org/api_v4/fundraising_events/${props.match.params.id}/featured_projects`,
      currentIndex: 0,
      duration: parseInt(params.get('duration') || '') || 5,
    }
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then((response) => response.json())
      .then((json) => this.collectProjectLogos(json.data))
      .then(this.startInterval)
      .then(undefined, (err) => console.log(err))
  }

  componentWillUnmount() {
    clearInterval(this.logoInterval)
  }

  collectProjectLogos = (projects: any[]) => {
    let projectImages = [betterplaceLogo, betterplayLogo]
    projects.forEach((project: any) => {
      if (!project.carrier.picture.links[0].href.includes('/assets/default')) {
        projectImages.push(project.carrier.picture.links[0].href)
      }
    })
    projectImages = projectImages.filter((v, i, a) => a.indexOf(v) === i)
    projectImages = projectImages.map((url) => url.replace('100x100', '400x400'))
    this.setState({ logos: projectImages })
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
    return <img src={this.currentLogoUrl} style={{ width: '100vmin' }} alt="" />
  }
}
