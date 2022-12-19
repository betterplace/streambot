export function decodeHtmlEntities(inp: string) {
  const replacements: { [key: string]: string } = {
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
  for (const r in replacements) {
    inp = inp.replace(new RegExp(r, 'g'), replacements[r])
  }
  return inp.replace(/&#(\d+);/g, function (match: string, dec: number) {
    return String.fromCharCode(dec)
  })
}
