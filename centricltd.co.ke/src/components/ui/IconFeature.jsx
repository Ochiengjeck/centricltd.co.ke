import { Reveal } from './Reveal.jsx'

export function IconFeature({ icon: Icon, title, description }) {
  return (
    <Reveal className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-foreground">{title}</h3>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
    </Reveal>
  )
}
