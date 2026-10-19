import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Plain <BrowserRouter> gives no scroll restoration on its own: without this,
 * navigating to a new page keeps whatever scroll position the last page was
 * left at. Scrolls to top on a normal navigation, or smoothly to the target
 * element when the URL carries a hash (e.g. footer links to /about-us/#clients).
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // scroll-behavior: auto in CSS doesn't stop an explicit JS `behavior: 'smooth'`
    // option, so reduced-motion is honored here explicitly rather than left to CSS.
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])

  return null
}
