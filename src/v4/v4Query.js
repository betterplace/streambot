import entries from 'core-js/fn/object/entries'
import merge from 'webpack-merge'
import {QueryHelper} from './QueryHelper'

export class v4Query {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.query   = {}
    this.filters = []
    this.orders  = []
  }

  addBounds(bounds) {
    if (bounds)
      this.query = merge(this.query, {
        nelat: bounds.north,
        nelng: bounds.cappedEast,
        swlat: bounds.south,
        swlng: bounds.cappedWest,
      })
    return this
  }

  page(value) {
    this.query.page = value
    return this
  }

  per(value) {
    this.query.per_page = value
    return this
  }

  order(value) {
    this.orders = this.toKeyValueParam(value)
    return this
  }

  filter(value) {
    this.filters = this.filters.concat(this.toKeyValueParam(value))
    return this
  }

  withDefaultFilter() {
    return this.filter({
      state: 'activated',
      min_activity_threshold_reached: true,
      hidden_from_platform: false
    })
  }

  search(value) {
    if (value)
      this.query.q = value
    return this
  }

  toUrl() {
    this.query.facets = this.toArrayParam(this.filters)
    this.query.order  = this.toArrayParam(this.orders)
    return this.baseUrl + QueryHelper.toQuery(this.query)
  }

  toKeyValueParam(obj) {
    return entries(obj).map(part => { return part.join(':') })
  }

  toArrayParam(obj) {
    return obj.join('|')
  }
}
