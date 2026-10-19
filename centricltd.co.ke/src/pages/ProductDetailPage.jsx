import { Link } from 'react-router'
import { Sparkles } from 'lucide-react'
import { Seo } from '../lib/seo.jsx'
import { serviceSchema, breadcrumbSchema } from '../lib/jsonld.js'
import { Container } from '../components/ui/Container.jsx'
import { Breadcrumbs } from '../components/ui/Breadcrumbs.jsx'
import { FeatureGrid } from '../components/ui/FeatureGrid.jsx'
import { CTASection } from '../components/ui/CTASection.jsx'
import { FadeHero } from '../components/ui/FadeHero.jsx'

export function ProductDetailPage({ product, sectionLabel, sectionTo, items }) {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: sectionLabel, to: sectionTo },
    { label: product.name, to: product.path },
  ]

  return (
    <>
      <Seo
        title={product.name}
        description={product.metaDescription}
        path={product.path}
        jsonLd={[
          serviceSchema({ name: product.name, description: product.metaDescription, path: product.path }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
          </div>
          {product.heroImage ? (
            <img
              src={product.heroImage}
              alt={product.heroImageAlt}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-16 w-16 text-white/80" aria-hidden="true" />
            </div>
          )}
        </Container>
      </FadeHero>

      {product.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 1 ? 'bg-muted/40' : ''}>
          <Container className="grid gap-8 py-14 lg:grid-cols-2 lg:items-start">
            <div className={section.image && index % 2 === 1 ? 'lg:order-2' : ''}>
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mt-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <div className="mt-6">
                  <FeatureGrid items={section.bullets} columns={2} />
                </div>
              )}
            </div>
            {section.image && (
              <img
                src={section.image}
                alt={section.imageAlt || ''}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            )}
          </Container>
        </section>
      ))}

      <CTASection
        title={`Ready to talk about ${product.name}?`}
        description="Tell us about your business and our team will get back to you with next steps."
        ctaLabel="Get in Touch"
      />

      {items && items.length > 1 && (
        <section className="border-t border-border">
          <Container className="py-14">
            <h2 className="text-xl font-semibold">More from {sectionLabel}</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {items
                .filter((item) => item.slug !== product.slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={item.path}
                      className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  )
}
