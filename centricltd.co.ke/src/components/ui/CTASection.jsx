import { Container } from './Container.jsx'
import { Button } from './Button.jsx'
import { Reveal } from './Reveal.jsx'

export function CTASection({ title, description, ctaLabel = 'Contact Us', ctaTo = '/contact-us/' }) {
  return (
    <Reveal as="section" className="bg-primary py-16 text-on-primary">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description && <p className="max-w-2xl text-slate-300">{description}</p>}
        <Button to={ctaTo} variant="primary">
          {ctaLabel}
        </Button>
      </Container>
    </Reveal>
  )
}
