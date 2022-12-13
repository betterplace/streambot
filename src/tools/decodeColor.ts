export const decodeColor = (string) => {
  if (!string) return null
  let m = string.match(/^([a-f\d]{3}|[a-f\d]{6})$/i)
  if (m && m[1]) {
    return `#${m[1]}`
  }
  m = string.match(/^[a-z]+$/i)
  if (m) {
    return string
  }
  return null
}
