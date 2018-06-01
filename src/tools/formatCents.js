export function formatCents(cents) {
  if (cents) {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(cents / 100)
  } else {
    return 'Spende'
  }
}
