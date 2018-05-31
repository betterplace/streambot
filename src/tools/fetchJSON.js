export function fetchJSON(url, success) {
  fetch(url)
    .then(response => response.json())
    .then(json     => success(json))
    .then(undefined, err => console.log(err))
}
