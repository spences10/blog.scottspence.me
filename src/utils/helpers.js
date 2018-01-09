export const slugIt = str => {
  return str.replace(/['’]/g, '').replace(/[^a-z0-9]+/gi, '-')
}
