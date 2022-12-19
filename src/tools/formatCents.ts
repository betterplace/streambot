export function formatCents(cents: number, params: URLSearchParams) {
  if (!cents) return null

  const currencyDisplay = params.get('currencyDisplay') || 'symbol'
  const currencyPrecision = parseInt(params.get('currencyPrecision') || '') || (cents % 100 === 0 ? 0 : 2)

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: currencyDisplay,
    minimumFractionDigits: currencyPrecision,
    maximumFractionDigits: currencyPrecision,
  }).format(cents / 100)
}
