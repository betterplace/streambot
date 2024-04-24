export function formatCents(cents: number, params: URLSearchParams) {
  if (!cents) return null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currencyDisplay = (params.get('currencyDisplay') || 'symbol') as any
  const currencyPrecision = params.get('currencyPrecision')
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      parseInt(params.get('currencyPrecision')!)
    : cents % 100 === 0
    ? 0
    : 2

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay,
    minimumFractionDigits: currencyPrecision,
    maximumFractionDigits: currencyPrecision,
  }).format(cents / 100)
}
