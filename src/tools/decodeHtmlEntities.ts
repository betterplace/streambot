export function decodeHtmlEntities(inp: any) {
  var replacements = {
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
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    inp = inp.replace(new RegExp(r, 'g'), replacements[r])
  }
  return inp.replace(/&#(\d+);/g, function (match: any, dec: any) {
    return String.fromCharCode(dec)
  });
}
