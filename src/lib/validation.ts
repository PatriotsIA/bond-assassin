export function isPlausibleEmail(value: string) {
  const email = value.trim()
  if (!email) return false
  if (email.length > 254) return false
  if (/\s/.test(email)) return false

  const at = email.indexOf('@')
  if (at <= 0) return false
  if (at !== email.lastIndexOf('@')) return false
  if (at >= email.length - 1) return false

  return true
}

