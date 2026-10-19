import { Quote } from 'lucide-react'
import { Reveal } from './Reveal.jsx'

export function TestimonialCard({ quote, author, role, photo }) {
  return (
    <Reveal as="figure" className="rounded-xl border border-border bg-card p-8">
      <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
      <blockquote className="mt-4 text-lg text-foreground">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {photo && (
          <img src={photo} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        )}
        <div>
          <p className="font-heading font-semibold text-foreground">{author}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </figcaption>
    </Reveal>
  )
}
