export function buildMailto(to, { subject = '', body = '' } = {}) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return query ? `mailto:${to}?${query}` : `mailto:${to}`
}

export function buildContactMailto(to, { name, email, topic, message }) {
  const subject = topic ? `Website enquiry: ${topic}` : 'Website enquiry'
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    topic ? `How can we help: ${topic}` : null,
    '',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')
  return buildMailto(to, { subject, body })
}
