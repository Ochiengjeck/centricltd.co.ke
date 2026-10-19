import { Reveal } from './Reveal.jsx'

export function LogoCloud({ clients }) {
  return (
    <Reveal as="ul" className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
      {clients.map((client) => (
        // The source logos are white/light marks on transparent backgrounds
        // (captured from a dark band on the live site) — a light card would
        // make them invisible, so each tile is dark instead.
        <li
          key={client.name}
          className="flex items-center justify-center rounded-lg bg-primary p-4 transition hover:bg-slate-800"
        >
          <img src={client.logo} alt={client.alt} loading="lazy" className="max-h-12 w-auto" />
        </li>
      ))}
    </Reveal>
  )
}
