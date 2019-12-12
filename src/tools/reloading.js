import React from 'react'

const apiUrl = 'https://api.betterplace.org'
// const apiUrl = 'https://api.bp42.com'

const resolveToApiUrl = (match, searchParams, counter) => {
  let list = searchParams.get('list')
  if (list) {
    counter = 1
  } else {
    list = 1
  }
  let since = searchParams.get('since') || ''
  if (since && since.length) {
    since = `&facets=since:${since}`
  }
  switch (match.path) {
    case '/fundraising-events/:id/progress':
    case '/fundraising-events/:id/total':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}`
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/donation-alert':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=${list}&page=${counter}`
    case '/fundraising-events/:id/top-donation':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=amount_in_cents:desc&per_page=${list}&page=${counter}${since}`
    case '/fundraising-events/:id/top-donor':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/sum_donations?per_page=${list}&page=${counter}`
    case '/fundraising-events/:id/last-comment':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=${list}&page=${counter}&facets=has_message:true`
    case '/fundraising-events/:id/hashtags':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/hashtag_counts/${searchParams.get('hashtags')}`
    default:
      return null
  }
}

const demoData = (match) => {
  switch (match.path) {
    case '/fundraising-events/:id/progress':
    case '/fundraising-events/:id/total':
      return { donated_amount_in_cents: 1337, requested_amount_in_cents: 4200, progress_percentage: 31, }
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/donation-alert':
    case '/fundraising-events/:id/top-donation':
    case '/fundraising-events/:id/top-donor':
    case '/fundraising-events/:id/last-comment':
      return { id: Math.round(Date.now() / 10000), donated_amount_in_cents: 1337, author: { name: 'Unicorn&lt;3' }, message: 'Voll l33t dein Stream &amp; deine Show!' }
    case '/fundraising-events/:id/hashtags':
      return { Wahrheit: 21, Pflicht: 26, Egal: 3 }
    default:
      return null
  }
}
const fallbackData = (match) => {
  switch (match.path) {
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/top-donation':
    case '/fundraising-events/:id/top-donor':
    case '/fundraising-events/:id/last-comment':
      return { author: { name: "-" } }
    default:
      return null
  }
}

export function reloading(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const params = new URLSearchParams(this.props.location.search)
      const demo = params.get('demo')
      const maxCount = parseInt(params.get('maxCount') || 1, 10)
      this.state = { data: null, listData: [], demo, params, counter: 1, maxCount }
    }

    componentDidMount() {
      const intervalSeconds = parseInt(this.state.params.get('interval'), 10) || 3
      this.reloadData()
      this.interval = setInterval(() => this.reloadData(), intervalSeconds * 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    reloadData = () => {
      const url = resolveToApiUrl(this.props.match, this.state.params, this.state.counter)
      const nextCounter = (this.state.counter >= this.state.maxCount) ? 1 : this.state.counter + 1

      this.setState({counter: nextCounter}, () => {
        // If demo data is requested do not query the API
        if (this.state.demo) {
          console.log(`Demo Mode: API Request would have been: "${url}".`)
          return this.storeData(demoData(this.props.match))
        }
        fetch(url)
          .then(response => response.json())
          .then(json     => this.storeData(json))
          .then(undefined, err => console.log(err))
      })
    }

    // From a list response, take the first entry, otherwise store the whole response.
    // This way it's always exactly one object from the API that is stored into
    // `props.data` - could be a fundraising event or a opinion or whatever.
    // store a list of data into listData as well.
    storeData = (response) => {
      let data, listData
      if (Array.isArray(response.data)) {
        data     = response.data[0]
        listData = response.data
      } else {
        data     = response
        listData = [ response ]
      }
      this.setState({ data, listData })
    }

    render() {
      let { data, listData, params } = this.state

      if (!data) {
        data     = fallbackData(this.props.match)
        listData = [ data ]
      }

      if (!data) { return null }

      return <React.Fragment>
        <WrappedComponent params={params} data={data} listData={listData} {...this.props} />
      </React.Fragment>
    }
  }
}
