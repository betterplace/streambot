export const truncate = (string: any, length: any) => {
  if (length && string.length > length) return string.slice(0, length - 1) + '…'
  return string
}
