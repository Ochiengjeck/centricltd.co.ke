import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { buildContactMailto } from '../../lib/mailto.js'
import { siteMeta } from '../../data/siteMeta.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = { name: '', email: '', topic: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const errors = validate(values)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleBlur(event) {
    setTouched((prev) => ({ ...prev, [event.target.name]: true }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTouched({ name: true, email: true, topic: true, message: true })

    if (Object.keys(errors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('opening')
    const href = buildContactMailto(siteMeta.emails.sales, values)
    window.location.href = href
    window.setTimeout(() => setStatus('opened'), 400)
  }

  const fieldClass =
    'w-full rounded-md border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-accent'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.name && errors.name)}
          aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
          className={fieldClass}
        />
        {touched.name && errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          className={fieldClass}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-foreground">
          How Can We Help?
        </label>
        <input
          id="topic"
          name="topic"
          type="text"
          value={values.topic}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. SAP S/4HANA, Cloud Services, Banking Systems"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
          className={fieldClass}
        />
        {touched.message && errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'opening'}>
          <Send className="h-4 w-4" aria-hidden="true" />
          {status === 'opening' ? 'Opening your email app…' : 'Send Message'}
        </Button>
        <p className="text-sm text-muted-foreground" role="status">
          {status === 'opened'
            ? `Your email app should now have a message ready to send to ${siteMeta.emails.sales}.`
            : status === 'error'
              ? 'Please fix the highlighted fields.'
              : 'This opens your email app with the message pre-filled — no data is sent from this page.'}
        </p>
      </div>
    </form>
  )
}
