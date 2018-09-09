export const truncate = (string, length) => {
  if (length && string.length > length) return string.slice(0, length) + '…'
  return string
}
