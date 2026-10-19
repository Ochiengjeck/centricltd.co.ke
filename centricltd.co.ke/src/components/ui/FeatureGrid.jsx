export function FeatureGrid({ items, columns = 3 }) {
  const colsClass = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <ul className={`grid grid-cols-1 gap-6 ${colsClass}`}>
      {items.map((item) => (
        <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground">
          {item}
        </li>
      ))}
    </ul>
  )
}
