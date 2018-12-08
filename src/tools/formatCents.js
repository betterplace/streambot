export function formatCents(cents) {
  if (cents) {
    const fraction = (cents % 10 === 0) ? 0 : 2
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction,
    }).format(cents / 100)
  } else {
    return 'Spende'
  }
}
