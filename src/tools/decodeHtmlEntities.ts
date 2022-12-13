export function decodeHtmlEntities(inp: any) {
  var replacements: { [key: string]: string } = {
    '&lt;': '<',
    '&gt;': '>',
    '&sol;': '/',
    '&quot;': '"',
    '&apos;': "'",
    '&amp;': '&',
    '&laquo;': '«',
    '&raquo;': '»',
    '&nbsp;': ' ',
    '&copy;': '©',
    '&reg;': '®',
    '&deg;': '°',
  }
  for (var r in replacements) {
    inp = inp.replace(new RegExp(r, 'g'), replacements[r])
  }
  return inp.replace(/&#(\d+);/g, function (match: any, dec: any) {
    return String.fromCharCode(dec)
  })
}
