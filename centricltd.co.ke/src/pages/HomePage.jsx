import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo.jsx'
import { Container } from '../components/ui/Container.jsx'
import { Button } from '../components/ui/Button.jsx'
import { FadeHero } from '../components/ui/FadeHero.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { Card } from '../components/ui/Card.jsx'
import { LogoCloud } from '../components/ui/LogoCloud.jsx'
import { TestimonialCard } from '../components/ui/TestimonialCard.jsx'
import { CTASection } from '../components/ui/CTASection.jsx'
import { sapProducts } from '../data/sapProducts.js'
import { solutions } from '../data/solutions.js'
import { clients } from '../data/clients.js'
import { testimonials } from '../data/testimonials.js'
import { siteMeta } from '../data/siteMeta.js'

export function HomePage() {
  return (
    <>
      <Seo title={undefined} description={siteMeta.description} path="/" />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-gradient-to-b from-card to-background">
        <Container className="py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">{siteMeta.tagline}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{siteMeta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/sap/">
              Explore SAP Solutions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/contact-us/" variant="outline">
              Talk to Our Team
            </Button>
          </div>
        </Container>
      </FadeHero>

      <section className="border-b border-border">
        <Container className="py-14">
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Who have we worked with?
          </p>
          <div className="mt-6">
            <LogoCloud clients={clients} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <SectionHeading
            eyebrow="SAP Products & Services"
            title="Agile, Smart and Intelligent Technologies"
            description="Intelligent ERP, analytics and procurement solutions built on the SAP platform."
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sapProducts
              .filter((product) => product.slug !== 'services')
              .map((product) => (
                <li key={product.slug}>
                  <Card className="flex h-full flex-col">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.shortDescription}</p>
                    <Link
                      to={product.path}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                    >
                      Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Card>
                </li>
              ))}
          </ul>
        </Container>
      </section>

      <section className="bg-muted/40">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Innovative Solutions"
            title="Other Services from Centric"
            description="Cloud, queue management, messaging, banking and revenue management technology."
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Card className="flex h-full flex-col">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{solution.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{solution.shortDescription}</p>
                  <Link
                    to={solution.path}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    View Features and Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <SectionHeading eyebrow="Our Culture" title="Great Companies Thrive on Efficiency" align="center" />
          <div className="mx-auto mt-10 max-w-3xl">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/about-us/" className="font-semibold text-accent hover:underline">
              More about Centric Limited
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Great companies thrive on efficiency"
        description="Let's talk about how Centric Limited can help your organisation adapt and scale with the right technology."
      />
    </>
  )
}
