// Returns the absolute URL to the file
export default (file) => {
  const host = window.location.hostname
  const protocol = window.location.protocol
  const port = window.location.port

  return `${protocol}//${host}:${port}/${file}`
}
