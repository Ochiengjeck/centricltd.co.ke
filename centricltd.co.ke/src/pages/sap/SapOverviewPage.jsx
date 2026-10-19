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
import { sapProducts } from '../../data/sapProducts.js'
import { sapBadge } from '../../data/brand.js'
import sapOverviewPhoto from '../../assets/sap/business-one/office-1.jpg'

export function SapOverviewPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'SAP Products & Services', to: '/sap/' },
  ]

  return (
    <>
      <Seo
        title="SAP Products & Services"
        description="Agile, smart and intelligent SAP technologies — S/4HANA, Business One, Analytics Cloud, Ariba and implementation services, delivered by Centric Limited in East Africa."
        path="/sap/"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <h1 className="text-3xl font-bold sm:text-4xl">Agile, Smart and Intelligent Technologies</h1>
              <img src={sapBadge} alt="SAP Partner" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              As an SAP partner, Centric Limited helps East African organisations adopt intelligent ERP and
              procurement technology that scales with the business.
            </p>
          </div>
          <img
            src={sapOverviewPhoto}
            alt="Team collaborating on an SAP implementation project"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </Container>
      </FadeHero>

      <section>
        <Container className="py-14">
          <SectionHeading title="Explore SAP solutions" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sapProducts.map((product) => (
              <li key={product.slug}>
                <Card className="flex h-full flex-col">
                  <h2 className="font-heading text-lg font-semibold text-foreground">{product.name}</h2>
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

      <CTASection
        title="Not sure which SAP solution fits your business?"
        description="Talk to our team about your current systems and goals — we'll recommend the right path."
      />
    </>
  )
}
