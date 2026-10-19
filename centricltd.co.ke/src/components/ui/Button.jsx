import { Link } from 'react-router'

const variants = {
  // hover:opacity-90 (not a hardcoded hover color) because --color-accent and
  // --color-on-accent both change value in dark mode — a fixed palette hover
  // color would stop matching whichever one is active and tank contrast.
  primary: 'bg-accent text-on-accent hover:opacity-90',
  secondary: 'bg-primary text-on-primary hover:bg-slate-800',
  // border-primary/text-primary assume a light page behind them, so dark mode
  // swaps them for the theme-adaptive foreground token instead.
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary dark:border-foreground dark:text-foreground',
}

export function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 font-heading text-sm font-semibold transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
