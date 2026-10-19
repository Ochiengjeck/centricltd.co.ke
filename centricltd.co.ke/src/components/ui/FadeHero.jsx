import { useEffect, useRef, useState } from 'react'

/**
 * Fades its content out as the user scrolls it toward/past the top of the
 * viewport — opacity tracks scroll position directly (no CSS transition),
 * since a scroll-scrubbed effect needs to stay in lockstep with the scroll,
 * not ease toward it a beat later. No-ops under prefers-reduced-motion.
 */
export function FadeHero({ as: Tag = 'section', className = '', children, ...props }) {
  const ref = useRef(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const node = ref.current
    if (!node) return

    let frame = null

    function update() {
      frame = null
      const rect = node.getBoundingClientRect()
      const fadeDistance = rect.height * 0.7 || 1
      const scrolledPast = Math.min(Math.max(-rect.top, 0), fadeDistance)
      setOpacity(1 - scrolledPast / fadeDistance)
    }

    function onScroll() {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <Tag ref={ref} style={{ opacity }} className={className} {...props}>
      {children}
    </Tag>
  )
}
