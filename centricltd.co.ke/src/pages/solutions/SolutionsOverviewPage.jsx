import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../../lib/seo.jsx'
import { breadcrumbSchema } from '../../lib/jsonld.js'
import { Container } from '../../components/ui/Container.jsx'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { CTASection } from '../../components/ui/CTASection.jsx'
import { FadeHero } from '../../components/ui/FadeHero.jsx'
import { solutions } from '../../data/solutions.js'
import solutionsOverviewPhoto from '../../assets/sap/ariba/office-2.jpg'

export function SolutionsOverviewPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Innovative Solutions', to: '/more-solutions/' },
  ]

  return (
    <>
      <Seo
        title="Innovative Solutions"
        description="Cloud services, queue management, SMS and PRSP services, banking systems and revenue management from Centric Limited."
        path="/more-solutions/"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Enjoy Powerful Technology Solutions</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Beyond SAP, Centric Limited builds and manages the technology that keeps customer-facing
              organisations running smoothly.
            </p>
          </div>
          <img
            src={solutionsOverviewPhoto}
            alt="Team reviewing a technology solution together"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </Container>
      </FadeHero>

      <section>
        <Container className="py-14">
          <SectionHeading title="Our solutions" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Card className="flex h-full flex-col">
                  <h2 className="font-heading text-lg font-semibold text-foreground">{solution.name}</h2>
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

      <CTASection
        title="Looking for a solution tailored to your sector?"
        description="From healthcare to finance and the public sector, we'll help you find the right fit."
      />
    </>
  )
}
