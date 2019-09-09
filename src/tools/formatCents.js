export function formatCents(cents, fallback = 'hidden amount') {
  if (cents === undefined) return fallback
  const fraction = (cents % 100 === 0) ? 0 : 2
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  }).format(cents / 100)
}
