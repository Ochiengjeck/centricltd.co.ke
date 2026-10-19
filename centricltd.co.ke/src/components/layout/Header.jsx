import { Link, NavLink } from 'react-router'
import { Menu, ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Button } from '../ui/Button.jsx'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'
import { mainNav } from '../../data/nav.js'
import { siteMeta } from '../../data/siteMeta.js'
import { headerLogo } from '../../data/brand.js'

// <details> only closes natively on its own <summary> click — clicking a Link
// inside it doesn't, and this is an SPA where Header never unmounts between
// routes, so the dropdown/mobile menu would otherwise stay open after navigating.
// Removing `open` hides the panel instantly, so we fade/slide it out first and
// only remove `open` once that's finished — by then it's already invisible.
function closeDetails(event) {
  const details = event.currentTarget.closest('details')
  const panel = details?.querySelector('[data-nav-panel]')
  if (!details || !panel) {
    details?.removeAttribute('open')
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = reduceMotion ? 0 : 160
  panel.style.transition = `opacity ${duration}ms ease-in, transform ${duration}ms ease-in`
  panel.style.opacity = '0'
  panel.style.transform = 'translateY(-4px) scale(0.98)'
  window.setTimeout(() => details.removeAttribute('open'), duration)
}

// Clears the inline styles closeDetails left behind so the panel reopens at
// full opacity instead of fading in from invisible.
function handleToggle(event) {
  if (!event.currentTarget.open) return
  const panel = event.currentTarget.querySelector('[data-nav-panel]')
  if (panel) {
    panel.style.transition = ''
    panel.style.opacity = ''
    panel.style.transform = ''
  }
}

const navLinkClass =
  "relative flex min-h-11 items-center px-3 font-heading text-sm font-medium tracking-wide text-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-200 after:content-['']"

function NavItem({ item }) {
  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `${navLinkClass} ${
            isActive ? 'text-accent after:scale-x-100' : 'after:scale-x-0 hover:text-accent hover:after:scale-x-100'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <details className="group relative" onToggle={handleToggle}>
      <summary
        className={`${navLinkClass} after:scale-x-0 cursor-pointer list-none gap-1 hover:text-accent hover:after:scale-x-100 [&::-webkit-details-marker]:hidden`}
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <ul
        data-nav-panel
        className="absolute left-0 top-full z-20 mt-2 w-64 rounded-xl border border-border/60 bg-card p-2 shadow-xl"
      >
        <li>
          <Link
            to={item.to}
            onClick={closeDetails}
            className="block rounded-lg px-3 py-2 font-heading text-sm font-semibold text-accent hover:bg-muted"
          >
            Overview
          </Link>
        </li>
        <li aria-hidden="true" className="my-1 border-t border-border/60" />
        {item.children.map((child) => (
          <li key={child.to}>
            <Link
              to={child.to}
              onClick={closeDetails}
              className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-card/80 shadow-sm backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <img src={headerLogo} alt={siteMeta.name} className="h-9 w-auto dark:brightness-0 dark:invert" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {mainNav.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button to="/contact-us/" className="shadow-md shadow-accent/30">
            Contact Us
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <details onToggle={handleToggle}>
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:border-accent/40 hover:bg-muted [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </summary>
            <nav
              aria-label="Primary"
              data-nav-panel
              className="absolute inset-x-0 top-20 border-t border-border/60 bg-card/95 p-4 shadow-xl backdrop-blur-md"
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={closeDetails}
                      className="block min-h-11 rounded-md px-3 py-2 font-heading font-medium tracking-wide text-foreground hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 border-l border-border/60 pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              onClick={closeDetails}
                              className="block min-h-11 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  )
}
