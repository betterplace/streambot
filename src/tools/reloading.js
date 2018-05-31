import React from 'react'
import {fetchJSON} from './fetchJSON'

const resolveToApiUrl = (match) => {
  return `https://api.betterplace.org/api_v4/fundraising_events/${match.params.id}`
  // '/fundraising-events/:id/progress': () => {
  //   console.log(this)
  //   return 'sdf'
  // }
}

export function reloading(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null }
    }

    componentDidMount() {
      this.reloadData()
      this.interval = setInterval(() => this.reloadData(), 10000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    reloadData = () => {
      const url = resolveToApiUrl(this.props.match)
      fetchJSON(url, (data) => { this.setState({data}) })
    }

    render() {
      if (!this.state.data) { return null }

      return <React.Fragment>
        {/* <StylesFromParams params={new URLSearchParams(this.props.location.search)} /> */}
        <WrappedComponent data={this.state.data} {...this.props} />
      </React.Fragment>
    }
  }
}
