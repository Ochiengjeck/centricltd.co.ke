import { Reveal } from './Reveal.jsx'

export function Card({ className = '', children }) {
  return (
    <Reveal className={`rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm ${className}`}>
      {children}
    </Reveal>
  )
}
