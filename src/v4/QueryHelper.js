export class QueryHelper {
  static parseQuery() {
    var query = {}
    for (let queryPart of window.location.search.substr(1).split('&')) {
      let [key, value] = queryPart.split('=')
      query[key] = value
    }
    return query
  }

  static toQuery(object) {
    return '?' + Object.keys(object).map(k => {
      return object[k] ? (k + '=' + object[k]) : null
    }).filter(e => e).join('&')
  }
}
