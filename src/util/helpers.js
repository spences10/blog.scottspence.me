import { format, isValid } from 'date-fns'

export const formatDate = dateIn => {
  return format(dateIn, 'YYYY MMM Do')
}

export const excerpt = (string, length = 250) => {
  if (string.length > length) {
    return `${string.substring(0, length)}...`
  } else {
    return string
  }
}
