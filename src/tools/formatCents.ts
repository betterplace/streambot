export function formatCents(cents: number, params: any) {
  if (!cents) return null

  const currencyDisplay = params.get('currencyDisplay') || 'symbol'
  let currencyPrecision = params.get('currencyPrecision')
  currencyPrecision = currencyPrecision === null ? (cents % 100 === 0 ? 0 : 2) : currencyPrecision

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: currencyDisplay,
    minimumFractionDigits: currencyPrecision,
    maximumFractionDigits: currencyPrecision,
  }).format(cents / 100)
}
