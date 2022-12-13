export const truncate = (string: string, length: number) => {
  if (length && string.length > length) return string.slice(0, length - 1) + '…'
  return string
}
