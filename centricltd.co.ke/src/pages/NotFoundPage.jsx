import { Helmet } from 'react-helmet-async'
import { Container } from '../components/ui/Container.jsx'
import { Button } from '../components/ui/Button.jsx'

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Centric Limited</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Container className="flex flex-col items-center gap-6 py-24 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">404</p>
        <h1 className="text-3xl font-bold sm:text-4xl">We couldn't find that page</h1>
        <p className="max-w-md text-muted-foreground">
          The page you're looking for may have moved or no longer exists. Let's get you back on track.
        </p>
        <Button to="/">Back to Home</Button>
      </Container>
    </>
  )
}
