export const excerpt = (string, length = 250) => {
  if (string.length > length) {
    return `${string.substring(0, length)}...`
  } else {
    return string
  }
}
