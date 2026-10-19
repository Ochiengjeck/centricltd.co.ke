import { Link } from 'react-router'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { LinkedInIcon, TwitterIcon, FacebookIcon } from '../ui/SocialIcons.jsx'
import { footerColumns } from '../../data/nav.js'
import { siteMeta } from '../../data/siteMeta.js'
import { footerLogo } from '../../data/brand.js'

const socialIcons = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-slate-200">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          {/* The source logo file has dark navy text — no separate white
              variant exists, so it's forced to solid white here for contrast
              against this section's dark background. */}
          <img src={footerLogo} alt={siteMeta.name} className="h-9 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-sm text-slate-400">{siteMeta.description}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {siteMeta.address.line1}, {siteMeta.address.city}
                <br />
                {siteMeta.address.poBox}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={siteMeta.phoneHref} className="hover:text-white">
                {siteMeta.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteMeta.emails.info}`} className="hover:text-white">
                {siteMeta.emails.info}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteMeta.hours}</span>
            </li>
          </ul>
          <ul className="mt-6 flex gap-3">
            {Object.entries(siteMeta.social).map(([key, url]) => {
              const Icon = socialIcons[key]
              if (!Icon) return null
              return (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Centric Limited on ${key}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 hover:border-white hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} {siteMeta.name}. All rights reserved.
          </p>
          <Link to="/privacy-policy/" className="hover:text-white">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  )
}
