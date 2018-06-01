export function formatCents(cents) {
  if (cents) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cents / 100)
  } else {
    return 'Spende'
  }
}
