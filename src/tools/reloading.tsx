import React from 'react'

const apiUrl = 'https://api.betterplace.org'
// const apiUrl = 'https://api.bp42.com'

const resolveToApiUrl = (match: any, counter: number, perPage: number, since = '', hashtags = null) => {
  switch (match.path) {
    case '/fundraising-events/:id/progress':
    case '/fundraising-events/:id/total':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}`
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/donation-alert':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=${perPage}&page=${counter}`
    case '/fundraising-events/:id/top-donation':
      return `${apiUrl}/api_v4/fundraising_events/${
        match.params.id
      }/opinions?order=amount_in_cents:desc&per_page=${perPage}&page=${counter}${since ? `&facets=since:${since}` : ''}`
    case '/fundraising-events/:id/top-donor':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/sum_donations?per_page=${perPage}&page=${counter}`
    case '/fundraising-events/:id/last-comment':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/opinions?order=id:desc&per_page=${perPage}&page=${counter}&facets=has_message:true`
    case '/fundraising-events/:id/hashtags':
      return `${apiUrl}/api_v4/fundraising_events/${match.params.id}/hashtag_counts/${hashtags}`
    default:
      return null
  }
}

const demoData = (match: any, counter: number, perPage: number) => {
  switch (match.path) {
    case '/fundraising-events/:id/progress':
    case '/fundraising-events/:id/total':
      return {
        donated_amount_in_cents: 1337,
        requested_amount_in_cents: 4200,
        progress_percentage: 31,
      }
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/donation-alert':
    case '/fundraising-events/:id/top-donation':
    case '/fundraising-events/:id/top-donor':
    case '/fundraising-events/:id/last-comment':
      const demoComments = [
        {
          id: 1,
          donated_amount_in_cents: 1337,
          author: { name: 'Unicorn&lt;3' },
          message: 'Voll l33t dein Stream &amp; deine Show!',
        },
        {
          id: 2,
          donated_amount_in_cents: 1200,
          author: { name: 'Peter' },
          message: 'Super Stream!',
        },
        {
          id: 3,
          donated_amount_in_cents: 900,
          author: { name: 'Anna' },
          message: 'Mega!',
        },
        {
          id: 4,
          donated_amount_in_cents: 500,
          author: { name: 'Patrick' },
          message: 'Richtig gut!',
        },
        {
          id: 5,
          donated_amount_in_cents: 400,
          author: { name: 'Larissa' },
          message: 'Finde die Aktion super!',
        },
      ]

      return { data: demoComments.slice(counter - 1, counter - 1 + perPage) }
    case '/fundraising-events/:id/hashtags':
      return { Wahrheit: 21, Pflicht: 26, Egal: 3 }
    default:
      return null
  }
}

const fallbackData = (match: any) => {
  switch (match.path) {
    case '/fundraising-events/:id/last-donation':
    case '/fundraising-events/:id/top-donation':
    case '/fundraising-events/:id/top-donor':
    case '/fundraising-events/:id/last-comment':
      return { author: { name: '-' } }
    default:
      return null
  }
}

export function reloading(WrappedComponent: any) {
  return class extends React.Component {
    interval: any;
    props: any;
    setState: any;
    state: any;
    constructor(props: any) {
      super(props)
      const params = new URLSearchParams(this.props.location.search)
      this.state = {
        params,
        data: null,
        listData: [],
        counter: 1,
        demo: params.get('demo'),
        maxCount: params.get('maxCount') ? parseInt(params.get('maxCount') as string, 10) : 1,
        interval: params.get('interval') ? parseInt(params.get('interval') as string, 10) : 3,
        listMode: params.get('list') === 'true',
        since: params.get('since'),
        hashtags: params.get('hashtags'),
      }
    }

    componentDidMount() {
      this.reloadData()
      this.interval = setInterval(() => this.reloadData(), this.state.interval * 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    reloadData = () => {
      const counter = this.state.listMode ? 1 : this.state.counter
      const perPage = this.state.listMode ? this.state.maxCount : 1
      const nextCounter = counter < this.state.maxCount ? counter + 1 : 1
      const url = resolveToApiUrl(this.props.match, counter, perPage, this.state.since, this.state.hashtags)

      this.setState({ counter: nextCounter }, () => {
        // If demo data is requested do not query the API
        if (this.state.demo) {
          console.log(`Demo Mode: API Request would have been: "${url}".`)
          return this.storeData(demoData(this.props.match, counter, perPage))
        }
        if (url) {
          fetch(url)
            .then((response) => response.json())
            .then((json) => this.storeData(json))
            .then(undefined, (err) => console.log(err))
        }
      })
    }

    // From a list response, take the first entry, otherwise store the whole response.
    // This way it's always exactly one object from the API that is stored into
    // `props.data` - could be a fundraising event or a opinion or whatever.
    // store a list of data into listData as well.
    storeData = (responseJson: any) => {
      let data, listData
      if (Array.isArray(responseJson.data)) {
        data = responseJson.data[0]
        listData = responseJson.data
      } else {
        data = responseJson
        listData = [responseJson]
      }
      this.setState({ data, listData })
    }

    render() {
      let { data, listData, params } = this.state

      if (!data) {
        data = fallbackData(this.props.match)
        listData = [data]
      }

      if (!data) {
        return null
      }

      return (
        <React.Fragment>
          <WrappedComponent params={params} data={data} listData={listData} {...this.props} />
        </React.Fragment>
      )
    }
  };
}
