import React from 'react'

const apiUrl = 'https://api.betterplace.org'

const resolveToApiUrl = (match) => {
  switch (match.path) {
    case '/fundraising-events/:id/progress':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}`
    case '/fundraising-events/:id/last-donation':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=1`
    case '/fundraising-events/:id/top-donation':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=amount_in_cents:desc&per_page=1`
    case '/fundraising-events/:id/last-comment':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=1&facets=has_message:true`
    default:
      return null
  }
}

export function reloading(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null }
    }

    componentDidMount() {
      const params = new URLSearchParams(this.props.location.search)
      const intervalSeconds = parseInt(params.get('interval') || 3, 0)
      this.reloadData()
      this.interval = setInterval(() => this.reloadData(), intervalSeconds * 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    reloadData = () => {
      const url = resolveToApiUrl(this.props.match)
      fetch(url)
        .then(response => response.json())
        .then(json     => this.storeData(json))
        .then(undefined, err => console.log(err))
    }

    // From a list response, take the first entry, otherwise store the whole response.
    // This way it's always exactly one object from the API that is stored into
    // `props.data` - could be a fundraising event or a opinion or whatever.
    storeData = (response) => {
      this.setState({ data: Array.isArray(response.data) ? response.data[0] : response })
    }

    render() {
      if (!this.state.data) { return null }

      return <React.Fragment>
        <WrappedComponent data={this.state.data} {...this.props} />
      </React.Fragment>
    }
  }
}
