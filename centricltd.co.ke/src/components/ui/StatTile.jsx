import { Reveal } from './Reveal.jsx'

export function StatTile({ value, label }) {
  return (
    <Reveal className="rounded-xl border border-border bg-card p-6 text-center">
      <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </Reveal>
  )
}
