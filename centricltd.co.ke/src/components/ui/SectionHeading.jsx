import { Reveal } from './Reveal.jsx'

export function SectionHeading({ eyebrow, title, description, align = 'left', as: Tag = 'h2' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <Tag className="text-2xl font-semibold sm:text-3xl">{title}</Tag>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </Reveal>
  )
}
